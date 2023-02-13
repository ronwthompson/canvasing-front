import { render, screen } from '@testing-library/react';
import App from './App.tsx';

test('renders the splash page', () => {
  render(<App />);
  const linkElement = screen.getByText(/canvasing app/i);
  expect(linkElement).toBeInTheDocument();
});
