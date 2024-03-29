import React from 'react';
import HeaderNav from '../../containers/HeaderNav/HeaderNav';
import './AppLayout.scss';

const AppLayout = props => (
  <div className="app-layout">
    <HeaderNav />
    {props.children}
  </div>
);

export default AppLayout;
