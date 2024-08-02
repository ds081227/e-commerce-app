"use server";

import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { db } from "@/db";
import { stripe } from "@/lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { Order } from "@prisma/client";

export const createCheckoutSession = async ({
  configId,
  user,
}: {
  configId: string;
  user: KindeUser | null;
}) => {
  const configuration = await db.configuration.findUnique({
    where: { id: configId },
  });

  if (!configuration) {
    throw new Error("No such configuration found");
  }

  if (!user) {
    throw new Error("You need to be logged in.");
  }

  const { finish, material } = configuration;
  const total =
    BASE_PRICE +
    PRODUCT_PRICES.finish[finish!] +
    PRODUCT_PRICES.material[material!];

  console.log(user.id, configuration.id);

  let order: Order | undefined = undefined;
  const existingOrder = await db.order.findFirst({
    where: {
      userId: user.id,
      configurationId: configId,
    },
  });

  if (existingOrder) {
    order = existingOrder;
  } else {
    order = await db.order.create({
      data: {
        amount: total / 100,
        userId: user.id,
        configurationId: configId,
        status: "awaiting_shipment",
      },
    });
  }

  const product = await stripe.products.create({
    name: "Custom iPhone Case",
    images: [configuration.imageUrl],
    default_price_data: {
      currency: "usd",
      unit_amount: total,
    },
  });

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/configure/preview?id=${configuration.id}`,
    mode: "payment",
    shipping_address_collection: { allowed_countries: ["US", "DE"] },
    metadata: {
      userId: user.id,
      orderId: order.id,
    },
    line_items: [
      {
        price: product.default_price as string,
        quantity: 1,
      },
    ],
  });
  return { url: stripeSession.url };
};
