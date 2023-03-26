import React from 'react';
import {render, screen} from '@testing-library/react';
import HeaderModal from './HeaderModal';
import {Provider} from 'react-redux';
import {store} from '../../../store/store';
import {BrowserRouter} from 'react-router-dom';
import i18next from 'i18next';
import {I18nextProvider} from 'react-i18next';
import '../../../translations/initTraslation';

test('render headerModal', () => {
    render(<Provider store={store}>
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
            <HeaderModal closeModal={()=>{}}/>
            </I18nextProvider>
        </BrowserRouter>
    </Provider>);

    expect(screen.getByText(/Close/i)).toBeInTheDocument();
    expect(screen.getByText(/Header modal/i)).toBeInTheDocument();
    expect(screen.getByText(/The most difficulties staff is work with redux and make some test, I'd never done it before/i)).toBeInTheDocument();
});
