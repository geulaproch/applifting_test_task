import React from 'react';

import './GameField.css';
import TopClickers from './TopClickers';
import GameFieldHeader from './GameFieldHeader';

const GameField = () => {
    return (
        <div className='GameField'>
            <GameFieldHeader/>
            <TopClickers/>
            <span className='GameField-Advice'>Want to be top? STFU and click!</span>
        </div>
    )
};

export default GameField;