import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './GameFieldHeader.css';
import Quote from './Quote';

const GameFieldHeader = () => {
    return (
        <div className='GameFieldHeader'>
            <div>
                <Quote text='Enter your team name:'/>
                <TextField
                    id='outlined-name'
                    variant='outlined'
                    style={{
                        width: '200px',
                        margin: '0 40px 0 0',
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