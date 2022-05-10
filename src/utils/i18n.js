import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import lang from '../../lang';
import { LANG } from '../constants/static';

i18n.use(initReactI18next).init({
  resources: lang,
  fallbackLng: LANG.DEFAULT,
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
