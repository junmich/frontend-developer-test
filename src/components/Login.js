import React from 'react';
import InputBox from './InputBox';

import { BsPatchExclamationFill } from 'react-icons/bs'

class Login extends React.Component {
    render () {
        return (
            <div className="body">
                <div className="text-center">
                    <form className="form-signin">
                        <h1 className="login--title">Login</h1>
                        <InputBox type="text" placeholder="Email Address" />
                        <InputBox icon={<BsPatchExclamationFill size={30} />} type="password" placeholder="Password" />
                        <button className="btn btn-lg btn-primary" type="submit">Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;