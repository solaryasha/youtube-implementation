import React from 'react';
import {shallow} from 'enzyme';
import SideBarItem from '../SideBarItem';

test('SideBar item rendering', () => {
    const wrapper = shallow(
        <SideBarItem />
    );

    expect(wrapper).toMatchSnapshot();
})