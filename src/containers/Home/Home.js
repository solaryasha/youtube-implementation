import React, { Component, Fragment } from 'react';

import './Home.scss';
import SideBar from '../SideBar/SideBar'
import VideoGrid from '../../components/VideoGrid/VideoGrid';

class Home extends Component {
    render () {
        return (
            <Fragment>
                <SideBar />
                <div className='home'>
                    <div className='responsive-video-grid-container'>
                        <VideoGrid title='Trending'/>
                        <VideoGrid title='Autos & Vehicles' hideDivider/>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Home;