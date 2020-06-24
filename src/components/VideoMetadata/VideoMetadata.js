import React from 'react';
import './VideoMetadata.scss';
import { Button, Icon, Divider } from 'semantic-ui-react';
import Rating from '../Rating/Rating';

const VideoMetadata = (props) => {
  const viewCount = Number(props.viewcount).toLocaleString() || '';

  return (
    <div className="video-metadata">
      <h3>Stargazer - A Chillwave Mix</h3>
      <div className="video-stats">
        <span>
          {viewCount}
          {' '}
          views
        </span>
        <div className="video-actions">
          <Rating likes={75} dislikes={25} />
          <Button basic icon labelPosition="left">
            <Icon name="share" />
            Share
          </Button>
          <Button basic icon>
            <Icon name="plus circle" />
          </Button>
          <Button basic icon>
            <Icon name="ellipsis horizontal" />
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default VideoMetadata;
