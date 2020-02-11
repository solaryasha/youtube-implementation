import React from 'react';
import {shallow} from 'enzyme';
import VideoMetadata from '../VideoMetadata';

describe('VideoMetadata', () => {
    test('renders without props', () => {
        const wrapper = shallow(<VideoMetadata />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('renders with view props', () => {
        const wrapper = shallow(<VideoMetadata viewcount={50000} />);
        expect(wrapper).toMatchSnapshot();
    })

})