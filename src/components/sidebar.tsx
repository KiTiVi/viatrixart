import { Link } from '@tanstack/react-router';
import { Nav } from './nav';
import galaxy from 'src/assets/ferenc-horvath-skcFiBu91AA-unsplash.jpg';
import logo from 'src/assets/logo.png';
import './sidebar.css';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-background-container">
        <img alt="galaxy" src={galaxy} className="sidebar-background" />
      </div>
      <Link to="/">
        <img alt="viatrixart.com" src={logo} className="sidebar-logo" />
      </Link>
      <Nav />
    </aside>
  );
};
