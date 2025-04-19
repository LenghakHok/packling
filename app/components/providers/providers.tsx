import type { PropsWithChildren } from "react";
import { QueryClientProvider } from "./query-client";

export function Providers({ children }: PropsWithChildren) {
  return <QueryClientProvider>{children}</QueryClientProvider>;
}
