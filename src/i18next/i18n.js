import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from '../en/translation.json';
import translationKOREA from '../korean/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    korea: {
        translation: translationKOREA
    }
};
i18n.use(Backend).use(initReactI18next).init({
    resources,
    fallbackLng: 'korea',
    debug: true,
    interpolation: {
        escapeValue: false
    }
})
export default i18n;