import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the Little Lemon homepage and routes to booking', () => {
  render(<App />);

  expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { name: /little lemon/i })[0]).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /reserve a table/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /this weeks specials/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /greek salad/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /bruschetta/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /lemon dessert/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /testimonials/i })).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('link', { name: /reserve a table/i }));

  expect(screen.getByRole('heading', { name: /reserve a table/i })).toBeInTheDocument();
  expect(screen.getByText('BookingForm')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /available times/i })).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: '2026-07-04' },
  });
  fireEvent.change(screen.getByLabelText(/choose time/i), {
    target: { value: '17:00' },
  });
  fireEvent.click(screen.getByRole('button', { name: /book now/i }));

  expect(screen.getAllByText('17:00')).toHaveLength(1);
});
