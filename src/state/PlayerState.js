import {combineReducers} from 'redux';

const ActionTypes = {
    ASSIGN_SESSION: 'Player/ASSIGN_SESSION',
    ASSIGN_TEAM: 'Player/ASSIGN_TEAM',
    UPDATE_CLICKS: 'Player/UPDATE_CLICKS',
};

const assignSession = () => {
    return {
        type: ActionTypes.ASSIGN_SESSION,
    }
};

const assignTeam = () => {
    return {
        type: ActionTypes.ASSIGN_TEAM,
    }
};

const updateClicks = () => {
    return {
        type: ActionTypes.UPDATE_CLICKS,
    }
};

const SessionReducer = (currentState = null, action) => {
    switch (action.type) {
        default:
            return currentState;
    }
};

const TeamReducer = (currentState = null, action) => {
    switch (action.type) {
        default:
            return currentState;
    }
};

const ClicksReducer = (currentState = null, action) => {
    switch (action.type) {
        default:
            return currentState;
    }
};

const PlayerReducer = combineReducers({
    session: SessionReducer,
    team: TeamReducer,
    clicks: ClicksReducer,
});

export const PlayerState = {
    Reducer: PlayerReducer,
    ActionCreators: {
        assignSession,
        assignTeam,
        updateClicks,
    }
};