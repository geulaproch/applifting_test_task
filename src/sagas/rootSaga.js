import {all} from 'redux-saga/effects'

import {loadTeamsSaga} from './loadSaga';
import {watchClicksSaga} from './clickSaga';

export default function* rootSaga() {
    yield all([
        loadTeamsSaga(),
        watchClicksSaga()
    ])
}