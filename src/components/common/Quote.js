import React from 'react';

import './Quote.css';

const Quote = ({text, author}) => {
    return (
        <div className='Quote'>
            <span>{text}</span>
            <span className='Quote-Author'>{author}</span>
        </div>
    )
};

export default Quote;