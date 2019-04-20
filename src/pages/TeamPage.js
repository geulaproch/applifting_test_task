import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './TeamPage.css';
import ClicksAmount from '../components/ClicksAmount';
import TopClickersChart from '../components/TopClickersChart';

/*todo team name for now is fixed, to generate sharing link*/

const Applifting = <a href='http://applifting.cz'>Applifting</a>;

const TeamPage = () => {
    return (
        <div className='TeamPage'>
            <span className='TeamPage-Title'>
                Clicking for team&nbsp;
                <span className='TeamPage-TeamName'>Prokop</span>
            </span>
            <div className='TeamPage-ShareLink'>
                <span>Too lazy to click? Let your pals click for you:</span>
                <TextField
                    id='outlined-name'
                    variant='outlined'
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
                        amount='1024'/>
                    <ClicksAmount
                        title='Team clicks:'
                        amount='65535'/>
                </div>

                <TopClickersChart/>
                <span className='italic-text'>Want to be top? STFU and click!</span>
            </div>
            <span className='italic-text'>If you don't like this page, it's&nbsp; {Applifting}'s fault!</span>
        </div>
    )
};

export default TeamPage;

/*todo to check proper widths/height, to create more reusable components*/
/*todo clicksamount - fixed data for now*/
/*todo to make that PROKOP is BLUE*/
/*todo implement router*/