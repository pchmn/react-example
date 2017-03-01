// translationRunner.js
const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
    messagesDirectory: 'resources/messages',
    translationsDirectory: 'resources/translations/locales/',
    languages: ['en', 'fr'], // any language you need
    singleMessagesFile: false,
    detectDuplicateIds: true,
});