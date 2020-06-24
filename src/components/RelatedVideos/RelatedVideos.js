import React from 'react';
import './RelatedVideos.scss';
import { VideoPreview } from '../VideoPreview/VideoPreview';
import NextUpVideo from './NextUpVideo/NextUpVideo';

const RelatedVideos = props => (
  <div className="related-videos">
    <NextUpVideo />
    <VideoPreview horizontal />
    <VideoPreview horizontal />
    <VideoPreview horizontal />
  </div>
);

export default RelatedVideos;
