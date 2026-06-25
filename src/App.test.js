import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('selects an occasion from the dropdown', () => {
  render(<App />);
  const dropdown = screen.getByRole('button', { name: /occasion/i });

  fireEvent.click(dropdown);
  fireEvent.click(screen.getByRole('option', { name: /birthday/i }));

  expect(screen.getByRole('button', { name: /birthday/i })).toBeInTheDocument();
});
