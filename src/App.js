import React, { Component, Fragment } from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav'
import Sidebar from './containers/SideBar/SideBar'


class App extends Component {
  render() {
    return (
      <Fragment>
          <HeaderNav />
          <Sidebar />
      </Fragment>
    );
  }
}

export default App;
