import { Link } from 'react-router-dom';

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

function Specials() {
  return (
    <section className="specials" aria-labelledby="specials-title">
      <div className="section-heading">
        <h2 id="specials-title">This weeks specials!</h2>
        <Link className="button secondary-button" to="/order-online">Online Menu</Link>
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
              <Link className="delivery-link" to="/order-online">
                Order a delivery
                <span aria-hidden="true">&gt;</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
