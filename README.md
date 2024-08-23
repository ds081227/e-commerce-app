# E-commerce Demo

This is a sample application that demonstrates an mobile case E-commerce
website. Users can upload their own photo which will be stored in uploadthing,
then customize their own phone case. User authentication is handled by Kinde and
payment by Stripe. After completing the purchase, an thank-you email will be
sent to your email address.

## Live Demonstration

The E-commerce demo can be
[viewed online here](https://kennylin-kustomcase.vercel.app/).

Here are screenshots that show the E-commerce demo application in use.

**Upload** ![Home Page](/screenshots/upload.png?raw=true "Optional Title")

---

**Design** ![Item Detail](/screenshots/design.png?raw=true "Optional Title")

---

**Checkout**
![Shopping Cart](/screenshots/checkout.png?raw=true "Shopping Cart")

---

**Payment** ![Shopping Cart](/screenshots/payment.png?raw=true "Shopping Cart")

---

**Thank-you Page**
![Shopping Cart](/screenshots/thankyou.png?raw=true "Shopping Cart")

---

**Email** ![Shopping Cart](/screenshots/email.png?raw=true "Shopping Cart")

## Getting Started

To get started you can simply clone this repository and install the
dependencies.

Clone the `ecommerce-demo` repository using git:

```bash
gh repo clone ds081227/e-commerce-app
cd e-commerce-app
```

Install dependencies with this command:

```bash
npm install
```

Run the application with this command:

```bash
npm run dev
```

## Tech Stack

- ReactJS
- Next.js
- PostgreSQL
- TypeScript
- TailwindCSS
- Stripe
- Kinde
