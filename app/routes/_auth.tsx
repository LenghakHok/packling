import { Outlet } from "react-router";

export default function AuthlLayout() {
  return (
    <main className="flex min-h-dvh min-w-dvw items-center justify-center">
      <Outlet />
    </main>
  );
}
