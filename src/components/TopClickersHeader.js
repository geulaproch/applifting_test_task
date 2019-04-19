import React from 'react';

import './TopClickersHeader.css';

const TopClickersHeader = ({title}) => {
    return (
        <span className='TopClickersHeader'>
            <span>{title}</span>
        </span>

    )
};

export default TopClickersHeader;