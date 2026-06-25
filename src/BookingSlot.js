function BookingSlot({ time, status }) {
  return (
    <li className={`booking-slot ${status}`}>
      <span>{time}</span>
      <span>{status === 'booked' ? 'Booked' : 'Available'}</span>
    </li>
  );
}

export default BookingSlot;
