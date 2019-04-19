import React from 'react';

import './TopClickers.css';
import TopClickersHeader from './TopClickersHeader';
import TopClickersChart from './TopClickersChart';

const TopClickers = () => {
    return (
        <div className='TopClickers'>
            <TopClickersHeader title='Top 10 Clickers'/>
            <TopClickersChart/>
        </div>
    )
};

export default TopClickers;