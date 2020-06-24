import React, { Component, Fragment } from 'react';
import './Home.scss';
import SideBar from '../SideBar/SideBar';
import { HomeContent } from './HomeContent/HomeContent';
import { convertData } from '../../utilities/convertData';
import { url } from '../../API/makeRequest';

class Home extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then((response) => {
        const preparedData = convertData(response);

        return this.setState({ data: preparedData });
      });
  }

  render() {
    return (
      <Fragment>
        <SideBar />
        <HomeContent videolist={this.state.data} />
      </Fragment>
    );
  }
}
export default Home;
