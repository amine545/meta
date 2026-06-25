import BookingForm from './BookingForm';
import BookingSlotList from './BookingSlotList';

function BookingPage({ availableTimes, bookedTimes, dispatchAvailableTimes, submitForm }) {
  return (
    <section className="booking-page" aria-labelledby="booking-title">
      <div className="booking-content">
        <p className="eyebrow">Reservations</p>
        <h1 id="booking-title">Reserve a Table</h1>
        <p>
          Choose a date, time, party size, and occasion for your Little Lemon visit.
        </p>
        <div className="booking-layout">
          <BookingForm
            availableTimes={availableTimes}
            bookedTimes={bookedTimes}
            dispatchAvailableTimes={dispatchAvailableTimes}
            onSubmit={submitForm}
          />
          <BookingSlotList bookedTimes={bookedTimes} availableTimes={availableTimes} />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
