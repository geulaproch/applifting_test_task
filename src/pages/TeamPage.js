import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

import './TeamPage.css';
import ClicksAmount from '../components/ClicksAmount';
import TopClickersChart from '../components/TopClickersChart';
import {PlayerState} from '../state/PlayerState';

const Applifting = <a href='http://applifting.cz'>Applifting</a>;

class TeamPage extends React.Component {
    constructor(props) {
        super(props);

        const teamName = props.match.params.teamName;

        props.assignTeam(teamName);
    }

    render() {
        return (
            <div className='TeamPage'>
            <span className='TeamPage-Title'>
                Clicking for team&nbsp;
                <span className='TeamPage-TeamName'>{this.props.teamName}</span>
            </span>
                <div className='TeamPage-ShareLink'>
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

                <div className='TeamPage-GameField'>
                    <div className='TeamPage-GameField-Button'>
                        <Button
                            variant='fab'
                            color='primary'
                            size='large'
                            onClick={() => this.props.increment(this.props.teamName)}
                            style={{
                                width: '450px',
                                fontSize: '32px',
                                fontWeight: 600,
                            }}>
                            Click!
                        </Button>
                    </div>
                    <div className='TeamPage-GameField-AmountOfClicks'>
                        <ClicksAmount
                            title='Your clicks:'
                            amount={this.props.yourClicks}/>
                        <ClicksAmount
                            title='Team clicks:'
                            amount={this.props.teamClicks}/>
                    </div>

                    <TopClickersChart/>
                    <span className='italic-text'>Want to be top? STFU and click!</span>
                </div>
                <span className='italic-text'>If you don't like this page, it's&nbsp; {Applifting}'s fault!</span>
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
    }
};

const mapDispatchToProps = {
    assignTeam: PlayerState.ActionCreators.assignTeam,
    increment: PlayerState.ActionCreators.increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);

