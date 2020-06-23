import React, { Component } from 'react';
import {Image} from 'semantic-ui-react'
import './VideoPreview.scss';


export class VideoPreview extends Component {
  render () {
    const horizontal = this.props.horizontal ? 'horizontal' : null;

    return (
    <div className={['video-preview', horizontal].join(' ')}>
        <div className='image-container'>
          <Image src={this.props.url}/>
          <div className='time-label'>
              <span>{this.props.fixedDuration}</span>
          </div>
        </div>
      <div className='video-info'>
        <div className='semi-bold show-max-two-lines'>{this.props.title}</div>
        <div className='video-preview-metadata-container'>
            <div className='channel-title'>{this.props.channelTitle}</div>
            <div>
              <span>{`${this.props.viewCount} views • ${this.props.publishedTime} days ago`}</span>
            </div>
        </div>
      </div>



    </div>
    );
  }
}