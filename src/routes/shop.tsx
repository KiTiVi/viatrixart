import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/shop')({
  component: RouteComponent,
  staticData: {
    navLinkOrder: 2,
    title: 'Shop',
  },
});

function RouteComponent() {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
}
