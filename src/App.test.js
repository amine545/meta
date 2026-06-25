import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Little Lemon homepage mockup', () => {
  render(<App />);

  expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /little lemon/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /reserve a table/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /this weeks specials/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /greek salad/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /bruschetta/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /lemon dessert/i })).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument();
});
