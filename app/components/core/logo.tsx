import type { ComponentPropsWithRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export function Logo(props: ComponentPropsWithRef<typeof Avatar>) {
  return (
    <Avatar {...props}>
      <AvatarImage src="/logo.svg" />
      <AvatarFallback />
    </Avatar>
  );
}
