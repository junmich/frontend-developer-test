import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/Login';

test('should render Input box correctly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
});