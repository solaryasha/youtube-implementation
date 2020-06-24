import React, { Component } from 'react';
import './Watch.scss';
import Video from '../../components/Video/Video';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';
import { VideoInfoBox } from '../../components/VideoInfoBox/VideoInfoBox';
import { Comments } from '../Comments/Comments';

export class Watch extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="J6G7uaNHH54" />
        <VideoMetadata className="metadata" viewcount="9999" />
        <VideoInfoBox />
        <Comments />
        <RelatedVideos className="related-videos" />
      </div>
    );
  }
}
