import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">
         MovieCollector
      </div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Моя коллекция
        </Link>
        <Link to="/popular" className={location.pathname === '/popular' ? 'active' : ''}>
           Популярные фильмы
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;