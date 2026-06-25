import BookingSlot from './BookingSlot';

function BookingSlotList({ bookedTimes, availableTimes }) {
  return (
    <section className="booking-slots" aria-labelledby="booking-slots-title">
      <h2 id="booking-slots-title">Booking slots</h2>
      <div className="slot-columns">
        <div>
          <h3>Available times</h3>
          <ul>
            {availableTimes.map((time) => (
              <BookingSlot key={time} time={time} status="available" />
            ))}
          </ul>
        </div>
        <div>
          <h3>Booked times</h3>
          <ul>
            {bookedTimes.map((time) => (
              <BookingSlot key={time} time={time} status="booked" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BookingSlotList;
