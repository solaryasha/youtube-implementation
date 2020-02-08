import React from 'react';
import { Menu } from 'semantic-ui-react';
import './SideBarHeader.scss';


const SideBarHeader = (props) => {
    const Header = props.title ? props.title.toUpperCase(): '';

    return (
        <Menu.Item>
            <Menu.Header className='sidebar-header'>{Header}</Menu.Header>
        </Menu.Item>
    );
}

export default SideBarHeader ;