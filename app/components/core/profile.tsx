import type { User } from "better-auth";
import { LogOutIcon } from "lucide-react";

import { type ComponentPropsWithRef, useCallback } from "react";
import { redirect } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "~/components/ui/dropdown-menu";
import { authClient } from "~/lib/auth.client";

interface Props extends ComponentPropsWithRef<typeof DropdownMenu> {
  user: User;
}

export function Profile({ user, ...props }: Props) {
  const handleSignOut = useCallback(async () => {
    await authClient.signOut({
      fetchOptions: {
        onResponse: () => {
          redirect("/auth");
        }
      }
    });
  }, []);

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user.image ?? ""} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem
          onClick={handleSignOut}
          className="bg-destructive/10 text-destructive hover:text-destructive!">
          <LogOutIcon className="text-destructive" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
