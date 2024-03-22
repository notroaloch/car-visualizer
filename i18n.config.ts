import enUS from './i18n/en-US';
import esMX from './i18n/es-MX';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en-US',
  messages: {
    'en-US': enUS,
    'es-MX': esMX,
  },
}));
