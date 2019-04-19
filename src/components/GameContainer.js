import React from 'react';

import './GameContainer.css';
import Quote from './Quote';
import GameField from './GameField';

const GameContainer = () => {
    return (
        <div className='GameContainer'>
            <Quote
                text='It&#39;s is really simple, you just need to click as fast as you can.'
                author='anonymous'/>
            <GameField/>
        </div>
    )
};

export default GameContainer;