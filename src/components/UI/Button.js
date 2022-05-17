import React from 'react';

const Button = (props) => {
    return (
        <button className={props.className}><p>{props.name}</p></button>
    );
};

export default Button;