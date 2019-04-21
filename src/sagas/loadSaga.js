import {put} from 'redux-saga/effects';

import {TeamsState} from '../state/TeamsState';

export function* loadTeamsSaga() {
    let response = yield fetch('https://klikuj.herokuapp.com/api/v1/leaderboard');
    let jsonData = yield response.json();
    yield put(TeamsState.ActionCreators.loadTeams(jsonData));
}