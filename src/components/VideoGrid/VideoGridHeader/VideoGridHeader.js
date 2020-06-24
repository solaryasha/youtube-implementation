import React from 'react';
import './VideoGridHeader.scss';

const VideoGridHeader = props => (
  <div className="video-grid-header">
    <span className="title">{props.title}</span>
  </div>
);

export default VideoGridHeader;
