import React from 'react';

import './ClicksAmount.css';

const ClicksAmount = ({title, amount}) => {
    return (
        <div className='ClicksAmount'>
            <div className='ClicksAmount-Title'>{title}</div>
            <div className='ClicksAmount-Number'>{amount}</div>
        </div>
    )
};

export default ClicksAmount;