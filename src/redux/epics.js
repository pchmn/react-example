import { combineEpics } from 'redux-observable';
// epics
import {signIn, signUp} from '../auth/authEpic';

export default combineEpics(
    signIn,
    signUp
);
