import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import {BrowserRouter} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import '../../translations/initTraslation';


test('Render footer', () => {
  render(<Provider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <Footer />
      </I18nextProvider>
    </BrowserRouter>
  </Provider>);

  expect(screen.getByText(/Current date/i)).toBeInTheDocument();
  expect(screen.getByText(/News count/i)).toBeInTheDocument();
});
