import React from 'react';
import './VideoMetadata.scss';
import { Button, Icon, Divider } from 'semantic-ui-react';
import Rating from '../Rating/Rating';

const VideoMetadata = (props) => {
  if (props.content === null) {
    return null;
  }

  const viewCount = Number(props.content[0].viewCount).toLocaleString() || '';

  return (
    <div className="video-metadata">
      <h3>{props.content[0].title}</h3>
      <div className="video-stats">
        <span>
          {`${viewCount} views`}
        </span>
        <div className="video-actions">
          <Rating likes={props.content[0].likeCount} dislikes={props.content[0].dislikeCount} />
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
