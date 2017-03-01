import { createStore, applyMiddleware } from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
// epics
import {createEpicMiddleware} from "redux-observable";
import epics from './epics';
// reducers
import reducers from './reducers';

const epicMiddleware = createEpicMiddleware(epics);
const middleWares = applyMiddleware(
    createEpicMiddleware(epics),
    routerMiddleware(browserHistory)
);

export default function configureStore() {

    return createStore(
        reducers,
        middleWares
    );
}
