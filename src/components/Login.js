import React from 'react';
import InputBox from './InputBox';

import { BsPatchExclamationFill } from 'react-icons/bs';
import Button from './Button';
import { HOST } from '../config/api';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: undefined,
        loading: false,
    };

    handleInputChange = (e) => this.setState(() => ({ [e.target.name]: e.target.value }));
    // use arrow function to avoid method binding
    handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        console.log(this.state);
        this.setState(() => ({ loading: true }));
        // try {
            fetch(`${HOST}/login`, {
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
                response.text().then(data => {
                    if (!response.ok) {
                        this.setState(() => ({error: data}));
                    } else {
                        localStorage.setItem('token', data);
                        this.props.updateLoginState();
                    }
                    this.setState(() => ({error: data, loading: false}));
                });
            });
        }

    render () {
        return (
            <div className="body">
                <div className="text-center">
                    <form className="form-signin" onSubmit={this.handleLogin}>
                        {this.state.error && <p className="login--error">{this.state.error}</p>}
                        <h1 className="login--title">Login</h1>
                        <InputBox
                            onChange={this.handleInputChange}
                            value={this.state.email} name="email" 
                            type="text" 
                            placeholder="Email Address"
                        />
                        <InputBox
                            onChange={this.handleInputChange}
                            value={this.state.password} 
                            name="password"
                            icon={<BsPatchExclamationFill size={25} />} 
                            type="password" 
                            placeholder="Password"
                        />
                        <Button 
                            type="submit"
                            disabled={this.state.email === '' || this.state.password === ''}
                            name={this.state.loading ? 'Loading...' : 'Log In'} 
                            mode="info"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;