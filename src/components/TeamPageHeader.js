import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

import './TeamPageHeader.css';
import {PlayerState} from '../state/PlayerState';
import ClicksAmount from './common/ClicksAmount';

class TeamPageHeader extends React.Component {
    render() {
        return (
            <div className='TeamPageHeader'>
                <span className='TeamPageHeader-Title'>
                    Clicking for team&nbsp;
                    <span className='TeamPageHeader-TeamName'>{this.props.teamName}</span>
                </span>
                <div className='TeamPageHeader-ShareLink'>
                    <span>Too lazy to click? Let your pals click for you:</span>
                    <TextField
                        id='outlined-name'
                        variant='outlined'
                        value={window.location.href}
                        inputProps={{
                            readOnly: true,
                        }}
                        style={{
                            width: '200px',
                            margin: '6px 40px 0 6px',
                            backgroundColor: '#ffffff',
                        }}/>
                </div>
                <div className='TeamPageHeader-Button'>
                    <Button
                        variant='fab'
                        color='primary'
                        size='large'
                        onClick={() => this.props.increment()}
                        style={{
                            width: '450px',
                            fontSize: '32px',
                            fontWeight: 600,
                        }}>
                        Click!
                    </Button>
                </div>
                <div className='TeamPageHeader-AmountOfClicks'>
                    <ClicksAmount
                        title='Your clicks:'
                        amount={this.props.yourClicks}/>
                    <ClicksAmount
                        title='Team clicks:'
                        amount={this.props.teamClicks}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let clicksOfTeam;

    const currentTeam = state.teams.find(team => team.team === state.player.team);

    if (currentTeam === undefined) {
        clicksOfTeam = 0;
    } else {
        clicksOfTeam = currentTeam.clicks;
    }
    return {
        teamName: state.player.team,
        yourClicks: state.player.clicks,
        teamClicks: clicksOfTeam,
        session: state.player.session,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        assignTeam: (team) => dispatch(PlayerState.ActionCreators.assignTeam(team)),
        increment: () => dispatch(PlayerState.ActionCreators.increment(ownProps.teamName, ownProps.session)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamPageHeader);
