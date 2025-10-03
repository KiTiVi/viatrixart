import { useRouter, Link } from '@tanstack/react-router';
import './nav.css';

export const Nav: React.FC = () => {
  const { flatRoutes } = useRouter();

  return (
    <nav className="nav">
      <ul>
        {flatRoutes
          .sort(
            (a, b) =>
              (a.options?.staticData?.navLinkOrder || 0) -
              (b.options?.staticData?.navLinkOrder || 0)
          )
          .map((route) => {
            return (
              <li key={route.id} className="nav-li">
                <Link
                  to={route.to}
                  activeProps={{ className: 'active' }}
                  className="nav-link"
                >
                  {route.options?.staticData?.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
