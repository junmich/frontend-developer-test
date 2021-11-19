import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

test('should render button correctly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
});

// test('should render Input box correctly with props', () => {
//     const wrapper = shallow(<InputBox placeholder="Email" />);
//     expect(wrapper).toMatchSnapshot();
// });


// test('should render Input box correctly with props and set name', () => {
//     const wrapper = shallow(<InputBox placeholder="Email" name="email" />);
//     expect(wrapper).toMatchSnapshot();
// });