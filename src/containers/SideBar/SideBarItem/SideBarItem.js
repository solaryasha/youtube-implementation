import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import './SideBarItem.scss';

const SideBarItem = (props) => {
  const highlight = props.highlight ? 'highlight-item' : null;

  return (
    <Menu.Item className={['sidebar-item', highlight].join(' ')}>
      <div className="sidebar-item-alignment">
        <span><Icon name={props.name} size="large" /></span>
        <span>{props.label}</span>
      </div>
    </Menu.Item>
  );
};

export default SideBarItem;
