import React from 'react';
import { shallow } from 'enzyme';
import AddComment from '../AddComment';


describe('AddComment', () => {
    test('renders without props', () => {
        const wrapper = shallow(<AddComment />);

        expect(wrapper).toMatchSnapshot();
    })

})