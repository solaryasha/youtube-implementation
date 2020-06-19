import React, { Component, Fragment } from 'react';

import './Home.scss';
import SideBar from '../SideBar/SideBar'
import { HomeContent } from './HomeContent/HomeContent';

class Home extends Component {
    render () {
        return (
            <Fragment>
                <SideBar />
                <HomeContent />
            </Fragment>
        );
    }
}
export default Home;