import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Mock IntersectionObserver for AOS
beforeAll(() => {
  window.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() { return null; }
    disconnect() { return null; }
    unobserve() { return null; }
  };
});

test('renders App without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check for the navbar brand or title
  const brandElements = screen.getAllByText(/Robert J. Guzman/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
