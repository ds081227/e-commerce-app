# E-commerce Demo

This is a sample application that demonstrates an mobile case E-commerce
website. Users can upload their own photo which will be stored in uploadthing
and create their own unique phone case. User authentication is handled by Kinde
and payment by Stripe. After completing the purchase, an thank-you email will be
sent to your email address.

## Live Demonstration

The E-commerce demo can be
[viewed online here](https://kennylin-kustomcase.vercel.app/).

Here are screenshots that show the E-commerce demo application in use.

**Upload** ![Home Page](/screenshots/upload.png?raw=true)

---

**Design** ![Design](/screenshots/design.png?raw=true)

---

**Checkout** ![Checkout](/screenshots/checkout.png?raw=true)

---

**Payment** ![Payment](/screenshots/payment.png?raw=true)

---

**Thank-you Page** ![Thank you](/screenshots/thankyou.png?raw=true)

---

**Email** ![Email](/screenshots/email.png?raw=true)

## Getting Started

To get started you can simply clone this repository and install the
dependencies.

Clone the `e-commerce-app` repository using git:

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
