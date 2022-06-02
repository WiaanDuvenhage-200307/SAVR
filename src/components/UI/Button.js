import React from 'react';

const Button = (props) => {
    return (
        <button className={props.className} onClick={props.function} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} role={props.role} name={props.btnName}>{props.name}</button>
    );
};

export default Button;