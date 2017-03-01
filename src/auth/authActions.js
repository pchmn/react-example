import * as ActionTypes from './ActionTypes';
import { browserHistory } from 'react-router';


export function signIn(user) {
    return {
        type: ActionTypes.SIGN_IN_REQUEST,
        payload: {
            user: user
        }
    };
}

export function signInResultSuccess(user, token) {
    return {
        type: ActionTypes.SIGN_IN_SUCCESS,
        payload: {
            user: user,
            token: token
        }
    };
}

export function signInResultError(err) {
    return {
        type: ActionTypes.SIGN_IN_ERROR,
        payload: {
            error: {
                status: err.xhr.status,
                message: err.xhr.response.error
            }
        }
    };
}

export function signUp(user) {
    return {
        type: ActionTypes.SIGN_UP_REQUEST,
        payload: {
            user: user
        }
    };
}

export function signUpResultSuccess(user, token) {
    return {
        type: ActionTypes.SIGN_UP_SUCCESS,
        payload: {
            user: user,
            token: token
        }
    };
}

export function signUpResultError(err) {
    return {
        type: ActionTypes.SIGN_UP_ERROR,
        payload: {
            error: err.error
        }
    };
}

export function signOut() {
    return {
        type: ActionTypes.SIGN_OUT
    }
}