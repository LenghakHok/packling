import { Outlet, useLoaderData } from "react-router";

import { Navigation } from "~/components/core/navigation";
import { Particles } from "~/components/magic/particle";
import { auth } from "~/lib/auth.server";
import type { Route } from "./+types/_home";

export async function loader(args: Route.LoaderArgs) {
  const data = await auth.api.getSession({
    headers: args.request.headers
  });

  return data;
}

export default function HomeLayout() {
  const data = useLoaderData<typeof loader>();

  return (
    <section className="container relative flex size-full min-h-screen min-w-screen flex-col items-center p-6">
      <div className="relative z-10 flex size-full flex-col items-center">
        <Navigation user={data?.user} />
        <Outlet />
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color="#000000"
        refresh
      />
    </section>
  );
}
