import { Link } from '@tanstack/react-router';
import { Nav } from './nav';
import './sidebar.css';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-background-container">
        <img
          alt="galaxy"
          src="/assets/ferenc-horvath-skcFiBu91AA-unsplash.jpg"
          className="sidebar-background"
        />
      </div>
      <Link to="/">
        <img
          alt="viatrixart.com"
          src="/assets/logo.png"
          className="sidebar-logo"
        />
      </Link>
      <Nav />
    </aside>
  );
};
