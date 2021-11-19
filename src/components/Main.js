import React from 'react';
import Login from './Login';
import Devices from './Devices';

class Main extends React.Component {
    state = {
        isLoggedIn: false
    };

    componentDidMount() {
        this.updateLoginState();
    }

    updateLoginState = () => {
        const isLoggedIn = !!localStorage.getItem('token');
        this.setState(() => ({ isLoggedIn }));
    }
    render() {
        return this.state.isLoggedIn ? <Devices updateLoginState={this.updateLoginState} /> : <Login updateLoginState={this.updateLoginState} />
    }
}

export default Main;