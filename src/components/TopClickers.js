import React from 'react';

import './TopClickers.css';
import TopClickersHeader from './TopClickersHeader';
import TopClickersChart from './TopClickersChart';

const TopClickers = () => {
    return (
        <div className='TopClickers'>
            <span className='TopClickers-Title'>
                <TopClickersHeader title='Top 10 Clickers'/>
            </span>
            <TopClickersChart/>
        </div>
    )
};

export default TopClickers;