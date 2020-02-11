import React from 'react';
import {shallow} from 'enzyme';
import SideBarHeader from '../SideBarHeader';

test('Sidebar header rendering', () => {
    const wrapper = shallow(
        <SideBarHeader />
    )
    expect(wrapper).toMatchSnapshot();
})