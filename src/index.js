import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes'
import './index.css';
// react intl
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
// translated strings
let localeData = function(locale) {
    switch(locale) {
        case 'fr':
            return require('../resources/translations/locales/fr.json');
        default:
            return require('../resources/translations/locales/en.json');
    }
};
addLocaleData([...en, ...fr]);

// load locales and message
// see https://medium.freecodecamp.com/internationalization-in-react-7264738274a0#.c04fcm5vt
const language = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = localeData(languageWithoutRegionCode);

// If browser doesn't support Intl (i.e. Safari), then we manually import
// the intl polyfill and locale data.
if (!window.intl) {
    require.ensure([
        'intl',
        'intl/locale-data/jsonp/en.js',
        'intl/locale-data/jsonp/fr.js',
    ], (require) => {
        require('intl');
        require('intl/locale-data/jsonp/en.js');
        require('intl/locale-data/jsonp/fr.js');
        ReactDOM.render(
            <IntlProvider locale={language} messages={messages}>
                <Routes />
            </IntlProvider>,
            document.getElementById('root')
        );
    });
} else {
    ReactDOM.render(
        <IntlProvider locale={language} messages={messages}>
            <Routes />
        </IntlProvider>,
        document.getElementById('root')
    );
}
