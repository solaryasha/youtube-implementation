import React from 'react';
import {shallow} from 'enzyme';
import Subscription from '../Subscription';

test('subscriptions rendering', () => {
    const wrapper = shallow(
        <Subscription />
    );
    expect(wrapper).toMatchSnapshot();
})