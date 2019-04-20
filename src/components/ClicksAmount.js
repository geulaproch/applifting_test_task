import React from 'react';

const Style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    margin: '0 32px',

    lineHeight: 1.5,
};

const Title = {
    fontStyle: 'italic',
};

const AmountOfClicks = {
    color: '#2196f3',
    fontSize: '48px',
    fontWeight: 600,
};

const ClicksAmount = ({title, amount}) => {
    return (
        <div style={Style}>
            <div style={Title}>{title}</div>
            <div style={AmountOfClicks}>{amount}</div>
        </div>
    )
};

export default ClicksAmount;

/*todo take colors from theme, flexibility, backend*/