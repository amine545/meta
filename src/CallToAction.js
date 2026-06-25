import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <h1>Little Lemon</h1>
          <p className="location">Chicago</p>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Link className="button primary-button" to="/booking">Reserve a Table</Link>
        </div>
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80"
          alt="Chef plating Mediterranean appetizers"
        />
      </div>
    </section>
  );
}

export default CallToAction;
