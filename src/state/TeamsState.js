const ActionTypes = {
    LOAD_TEAMS: 'Teams/LOAD_TEAMS',
};

const loadTeams = () => {
    return {
        type: ActionTypes.LOAD_TEAMS,
    }
};

const TeamsReducer = (currentState = [], action) => {
    switch (action.type) {
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