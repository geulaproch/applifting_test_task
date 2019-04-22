import React from 'react';
import {connect} from 'react-redux';

import GameField from '../components/GameField';
import './TeamPage.css';
import TeamPageHeader from '../components/TeamPageHeader';
import {PlayerState} from '../state/PlayerState';
import Quote from '../components/common/Quote';

class TeamPage extends React.Component {
    constructor(props) {
        super(props);

        const teamName = props.match.params.teamName;

        props.assignTeam(teamName);
    }

    render() {
        return (
            <div className='TeamPage'>
                <Quote
                    text='It&#39;s is really simple, you just need to click as fast as you can.'
                    author='anonymous'/>
                <GameField header={TeamPageHeader} />
                <span className='TeamPage-Note'>If you don't like this page, it's <a
                    href='http://applifting.cz'>Applifting</a>'s fault!</span>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        assignTeam: (team) => dispatch(PlayerState.ActionCreators.assignTeam(team)),
    }
};

export default connect(null, mapDispatchToProps)(TeamPage);