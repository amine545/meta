import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const defaultProps = {
  availableTimes: ['17:00', '18:00'],
  bookedTimes: [],
  dispatchAvailableTimes: jest.fn(),
  onSubmit: jest.fn(),
};

test('renders the BookingForm heading', () => {
  render(<BookingForm {...defaultProps} />);

  expect(screen.getByText('BookingForm')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
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
