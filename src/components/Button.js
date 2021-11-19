import React from 'react';

const Button = (props) => {
    let btnType = 'btn-default';
    switch(props.mode) {
        case 'primary':
            btnType = 'btn-primary';
            break;
        case 'info':
            btnType = 'btn-info';
            break;
       default:
            btnType = 'btn-default';
            break;

    }
    return <button
            className={`btn btn-lg ${btnType}`}
            onClick={props.onClick}
            type={props.type}
            disabled={props.disabled}
        >
            {props.name}
        </button>
}

Button.defaultProps = {
    name: "Button",
    mode: "default",
    type: "button",
    disabled: false,
    onClick: () => {}
}

export default Button;