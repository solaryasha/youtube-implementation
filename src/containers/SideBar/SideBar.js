import React, { Component } from 'react';
import { Menu, Divider } from 'semantic-ui-react';
import SidebarItem from './SideBarItem/SideBarItem';
import SideBarHeader from './SideBarHeader/SideBarHeader'
import './SideBar.scss';
import Subscriptions from './Subscriptions/Subscriptions';
import { SideBarFooter } from './SideBarFooter/SideBarFooter';

class Sidebar extends Component {

    render() {
        return(
            <Menu borderless vertical stackable fixed='left' className='side-nav'>
                <SidebarItem name='home' label='Home' highlight/>
                <SidebarItem name='fire' label='Trending' />
                <SidebarItem name='spy' label='Followers' />
                <Divider />
                <SideBarHeader title='library' />
                <SidebarItem name='clock outline' label='History' />
                <SidebarItem name='clock' label='Watch later' />
                <SidebarItem name='thumbs up' label='Liked videos' />
                <Divider />
                <Subscriptions />
                <SideBarHeader title='more from youtube' />
                <SidebarItem name='film' label='Movies and Shows' />
                <Divider />
                <SidebarItem name='setting' label='Settings' />
                <SidebarItem name='flag' label='Report history' />
                <SidebarItem name='help circle' label='Help' />
                <SidebarItem name='comment' label='Send feedback' />
                <Divider />
                <SideBarFooter />
            </Menu>
        );
    }

}

export default Sidebar;