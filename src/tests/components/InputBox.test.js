import React from 'react';
import { shallow } from 'enzyme';
import InputBox from '../../components/InputBox';

test('should render Input box correctly', () => {
    const wrapper = shallow(<InputBox />);
    expect(wrapper).toMatchSnapshot();
});