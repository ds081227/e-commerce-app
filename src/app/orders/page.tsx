import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { SearchX } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, useRouter } from "next/navigation";
import { db } from "@/db";
import { FaExternalLinkAlt } from "react-icons/fa";
export default async function Page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return notFound();
  }
  const orders = await db.order.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      configuration: true,
    },
  });

  return (
    <MaxWidthWrapper>
      <h1 className="text-4xl font-bold tracking-tight mt-7">My orders</h1>
      {orders ? (
        <Table className="mt-7">
          <TableHeader>
            <TableRow>
              <TableHead>Order time</TableHead>
              <TableHead>Order Id</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                className=" bg-accent hover:bg-gray-900/5">
                <TableCell>{order.createdAt.toLocaleDateString()}</TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Link href={`/thank-you/?orderId=${order.id}`} key={order.id}>
                    <FaExternalLinkAlt />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center min-h-[500px] mt-7 rounded-lg w-full bg-gray-900/5">
          <SearchX className="w-20 h-20 text-zinc-400" />
          <p className="mt-3">
            Ooops.. seems like you don't have any orders yet...
          </p>
          <p>
            <Link className="text-primary" href="configure/upload">
              Click here
            </Link>{" "}
            to order one now!
          </p>
        </div>
      )}
    </MaxWidthWrapper>
  );
}
