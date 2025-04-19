import type { User } from "better-auth";
import type { ComponentPropsWithRef } from "react";
import { Link } from "react-router";

import { Logo } from "~/components/core/logo";
import { GithubIcon } from "~/components/icons/github";
import { buttonVariants } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/cn";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface Props extends ComponentPropsWithRef<"nav"> {
  user: User | undefined;
}

export function Navigation({ className, user, ...props }: Props) {
  return (
    <nav
      {...props}
      className={cn(
        "sticky top-4 z-10 flex h-12 w-full max-w-lg items-center justify-between rounded-full border bg-card shadow",
        className
      )}>
      <div className="flex items-center">
        <Logo className="mx-4 size-6 rounded-none" />
      </div>

      <div className="mr-2 flex h-full items-center justify-center">
        <Link
          to="https://github.com/LenghakHok/packling"
          about="_blank"
          className={cn(
            buttonVariants({ size: "icon", variant: "ghost" }),
            "size-fit rounded-full"
          )}>
          <span className="sr-only">Gihub Repo</span>
          <GithubIcon className="size-5" />
        </Link>
        <Separator
          orientation="vertical"
          className="mx-4 max-h-4 w-1"
        />

        {user?.id ? (
          <Avatar>
            <AvatarImage src={user.image ?? ""} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
        ) : (
          <Link to={"/auth"}>Sign In</Link>
        )}
      </div>
    </nav>
  );
}
