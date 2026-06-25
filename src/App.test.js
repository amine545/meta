import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage text', () => {
  render(<App />);
  const homepageText = screen.getByText(/homepage/i);
  expect(homepageText).toBeInTheDocument();
});
