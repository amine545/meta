import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-container" aria-label="Primary navigation">
      <Link className="logo" to="/" aria-label="Little Lemon homepage">
        <span className="logo-mark" aria-hidden="true" />
        <span className="logo-text">Little Lemon</span>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
