import i18n from 'sveltekit-i18n';

export const config = ({
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (
          await import('/static/lang/en.json')
      ).default,
    },
    {
      locale: 'pt',
      key: 'common',
      loader: async () => (
          await import('/static/lang/pt.json')
      ).default,
    },
  ]
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);