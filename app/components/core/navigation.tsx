import type { ComponentPropsWithRef } from "react";
import { Link } from "react-router";

import { PlusIcon } from "lucide-react";
import { GithubIcon } from "~/components/icons/github";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/cn";
import { Button, buttonVariants } from "../ui/button";
import { Logo } from "./logo";

export function Navigation({
  className,
  ...props
}: ComponentPropsWithRef<"nav">) {
  return (
    <nav
      {...props}
      className={cn(
        "z-10 flex h-12 w-full max-w-lg items-center justify-between rounded-full border bg-card shadow",
        className
      )}>
      <div className="flex items-center">
        <Logo className="mx-4 size-6 rounded-none" />
      </div>

      <div className="mr-2 flex h-full items-center justify-center gap-2">
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
          className="max-h-4 w-1"
        />

        <Button
          className="rounded-full"
          size="sm">
          <PlusIcon className="size-4" />
          <span>Add more</span>
        </Button>
      </div>
    </nav>
  );
}
