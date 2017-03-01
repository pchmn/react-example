import * as ActionTypes from './ActionTypes';
import store from 'store';

const initialState = {
    user: store.get('user'),
    token: store.get('token')
};

export default function authResults(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SIGN_IN_REQUEST || ActionTypes.SIGN_UP_REQUEST:
            return {
                ...state,
                loading: true
            };

        case ActionTypes.SIGN_IN_SUCCESS || ActionTypes.SIGN_UP_SUCCESS:
            // save to local storage
            store.set('user', action.payload.user);
            store.set('token', action.payload.token);
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.token,
                errorApi: null
            };

        case ActionTypes.SIGN_IN_ERROR || ActionTypes.SIGN_UP_ERROR:
            // remove from local storage
            store.remove('user');
            store.remove('token');
            return {
                ...state,
                loading: false,
                user: null,
                token: null,
                errorApi: action.payload.error
            };

        case ActionTypes.SIGN_OUT:
            // remove from local storage
            store.remove('user');
            store.remove('token');
            return {
                ...state,
                loading: false,
                user: null,
                token: null,
                errorApi: null
            };

        default:
            return state;
    }
}