import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/portfolio')({
  component: RouteComponent,
  staticData: {
    navLinkOrder: 1,
    title: 'Portfolio',
  },
});

function RouteComponent() {
  return (
    <div>
      <h1>Portfolio</h1>
    </div>
  );
}
