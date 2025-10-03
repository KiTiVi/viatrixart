import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
  staticData: {
    navLinkOrder: 4,
    title: 'Contact',
  },
});

function RouteComponent() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}
