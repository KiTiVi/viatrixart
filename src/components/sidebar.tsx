import { Link } from '@tanstack/react-router';
import { Nav } from './nav';
import './sidebar.css';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-background-container">
        <img
          src="/viatrixart/assets/ferenc-horvath-skcFiBu91AA-unsplash.jpg"
          alt="galaxy"
          className="sidebar-background"
        />
      </div>
      <Link to="/">
        <img
          src="/assets/logo.png"
          alt="viatrixart.com"
          className="sidebar-logo"
        />
      </Link>
      <Nav />
    </aside>
  );
};
