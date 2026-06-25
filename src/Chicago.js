function Chicago() {
  return (
    <section className="chicago" aria-labelledby="chicago-title">
      <div className="chicago-content">
        <div>
          <h2 id="chicago-title">Little Lemon</h2>
          <p className="location">Chicago</p>
          <p>
            Adrian and Mario opened Little Lemon to share Mediterranean cooking
            shaped by family recipes, seasonal ingredients, and a modern Chicago
            dining experience.
          </p>
        </div>
        <div className="about-images" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=700&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=700&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
