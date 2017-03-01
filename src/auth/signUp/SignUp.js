import React, { Component, PropTypes } from 'react';
// react intl
import {injectIntl} from 'react-intl';
// react redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {signUp} from "../authActions";
// messages
import messages from '../../messages';
// material ui
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
// formsy
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
// css
import '../signIn/SignIn.css';


class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canSubmit: false
        };
        this.enableButton = this.enableButton.bind(this);
        this.disableButton = this.disableButton.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.notifyFormError = this.notifyFormError.bind(this);
    }

    enableButton() {
        this.setState({
            canSubmit: true,
        });
    }

    disableButton() {
        this.setState({
            canSubmit: false,
        });
    }

    submitForm(data) {
        console.log(data)
        // sign in
        this.props.signUp({
            email: data.email,
            password: data.password
        });
    }

    notifyFormError(data) {
        console.error('Form error:', data);
    }

    render() {
        const {formatMessage} = this.props.intl;

        return(
            <Paper className="Paper">

                <Formsy.Form
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onValidSubmit={this.submitForm}
                    onInvalidSubmit={this.notifyFormError}
                    className="form"
                >
                    <FormsyText
                        name="email"
                        validations="isEmail"
                        validationError={ formatMessage(messages.errorInvalidEmail) }
                        hintText={ formatMessage(messages.emailAddress) }
                        required
                        type="email"
                    />

                    <FormsyText
                        name="password"
                        validations="minLength:6"
                        validationError={ formatMessage(messages.errorPasswordLength) }
                        hintText={ formatMessage(messages.password) }
                        required
                        type="password"
                    /><br/>

                    <FormsyText
                        name="confirmPassword"
                        validations={{
                            function(values, value) {
                                if(value)
                                    return values.password === value ? true : formatMessage(messages.errorPasswordsMismatch);
                                return true;
                            }
                        }}
                        validationError={ formatMessage(messages.errorPasswordLength) }
                        hintText={ formatMessage(messages.confirmPassword) }
                        required
                        type="password"
                    /><br/>

                    <RaisedButton
                        label={ formatMessage(messages.signUp) }
                        secondary={true}
                        className="signInButton"
                        type="submit"
                        disabled={!this.state.canSubmit}
                    /><br/>

                </Formsy.Form>

            </Paper>
        )
    }
}

SignUp.propTypes = {
    intl: PropTypes.object.isRequired,
    user: PropTypes.object,
    errorApi: PropTypes.object,
    loading: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        errorApi: state.auth.errorApi,
        loading: state.auth.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signUp }, dispatch);
}

const SignUpConnected = connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default injectIntl(SignUpConnected);