const reviews = [
  {
    name: 'Ari Lane',
    rating: '5/5',
    quote: 'Fresh flavors, warm service, and the easiest dinner reservation we have made all year.',
  },
  {
    name: 'Mina Patel',
    rating: '5/5',
    quote: 'The specials are always worth ordering. Little Lemon feels like a neighborhood favorite.',
  },
  {
    name: 'Jon Bell',
    rating: '4/5',
    quote: 'Great food and a relaxed atmosphere. The lemon dessert is the table favorite.',
  },
];

function CustomersSay() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="section-inner">
        <h2 id="testimonials-title">Testimonials</h2>
        <div className="testimonial-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.name}>
              <p className="rating" aria-label={`${review.rating} stars`}>
                {review.rating}
              </p>
              <h3>{review.name}</h3>
              <p>{review.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
