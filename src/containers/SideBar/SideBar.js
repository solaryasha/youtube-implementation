import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export class Sidebar extends Component {

    render() {
        return(
            <Menu vertical fixed='left' className='side-bar'>
                <Menu.Item>
                    <Icon name='home' size='small' />
                </Menu.Item>

               
            </Menu>
        );
    }

}