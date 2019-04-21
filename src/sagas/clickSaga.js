import {put, takeEvery} from 'redux-saga/effects';

import {PlayerState} from '../state/PlayerState';
import {TeamsState} from '../state/TeamsState';

function* recordClicksSaga(action) {
    const response = yield fetch('https://klikuj.herokuapp.com/api/v1/klik', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            team: action.team,
            session: action.session,
        })
    });
    const jsonData = yield response.json();
    yield put(PlayerState.ActionCreators.updateClicks(jsonData.your_clicks));
    yield put(TeamsState.ActionCreators.updateTeamClicks(action.team, jsonData.team_clicks))
}

export function* watchClicksSaga() {
    yield takeEvery(PlayerState.ActionTypes.INCREMENT, recordClicksSaga)
}