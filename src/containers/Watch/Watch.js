import React, { Component } from 'react';
import './Watch.scss';
import Video from '../../components/Video/Video';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';
import { VideoInfoBox } from '../../components/VideoInfoBox/VideoInfoBox';
import { Comments } from '../Comments/Comments';
import { API_KEY, searchUrl } from '../../API/makeRequest';
import { convertData } from '../../utilities/convertData';

export class Watch extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    const yourId = this.props.match.params.id;
    const yourUrl = `${searchUrl}&id=${yourId}&key=${API_KEY}`;

    fetch(yourUrl)
      .then(response => response.json())
      .then((response) => {
        const preparedData = convertData(response);

        return this.setState({ data: preparedData });
      });
  }

  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id={this.props.match.params.id} />
        <VideoMetadata className="metadata" content={this.state.data} />
        <VideoInfoBox />
        <Comments />
        <RelatedVideos className="related-videos" />
      </div>
    );
  }
}

