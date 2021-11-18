import React from 'react';
import InputBox from './InputBox';

import { BsPatchExclamationFill } from 'react-icons/bs'
import { Exception } from 'handlebars/runtime';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: undefined
    };

    handleInputChange = (e) => this.setState(() => ({ [e.target.name]: e.target.value }))
    // use arrow function to avoid method binding
    handleLogin = (e) => {
        e.preventDefault();
        console.log('test submit');
        const host = 'http://35.201.2.209:8000';
        const { email, password } = this.state;
        console.log(this.state);
        // try {
            fetch(`${host}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            .then(response => {
                console.log(response);
                if (!response.ok) {
                   throw new Exception("Invalid email and password combination");
                } else {
                    return response.text();
                }
                
            }
            )
            .then(data => {
                console.log(data);
                localStorage.setItem('token', data);
                this.props.updateLoginState();
            })
            .catch(error => {
                console.log(error);
                this.setState(() => ({error: error.message }))
            });
        }

    render () {
        console.log(this.state.error);
        return (
            <div className="body">
                <div className="text-center">
                    <form className="form-signin" onSubmit={this.handleLogin}>
                        {this.state.error && <p>{this.state.error}</p>}
                        <h1 className="login--title">Login</h1>
                        <InputBox onChange={this.handleInputChange} value={this.state.email} name="email" type="text" placeholder="Email Address" />
                        <InputBox onChange={this.handleInputChange} value={this.state.password} name="password" icon={<BsPatchExclamationFill size={30} />} type="password" placeholder="Password" />
                        <button className="btn btn-lg btn-primary" type="submit">Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;