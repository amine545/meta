import { useReducer, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import Homepage from './Homepage';

export function getAvailableTimes(date) {
  if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function') {
    return window.fetchAPI(date);
  }

  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

export function submitAPIForm(formData) {
  if (typeof window !== 'undefined' && typeof window.submitAPI === 'function') {
    return window.submitAPI(formData);
  }

  return true;
}

export function initializeTimes() {
  return getAvailableTimes(new Date());
}

export function updateTimes(state, action) {
  if (action.type === 'date_changed') {
    return getAvailableTimes(new Date(action.date));
  }

  if (action.type === 'time_booked') {
    return state.filter((time) => time !== action.time);
  }

  return state;
}

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes());
  const [bookedTimes, setBookedTimes] = useState(['18:30', '20:30']);

  const submitForm = (booking) => {
    if (submitAPIForm(booking)) {
      setBookedTimes((currentTimes) => [...currentTimes, booking.time]);
      dispatchAvailableTimes({ type: 'time_booked', time: booking.time });
      navigate('/confirmed');
    }
  };

  const bookingPage = (
    <BookingPage
      availableTimes={availableTimes}
      bookedTimes={bookedTimes}
      dispatchAvailableTimes={dispatchAvailableTimes}
      submitForm={submitForm}
    />
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={bookingPage} />
        <Route path="/reservations" element={bookingPage} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/menu" element={<Homepage />} />
        <Route path="/order-online" element={<Homepage />} />
        <Route path="/login" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default Main;
