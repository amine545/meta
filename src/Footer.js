import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <Link className="footer-logo" to="/" aria-label="Little Lemon homepage">
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">Little Lemon</span>
        </Link>

        <section aria-labelledby="footer-nav-title">
          <h2 id="footer-nav-title">Doormat Navigation</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </section>

        <section aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <address>
            123 Lemon Street<br />
            Chicago, IL<br />
            <a href="tel:+13125550123">(312) 555-0123</a><br />
            <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
          </address>
        </section>

        <section aria-labelledby="social-title">
          <h2 id="social-title">Social Media Links</h2>
          <ul>
            <li><a href="https://www.facebook.com" rel="noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.x.com" rel="noreferrer">X</a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
