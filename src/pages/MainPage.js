import React from 'react';

import GameField from '../components/GameField';
import Quote from '../components/Quote';

const MainPage = () => {
    return (
        <div className='MainPage'>
            <Quote
                text='It&#39;s is really simple, you just need to click as fast as you can.'
                author='anonymous'/>
            <GameField/>
            <span className='MainPage-Note'>If you don't like this page, it's <a href='http://applifting.cz'>Applifting</a>'s fault!</span>
        </div>
    )
};

export default MainPage;