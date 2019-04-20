import React from 'react';

import './GameContainer.css';
import Quote from './Quote';
import GameField from './GameField';

const Applifting = <a href='http://applifting.cz'>Applifting</a>;

const GameContainer = () => {
    return (
        <div className='GameContainer'>
            <Quote
                text='It&#39;s is really simple, you just need to click as fast as you can.'
                author='anonymous'/>
            <GameField/>
            <span className='GameContainer-Note'>If you don't like this page, it's {Applifting}'s fault!</span>
        </div>
    )
};

export default GameContainer;