import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as ActionTypes from './ActionTypes';
import {signInResultSuccess, signInResultError, signUpResultSuccess, signUpResultError} from "./authActions";
import { Observable } from 'rxjs/Observable';


const API_URL = "https://reqres.in/api/";

export function signIn(action$) {
    return action$.ofType(ActionTypes.SIGN_IN_REQUEST)
        .map(action => action.payload.user)
        .flatMap(user =>
            ajax.post(API_URL + "login", user)
                .map(data => data.response.token)
                .map(token => signInResultSuccess(user, token))
                .catch(err => Observable.of(
                    signInResultError(err)
                ))
        );
}

export function signUp(action$) {
    return action$.ofType(ActionTypes.SIGN_UP_REQUEST)
        .map(action => action.payload.user)
        .flatMap(user =>
            ajax.post(API_URL + "register", user)
                .map(data => data.response.token)
                .map(token => signUpResultSuccess(user, token))
                .catch(err => Observable.of(
                    signUpResultError(err)
                ))
        );
}