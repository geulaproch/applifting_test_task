import {combineReducers} from 'redux';

const ActionTypes = {
    ASSIGN_SESSION: 'Player/ASSIGN_SESSION',
    ASSIGN_TEAM: 'Player/ASSIGN_TEAM',
    UPDATE_CLICKS: 'Player/UPDATE_CLICKS',
    INCREMENT: 'Player/INCREMENT',
};

const assignSession = (session) => {
    return {
        type: ActionTypes.ASSIGN_SESSION,
        session,
    }
};

const assignTeam = (team) => {
    return {
        type: ActionTypes.ASSIGN_TEAM,
        team,
    }
};

const updateClicks = (amountOfClicks) => {
    return {
        type: ActionTypes.UPDATE_CLICKS,
        amountOfClicks,
    }
};

const increment = (team) => {
    return {
        type: ActionTypes.INCREMENT,
        team,
    }
};

const SessionReducer = (currentState = null, action) => {
    switch (action.type) {
        case ActionTypes.ASSIGN_SESSION:
            return action.session;
        default:
            return currentState;
    }
};

const TeamReducer = (currentState = null, action) => {
    switch (action.type) {
        case ActionTypes.ASSIGN_TEAM:
            return action.team;
        default:
            return currentState;
    }
};

const ClicksReducer = (currentState = 0, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_CLICKS:
            return action.amountOfClicks;
        case ActionTypes.INCREMENT:
            return currentState + 1;
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
        increment,
    },
    ActionTypes,
};