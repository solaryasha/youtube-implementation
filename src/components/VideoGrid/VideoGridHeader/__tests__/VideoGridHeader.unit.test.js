import React from 'react';
import {shallow} from 'enzyme';
import VideoGridHeader from '../VideoGridHeader';



describe('VideoGrid', () => {
    test('renders without props', () => {
        const wrapper = shallow (<VideoGridHeader/>);
        expect(wrapper).toMatchSnapshot();
    })
    test('renders with empty string header', () => {
        const wrapper = shallow (<VideoGridHeader title=''/>);
        expect(wrapper).toMatchSnapshot();
    })
    test('renders with title', () => {
        const wrapper = shallow (<VideoGridHeader title='Auto & Vehicles'/>);
        expect(wrapper).toMatchSnapshot();
    })
})