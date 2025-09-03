import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { common as commonEn } from './locales/en/common';
import { form as formEn } from './locales/en/form';
import { common as commonEs } from './locales/es/common';
import { form as formEs } from './locales/es/form';
import { common as commonPtBr } from './locales/pt-BR/common';
import { form as formPtBr } from './locales/pt-BR/form';
import { common as commonFr } from './locales/fr/common';
import { form as formFr } from './locales/fr/form';
import { common as commonDe } from './locales/de/common';
import { form as formDe } from './locales/de/form';
import { common as commonIt } from './locales/it/common';
import { form as formIt } from './locales/it/form';
import { common as commonHi } from './locales/hi/common';
import { form as formHi } from './locales/hi/form';
import { common as commonUr } from './locales/ur/common';
import { form as formUr } from './locales/ur/form';
import { common as commonAr } from './locales/ar/common';
import { form as formAr } from './locales/ar/form';
import { common as commonJa } from './locales/ja/common';
import { form as formJa } from './locales/ja/form';
import { common as commonKo } from './locales/ko/common';
import { form as formKo } from './locales/ko/form';
import { common as commonRu } from './locales/ru/common';
import { form as formRu } from './locales/ru/form';
import { common as commonUk } from './locales/uk/common';
import { form as formUk } from './locales/uk/form';

export const languages = [
  {
    code: 'ar',
    name: 'العربية',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/sa.svg',
    dir: 'rtl',
  },
  {
    code: 'de',
    name: 'Deutsch',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/de.svg',
    dir: 'ltr',
  },
  {
    code: 'en',
    name: 'English',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/us.svg',
    dir: 'ltr',
  },
  {
    code: 'es',
    name: 'Español',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/es.svg',
    dir: 'ltr',
  },
  {
    code: 'fr',
    name: 'Français',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/fr.svg',
    dir: 'ltr',
  },
  {
    code: 'hi',
    name: 'हिन्दी',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/in.svg',
    dir: 'ltr',
  },
  {
    code: 'it',
    name: 'Italiano',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/it.svg',
    dir: 'ltr',
  },
  {
    code: 'ja',
    name: '日本語',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/jp.svg',
    dir: 'ltr',
  },
  {
    code: 'ko',
    name: '한국어',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/kr.svg',
    dir: 'ltr',
  },
  {
    code: 'pt-BR',
    name: 'Português',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/br.svg',
    dir: 'ltr',
  },
  {
    code: 'ru',
    name: 'Русский',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/ru.svg',
    dir: 'ltr',
  },
  {
    code: 'uk',
    name: 'Українська',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/ua.svg',
    dir: 'ltr',
  },
  {
    code: 'ur',
    name: 'اردو',
    flag: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/pk.svg',
    dir: 'rtl',
  },
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: commonEn,
        form: formEn,
      },
      es: {
        common: commonEs,
        form: formEs,
      },
      'pt-BR': {
        common: commonPtBr,
        form: formPtBr,
      },
      fr: {
        common: commonFr,
        form: formFr,
      },
      de: {
        common: commonDe,
        form: formDe,
      },
      it: {
        common: commonIt,
        form: formIt,
      },
      hi: {
        common: commonHi,
        form: formHi,
      },
      ur: {
        common: commonUr,
        form: formUr,
      },
      ar: {
        common: commonAr,
        form: formAr,
      },
      ja: {
        common: commonJa,
        form: formJa,
      },
      ko: {
        common: commonKo,
        form: formKo,
      },
      ru: {
        common: commonRu,
        form: formRu,
      },
      uk: {
        common: commonUk,
        form: formUk,
      },
    },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
