import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <section className="booking-page" aria-labelledby="confirmed-title">
      <div className="booking-content confirmation-content">
        <p className="eyebrow">Booking confirmed</p>
        <h1 id="confirmed-title">Your reservation is confirmed.</h1>
        <p>
          Thank you for booking a table at Little Lemon. We look forward to
          welcoming you.
        </p>
        <Link className="button primary-button" to="/">Back to homepage</Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
