import {PlayerState} from './PlayerState';

const ActionTypes = {
    LOAD_TEAMS: 'Teams/LOAD_TEAMS',
    UPDATE_TEAM_CLICKS: 'Teams/UPDATE_TEAM_CLICKS',
};

const loadTeams = (teams) => {
    return {
        type: ActionTypes.LOAD_TEAMS,
        teams,
    }
};

const updateTeamClicks = (team, amountOfClicks) => {
    return {
        type: ActionTypes.UPDATE_TEAM_CLICKS,
        team,
        amountOfClicks,
    }
};

const TeamsReducer = (currentState = [], action) => {
    switch (action.type) {
        case ActionTypes.LOAD_TEAMS:
            let teams = [...currentState];

            action.teams.forEach(incomingTeam => {
                if (teams.find(existingTeam => existingTeam.team === incomingTeam.team) !== undefined) {
                    teams[teams.findIndex(existingTeam => existingTeam.team === incomingTeam.team)] = incomingTeam;
                } else {
                    teams.push(incomingTeam);
                }
            });

            teams.sort((teamA, teamB) => {
                return teamB.clicks - teamA.clicks;
            });

            teams = teams.map((team, index) => Object.assign({}, team, {
                order: index + 1,
            }));

            return teams;


        case PlayerState.ActionTypes.ASSIGN_TEAM:
            if (currentState.find(team => team.team === action.team) === undefined) {
                return [...currentState, {
                    order: currentState.length,
                    team: action.team,
                    clicks: 0,
                }]
            } else {
                return currentState;
            }


        case ActionTypes.UPDATE_TEAM_CLICKS:
            let allTeams = [...currentState];

            const indexOfTeam = allTeams.findIndex(team => team.team === action.team);

            if (indexOfTeam !== -1) {
                allTeams[indexOfTeam] = Object.assign({}, allTeams[indexOfTeam], {
                    clicks: action.amountOfClicks,
                })
            }

            return allTeams;


        default:
            return currentState;
    }
};

export const TeamsState = {
    Reducer: TeamsReducer,
    ActionCreators: {
        loadTeams,
        updateTeamClicks,
    }
};