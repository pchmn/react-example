import React, { Component, PropTypes } from 'react';
// react intl
import {defineMessages, injectIntl} from 'react-intl';
// react router
import { browserHistory } from 'react-router';
// redux
import { connect } from 'react-redux';
// material ui
import {Tabs, Tab} from 'material-ui/Tabs';
// components
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
// messages
import messages from '../messages';
// css
import './Auth.css';


class Auth extends Component {
    static propTypes = {
        intl: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            value: "signIn",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.redirect(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.redirect(nextProps);
    }

    redirect(props) {
        if(props.user) {
            browserHistory.push('/');
        }
    }

    handleChange(value) {
        this.setState({
            value: value,
        });
    };

    render() {
        const {formatMessage} = this.props.intl;

        return (
            <div className="container">

                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="Tabs"
                >
                    <Tab label={ formatMessage(messages.signIn) } value="signIn" >
                        <SignIn/>
                    </Tab>

                    <Tab label={ formatMessage(messages.signUp) } value="signUp">
                        <SignUp/>
                    </Tab>
                </Tabs>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    };
}

const AuthConnected = connect(mapStateToProps)(Auth);
export default injectIntl(AuthConnected);