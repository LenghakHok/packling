import { createFetch } from "@better-fetch/fetch";

export const $fetch = createFetch({
  baseURL: import.meta.env.VITE_PUBLIC_BASE_URL,
  duplex: "full",
  throw: true
});
