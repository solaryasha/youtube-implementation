import React from 'react';
import { shallow } from 'enzyme';
import CommentsHeader from '../CommentsHeader';

describe('CommentsHeader', () => {
    test('renders without props', () => {
        const wrapper = shallow(<CommentsHeader />);

        expect(wrapper).toMatchSnapshot();
    })

    test('renders without props', () => {
        const wrapper = shallow(<CommentsHeader commentsAmount={505050}/>);

        expect(wrapper).toMatchSnapshot();
    })
})