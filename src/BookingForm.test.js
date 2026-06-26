import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm, {
  validateBookingForm,
  validateDate,
  validateGuests,
  validateOccasion,
  validateTime,
} from './BookingForm';

const defaultProps = {
  availableTimes: ['17:00', '18:00'],
  bookedTimes: [],
  dispatchAvailableTimes: jest.fn(),
  onSubmit: jest.fn(),
};

test('renders the BookingForm heading', () => {
  render(<BookingForm {...defaultProps} />);

  expect(screen.getByText('BookingForm')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /on click/i })).toBeInTheDocument();
});

test('applies HTML5 validation attributes to booking fields', () => {
  render(<BookingForm {...defaultProps} />);

  expect(screen.getByLabelText(/choose date/i)).toHaveAttribute('required');
  expect(screen.getByLabelText(/choose time/i)).toHaveAttribute('required');
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute('required');
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute('min', '1');
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute('max', '10');
  expect(screen.getByRole('button', { name: /on click/i })).toHaveAttribute('aria-label', 'On Click');
});

test('dispatches a date change with the selected date', () => {
  const dispatchAvailableTimes = jest.fn();
  render(<BookingForm {...defaultProps} dispatchAvailableTimes={dispatchAvailableTimes} />);

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: '2026-07-04' },
  });

  expect(dispatchAvailableTimes).toHaveBeenCalledWith({
    type: 'date_changed',
    date: '2026-07-04',
  });
});

test('validates date values', () => {
  expect(validateDate('2026-07-04')).toBe(true);
  expect(validateDate('')).toBe(false);
});

test('validates time values', () => {
  expect(validateTime('17:00', defaultProps.availableTimes)).toBe(true);
  expect(validateTime('20:00', defaultProps.availableTimes)).toBe(false);
});

test('validates guest counts', () => {
  expect(validateGuests('1')).toBe(true);
  expect(validateGuests('10')).toBe(true);
  expect(validateGuests('0')).toBe(false);
  expect(validateGuests('11')).toBe(false);
});

test('validates occasion values', () => {
  expect(validateOccasion('Birthday')).toBe(true);
  expect(validateOccasion('Dinner')).toBe(false);
});

test('validates the complete booking form', () => {
  expect(validateBookingForm({
    date: '2026-07-04',
    time: '17:00',
    guests: '2',
    occasion: 'Birthday',
  }, defaultProps.availableTimes)).toBe(true);

  expect(validateBookingForm({
    date: '',
    time: '17:00',
    guests: '2',
    occasion: 'Birthday',
  }, defaultProps.availableTimes)).toBe(false);
});
