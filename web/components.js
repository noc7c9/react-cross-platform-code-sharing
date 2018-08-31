import React from 'react';

const centeredStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
};

export const CenteredView = props => (
    <div style={centeredStyle}>
        {props.children}
    </div>
);

export const Label = ({ text }) => <span>{text}</span>;
