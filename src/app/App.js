import React, { Component } from 'react';
import logo from '../logo.svg';
// react intl
import {defineMessages, injectIntl} from 'react-intl';
// react router
import { browserHistory } from 'react-router';
// redux
import { connect } from 'react-redux';
// css
import './App.css';

class App extends Component {
    componentWillMount() {
        this.redirect(this.props)
    }

    redirect(props) {
        if(!props.user) {
            browserHistory.push('/welcome');
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    };
}

const AppConnected = connect(mapStateToProps)(App);
export default injectIntl(AppConnected);
