import React from 'react';
import { MdEmail } from 'react-icons/md'

const InputBox = (props) => {
    return (
        <div className="input-box">
            <p className="input-box__icon">{props.icon}</p>
            <input
                type={props.type}
                className="form-control input-box__textbox"
                placeholder={props.placeholder}
                onChange={props.onChange}
                required
                autoFocus
            />
        </div>
    )
}

InputBox.defaultProps = {
    type: "text",
    placeholder: 'Email Address',
    icon: <MdEmail size={30} />,
onChange: () => { /* do nothing */ }
}
export default InputBox;