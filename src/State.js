import {combineReducers, createStore} from 'redux';

import {PlayerState} from './state/PlayerState';
import {TeamsState} from './state/TeamsState';

/*const State = {
    player: {
        session: 'xxxx',
        team: 'Applifting',
        clicks: 5,
    },
    teams: [{
        order: 1,
        team: 'Applifting',
        clicks: 17,
    }],
};*/

const Reducer = combineReducers({
    player: PlayerState.Reducer,
    teams: TeamsState.Reducer,
});

export const store = createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);