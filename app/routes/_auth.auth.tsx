import { Link } from "react-router";
import { Logo } from "~/components/core/logo";
import { buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/components/ui/card";
import { Muted } from "~/components/ui/typography";
import { cn } from "~/lib/cn";
import { SignInForm } from "~/modules/auth/templates/sign-in-form";

export default function Auth() {
  return (
    <Card className="flex w-full max-w-sm flex-col items-center justify-center gap-0 self-center bg-secondary p-1">
      <Card className="w-full shadow-none">
        <CardHeader className="flex flex-col items-center justify-center *:text-center">
          <Link
            to={"/"}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "flex size-12 flex-col items-center justify-center rounded-full hover:bg-transparent"
            )}>
            <Logo className="size-8 rounded-none" />
          </Link>
          <CardTitle className="font-extrabold text-2xl">
            Welcome to {import.meta.env.VITE_PUBLIC_APP_NAME}
          </CardTitle>
          <CardDescription>Choose an options below to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
      <CardFooter className="py-4 text-center">
        <Muted>By continuing you agreed with our terms & conditions</Muted>
      </CardFooter>
    </Card>
  );
}
