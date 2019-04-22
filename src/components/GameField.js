import React from 'react';

import './GameField.css';
import TopClickersChart from './TopClickersChart';

const GameField = ({header, chartTitle}) => {
    return (
        <div className='GameField'>
            {React.createElement(header)}
            <div className='GameField-ChartTitle'>
                {chartTitle !== undefined ? React.createElement(chartTitle) : null}
            </div>
            <TopClickersChart/>
            <span className='GameField-Advice'>Want to be top? STFU and click!</span>
        </div>
    )
};

export default GameField;