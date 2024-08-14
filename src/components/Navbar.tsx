import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;
  return (
    <nav className="sticky z-[100] inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            <span className="text-green-600">kustom</span>kase
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                {isAdmin && (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}>
                    Dashboard
                  </Link>
                )}
                <Link
                  href="/orders"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  My orders
                </Link>
                <LogoutLink
                  className={buttonVariants({ size: "sm", variant: "ghost" })}>
                  Sign out
                </LogoutLink>
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}>
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <RegisterLink
                  className={buttonVariants({ size: "sm", variant: "ghost" })}>
                  Sign up
                </RegisterLink>

                <LoginLink
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  Login
                </LoginLink>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}>
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
