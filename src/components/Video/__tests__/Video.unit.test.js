import React from 'react';
import {shallow} from 'enzyme';
import Video from '../Video';

describe('Video ',()=>{
    test('renders video component correctly', () => {
        const wrapper = shallow(
            <Video id='vQzqTTaWefY' />
        );

        expect(wrapper).toMatchSnapshot();
    })
    test('renders video component correctly', () => {
        const wrapper = shallow(
            <Video id='vQzqTTaWefY' />
        );

        expect(wrapper).toMatchSnapshot();
    })
    
})