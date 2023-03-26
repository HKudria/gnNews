import React from 'react';
import {render, screen} from '@testing-library/react';
import NotFoundPage from './NotFoundPage';
import {store} from '../../store/store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import '../../translations/initTraslation';

test('Render notFoundPage', () => {
    render(<Provider store={store}>
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
                <NotFoundPage/>
            </I18nextProvider>
        </BrowserRouter>
    </Provider>);
    expect(screen.getByText(/Return to main page/i)).toBeInTheDocument();

    const image = screen.getByAltText(/notFound/i);
    expect(image).toBeInTheDocument();
});
