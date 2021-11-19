import React from 'react';

const Circle = (props) => {
    return <div className={props.circleClass}>{props.name}</div>;
}

Circle.defaultProps = {
    name: '',
    circleClass: 'circle deg-200-10'
}

export default Circle;