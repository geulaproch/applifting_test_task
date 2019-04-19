import React from 'react';

import './AppBar.css';

const AppBar = ({title}) => {
    return (
        <div className='AppBar'>
            {title}
        </div>
    )
};

export default AppBar;