import React from 'react';

import AppBar from '../components/AppBar';
import GameContainer from '../components/GameContainer';

const MainPage = () => {
    return (
        <div className='MainPage'>
            <AppBar title='stfuandclick.com'/>
            <GameContainer/>
        </div>
    )
};

export default MainPage;