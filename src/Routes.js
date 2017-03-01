import React, { Component } from 'react';
// react router
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
// react redux
import { Provider } from 'react-redux'
// redux store
import configureStore from './redux/store';
// components
import App from "./app/App";
import Auth from "./auth/Auth";
// material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// redux store
const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>

                    <Router history={history}>
                        <Route path="/" component={App} />
                        <Route path="/welcome" component={Auth} />
                    </Router>

                </MuiThemeProvider>
            </Provider>
        )
    }
}

export default Routes;