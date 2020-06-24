import React from 'react';
import { Image } from 'semantic-ui-react';
import './VideoPreview.scss';
import { Link } from 'react-router-dom';

export const VideoPreview = (props) => {
  const horizontal = props.horizontal ? 'horizontal' : null;

  return (
    <div className={['video-preview', horizontal].join(' ')}>
      <div className="image-container">
        <Link to={`/watch/${props.id}`}>
          <Image src={props.url} />
        </Link>
        <div className="time-label">
          <span>{props.fixedDuration}</span>
        </div>
      </div>
      <div className="video-info">
        <div className="semi-bold show-max-two-lines">{props.title}</div>
        <div className="video-preview-metadata-container">
          <div className="channel-title">{props.channelTitle}</div>
          <div>
            <span>
              {`${props.viewCount} views • ${props.publishedTime} days ago`}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
