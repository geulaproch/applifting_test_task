import React from 'react';

import './GameField.css';
import GameFieldHeader from './GameFieldHeader';
import TopClickers from './TopClickers';

const GameField = () => {
    return (
        <div className='GameField'>
            <GameFieldHeader/>
            <TopClickers/>
        </div>
    )
};

export default GameField;