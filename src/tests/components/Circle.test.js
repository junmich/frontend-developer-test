import React from 'react';
import { shallow } from 'enzyme';
import Circle from '../../components/Circle';

test('should render circle correctly', () => {
    const wrapper = shallow(<Circle />);
    expect(wrapper).toMatchSnapshot();
});

test('should render circle and assign circle class correctly', () => {
    const wrapper = shallow(<Circle circleClass="testClass" />);
    expect(wrapper.find('.testClass').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
});