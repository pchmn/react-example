//const defineMessages = require('react-intl').defineMessages;
import {defineMessages} from "react-intl";

const messages  = defineMessages({
    // auth
    signIn: {
        id: "signIn",
        defaultMessage: "Sign in"
    },
    signUp: {
        id: "signUp",
        defaultMessage: "Sign up"
    },
    emailAddress: {
        id: "emailAddress",
        defaultMessage: "Email address"
    },
    password: {
        id: "password",
        defaultMessage: "Password"
    },
    confirmPassword: {
        id: "confirmPassword",
        defaultMessage: "Confirm password"
    },
    forgotPassword: {
        id: "forgotPassword",
        defaultMessage: "Forgot your password ?"
    },

    // errors
    errorInvalidEmail: {
        id: "errorInvalidEmail",
        defaultMessage: "Invalid email address"
    },
    errorPasswordLength: {
        id: "errorPasswordLength",
        defaultMessage: "Password must be 6 characters minimum"
    },
    errorPasswordsMismatch: {
        id: "errorPasswordsMismatch",
        defaultMessage: "The two passwords mismatch"
    },
});

//module.exports = messages;
export default messages;