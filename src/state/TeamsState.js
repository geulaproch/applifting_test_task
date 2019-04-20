const ActionTypes = {
    LOAD_TEAMS: 'Teams/LOAD_TEAMS',
};

const loadTeams = (teams) => {
    return {
        type: ActionTypes.LOAD_TEAMS,
        teams,
    }
};

const TeamsReducer = (currentState = [], action) => {
    switch (action.type) {
        case ActionTypes.LOAD_TEAMS:
            return action.teams;
        default:
            return currentState;
    }
};

export const TeamsState = {
    Reducer: TeamsReducer,
    ActionCreators: {
        loadTeams,
    }
};