import React, { Component } from 'react';
import VideoGrid from '../../../components/VideoGrid/VideoGrid';
import './HomeContent.scss';

export class HomeContent extends Component {
  
  render() {
    if (this.props.videolist === null) {
      return null;
    } 
    else {
      
        return (
          <div className='home-content'>
            <div className='responsive-video-grid-container'>
              <VideoGrid title='Trending' videolist={this.props.videolist} />
            </div>
          </div>    
        );
    }
  }
}