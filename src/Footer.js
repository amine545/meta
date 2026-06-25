function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <a className="footer-logo" href="/" aria-label="Little Lemon homepage">
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">Little Lemon</span>
        </a>

        <section aria-labelledby="footer-nav-title">
          <h2 id="footer-nav-title">Doormat Navigation</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
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
