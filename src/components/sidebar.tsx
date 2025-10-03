import { Link } from '@tanstack/react-router';
import { Image } from './image';
import { Nav } from './nav';
import './sidebar.css';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-background-container">
        <Image
          alt="galaxy"
          src="assets/ferenc-horvath-skcFiBu91AA-unsplash.jpg"
          className="sidebar-background"
        />
      </div>
      <Link to="/">
        <Image
          alt="viatrixart.com"
          src="assets/logo.png"
          className="sidebar-logo"
        />
      </Link>
      <Nav />
    </aside>
  );
};
