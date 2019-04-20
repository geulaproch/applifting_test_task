import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './GameFieldHeader.css';

const GameFieldHeader = () => {
    return (
        <div className='GameFieldHeader'>
            <div>
                <span className='GameFieldHeader-TeamName'>Enter your team name:</span>
                <TextField
                    id='outlined-name'
                    variant='outlined'
                    label='Your mom'
                    style={{
                        width: '200px',
                        margin: '6px 40px 0 0',
                    }}/>
            </div>
            <span className='GameField-Button'>
                    <Button
                        variant='fab'
                        color='primary'
                        size='large'
                        style={{
                            width: '200px',
                            fontSize: '32px',
                            fontWeight: 600,
                        }}>
                        Click!
                    </Button>
                </span>
        </div>
    )
};

export default GameFieldHeader;

/*todo css in one style*/