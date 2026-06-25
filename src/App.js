import './App.css';

const specials = [
  {
    name: 'Greek salad',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    name: 'Bruschetta',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=700&q=80',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    name: 'Lemon Dessert',
    price: '$5.00',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=700&q=80',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Logo() {
  return (
    <a className="logo" href="/" aria-label="Little Lemon homepage">
      <span className="logo-mark" aria-hidden="true" />
      <span className="logo-text">Little Lemon</span>
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <nav className="nav-container" aria-label="Primary navigation">
          <Logo />
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-copy">
              <h1>Little Lemon</h1>
              <p className="location">Chicago</p>
              <p>
                We are a family owned Mediterranean restaurant, focused on traditional
                recipes served with a modern twist.
              </p>
              <a className="button primary-button" href="/reservations">Reserve a Table</a>
            </div>
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80"
              alt="Chef plating Mediterranean appetizers"
            />
          </div>
        </section>

        <section className="specials" aria-labelledby="specials-title">
          <div className="section-heading">
            <h2 id="specials-title">This weeks specials!</h2>
            <a className="button secondary-button" href="/order-online">Online Menu</a>
          </div>

          <div className="specials-grid">
            {specials.map((dish) => (
              <article className="special-card" key={dish.name}>
                <img src={dish.image} alt={dish.name} />
                <div className="card-content">
                  <div className="card-heading">
                    <h3>{dish.name}</h3>
                    <p>{dish.price}</p>
                  </div>
                  <p className="dish-description">{dish.description}</p>
                  <a className="delivery-link" href="/order-online">
                    Order a delivery
                    <span aria-hidden="true">&gt;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
