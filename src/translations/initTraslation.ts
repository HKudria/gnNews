import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {LanguageEnums} from '../store/news/NewsInterface';
import commonEn from './en/common.json';
import commonPl from './pl/common.json';

i18next.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: false,
        fallbackLng: LanguageEnums.EN,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                common: commonEn,
            },
            pl: {
                common: commonPl,
            },
        },
    });

export default i18next;