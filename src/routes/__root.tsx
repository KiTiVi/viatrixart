import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Sidebar } from '../components/sidebar';
import './__root.css';

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  );
}
