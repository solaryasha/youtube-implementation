import React from 'react';
import VideoGrid from '../../../components/VideoGrid/VideoGrid';
import './HomeContent.scss';

export const HomeContent = (props) => {
  if (props.videolist === null) {
    return null;
  }

  return (
    <div className="home-content">
      <div className="responsive-video-grid-container">
        <VideoGrid title="Trending" videolist={props.videolist} />
      </div>
    </div>
  );
};
