import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'

import {PlayerState} from '../state/PlayerState';
import {TeamsState} from '../state/TeamsState';
import rootSaga from '../sagas/rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const Reducer = combineReducers({
    player: PlayerState.Reducer,
    teams: TeamsState.Reducer,
});

export const store = createStore(
    Reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);