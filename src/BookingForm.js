import { useEffect, useState } from 'react';

const occasions = ['Birthday', 'Engagement', 'Anniversary'];

export function validateDate(date) {
  return Boolean(date);
}

export function validateTime(time, availableTimes) {
  return availableTimes.includes(time);
}

export function validateGuests(guests) {
  const guestCount = Number(guests);
  return Number.isInteger(guestCount) && guestCount >= 1 && guestCount <= 10;
}

export function validateOccasion(occasion) {
  return occasions.includes(occasion);
}

export function validateBookingForm(formData, availableTimes) {
  return (
    validateDate(formData.date) &&
    validateTime(formData.time, availableTimes) &&
    validateGuests(formData.guests) &&
    validateOccasion(formData.occasion)
  );
}

function BookingForm({ availableTimes, bookedTimes, dispatchAvailableTimes, onSubmit }) {
  const [formData, setFormData] = useState({
    date: '',
    time: availableTimes[0] || '',
    guests: '2',
    occasion: 'Birthday',
  });

  useEffect(() => {
    setFormData((currentData) => ({
      ...currentData,
      time: availableTimes.includes(currentData.time) ? currentData.time : availableTimes[0] || '',
    }));
  }, [availableTimes]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (name === 'date') {
      dispatchAvailableTimes({ type: 'date_changed', date: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateBookingForm(formData, availableTimes)) {
      return;
    }

    onSubmit(formData);
    setFormData((currentData) => ({
      ...currentData,
      time: availableTimes[0] || '',
    }));
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>BookingForm</h2>
      <label htmlFor="booking-date">Choose date</label>
      <input
        id="booking-date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="booking-time">Choose time</label>
      <select
        id="booking-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="booking-guests">Number of guests</label>
      <input
        id="booking-guests"
        name="guests"
        type="number"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label htmlFor="booking-occasion">Occasion</label>
      <select
        id="booking-occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        {occasions.map((occasion) => (
          <option key={occasion}>{occasion}</option>
        ))}
      </select>

      <button className="button primary-button" type="submit" aria-label="On Click">
        Make Your reservation
      </button>

      {bookedTimes.length > 0 && (
        <p className="booking-feedback">Latest booking added to booked times.</p>
      )}
    </form>
  );
}

export default BookingForm;
