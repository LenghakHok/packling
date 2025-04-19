import { zodResolver } from "@hookform/resolvers/zod";
import React, { type ComponentPropsWithRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Form as FormProvider } from "~/components/ui/form";
import { authClient } from "~/lib/auth.client";
import { OAuth } from "~/modules/auth/constants/oauth";

const formSchema = z.object({
  provider: z.enum(["google", "github", "facebook", "discord", "twitter"])
});

interface SignInRequest extends z.infer<typeof formSchema> {}

export function SignInForm({
  className,
  ...props
}: ComponentPropsWithRef<"form">) {
  const form = useForm<SignInRequest>({
    resolver: zodResolver(formSchema)
  });

  const handleSubmit = useCallback(async (v: SignInRequest) => {
    await authClient.signIn.social({ provider: "google" });
  }, []);

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4">
        {OAuth.map((item) => (
          <Button
            key={React.useId()}
            variant={"outline"}
            onClick={() => form.setValue("provider", item.provider)}
            className="relative flex w-full items-center justify-center rounded-full">
            <item.icon className="-translate-y-1/2 absolute top-1/2 left-4 size-4 " />
            <span>
              Continue with <span>{item.provider}</span>
            </span>
          </Button>
        ))}
      </form>
    </FormProvider>
  );
}
