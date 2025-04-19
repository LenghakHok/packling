import { createFetch } from "@better-fetch/fetch";

export const $fetch = createFetch({
  baseURL: process.env.BASE_URL,
  duplex: "full",
  throw: true
});
