import React from 'react';
import Button from './Button';
import Circle from './Circle';
import { HOST } from '../config/api';

// demonstrate react-hooks
const Devices = ({ updateLoginState }) => {
    const [devices, setDevices] = React.useState([]);
    const MINUTE_MS = 5000; // run every 5 sec

    const refeshDevices = () => {
        fetch(`${HOST}/devices`)
        .then(response => response.json())
        .then(data => setDevices(data.devices));
    };
    
    React.useEffect(() => {
        refeshDevices();
        const interval = setInterval(() => {
            refeshDevices();
        }, MINUTE_MS);
    
        return () => clearInterval(interval); 
        console.log(devices);
    }, []);
    
    const position = [
        10, 35, 60, 85, 110, 135, 160, 185, 210, 235, 260, 285, 310, 335
    ]; // circle position around orbit
    
    const renderDevices = () => {
        const devicesElement = [];
        let ctr = 0;
        let pos = 200;
        let shuffled = position
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value); // randomly assign position to the circle
        
        for(const device of devices) {
            if(ctr >= 14) {
                ctr = 0;
                pos = 380;
            } // special condition where circle in orbit is full
            const circleClass = `circle deg-${pos}-${shuffled[ctr]}`;
            ctr++;
            devicesElement.push(<Circle circleClass={circleClass} key={device.id} />);
        }
        return devicesElement;
    }
    const handleNotify = () => {
        const token = localStorage.getItem('token');
        fetch(`${HOST}/notify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization:': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: 'Rodolfo Borgonos Jr',
                email: 'rodolfoborgonos@gmail.com',
                repoUrl: 'https://github.com/junmich/frontend-developer-test',
                message: 'Thank you for this amazing challenge, really enjoyed it. :)'
            })
        })
        .then(response => {
            response.text().then(data => {
                if (!response.ok) {
                    alert (`error: ${data}`);
                } else {
                    alert (`${data}`);
                }
            });
        });
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        updateLoginState();
    }
    return (
        <div className="devices-container">
            <div className="circle-wrapper">
                <div className="device">
                    <p className="device--number">
                        {devices.length}
                    </p>
                    DEVICES ONLINE
                </div>
                {renderDevices()}
            </div>
            <div className="devices--footer">
                <Button name="Notify" mode="default" onClick={handleNotify} />
                <Button name="Log out" mode="primary" onClick={handleLogout}/>
            </div>
        </div>
    );
}

export default Devices;