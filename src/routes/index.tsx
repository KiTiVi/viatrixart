import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
  staticData: {
    navLinkOrder: 0,
    title: 'Home',
  },
});

function Index() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
