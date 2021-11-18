import React from 'react';
import { shallow } from 'enzyme';
import InputBox from '../../components/InputBox';

test('should render Input box correctly', () => {
    const wrapper = shallow(<InputBox />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Input box correctly with props', () => {
    const wrapper = shallow(<InputBox placeholder="Email" />);
    expect(wrapper).toMatchSnapshot();
});


test('should render Input box correctly with props and set name', () => {
    const wrapper = shallow(<InputBox placeholder="Email" name="email" />);
    expect(wrapper).toMatchSnapshot();
});