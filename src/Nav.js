function Nav() {
  return (
    <nav className="nav-container" aria-label="Primary navigation">
      <a className="logo" href="/" aria-label="Little Lemon homepage">
        <span className="logo-mark" aria-hidden="true" />
        <span className="logo-text">Little Lemon</span>
      </a>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
