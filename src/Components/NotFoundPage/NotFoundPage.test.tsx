import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

test('Render notFoundPage', () => {
  render(<NotFoundPage/>);
  const buttonReturn = screen.getByText(/Return to main page/i);
  expect(buttonReturn).toBeInTheDocument();

  const image = screen.getByAltText(/notFound/i);
  expect(image).toBeInTheDocument();
});
