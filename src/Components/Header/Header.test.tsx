import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Header from './Header';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import {BrowserRouter} from 'react-router-dom';
import i18next from 'i18next';
import {I18nextProvider} from 'react-i18next';
import '../../translations/initTraslation';

test('render headerModal', () => {
    render(<Provider store={store}>
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
            <Header />
            </I18nextProvider>
        </BrowserRouter>
    </Provider>);


    expect(screen.getByText(/Change language/i)).toBeInTheDocument();
    expect(screen.getByText(/Change view/i)).toBeInTheDocument();
    expect(screen.getByText(/Modal/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Change language/i }))
    expect(screen.getByText(/Zmienić język/i)).toBeInTheDocument();
    expect(screen.getByText(/Zmienić widok/i)).toBeInTheDocument();
});
