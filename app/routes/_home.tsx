import { Outlet } from "react-router";
import { Navigations } from "~/components/core/nav";
import { Particles } from "~/components/magic/particle";

export default function HomeLayout() {
  return (
    <section className="container relative flex size-full min-h-screen min-w-screen flex-col items-center p-6">
      <div className="relative z-10 flex size-full flex-col items-center">
        <Navigations />
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
