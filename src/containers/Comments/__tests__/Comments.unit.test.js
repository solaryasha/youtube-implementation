import React from 'react';
import { shallow } from 'enzyme';
import { Comments } from '../Comments';


describe('Comments', () => {
    test('renders without props', () => {
        const wrapper = shallow(<Comments/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('renders with commentsAmount', () => {
        const wrapper = shallow(<Comments commentsAmount={505050}/>);

        expect(wrapper).toMatchSnapshot();
    })
})