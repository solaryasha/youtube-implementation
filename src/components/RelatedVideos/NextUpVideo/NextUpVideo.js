import React, { Fragment } from 'react';
import './NextUpVideo.scss';
import { Checkbox, Divider } from 'semantic-ui-react';
import { VideoPreview } from '../../VideoPreview/VideoPreview';

const NextUpVideo = props => (
  <Fragment>
    <div className="nextup-container">
      <h4>Up next</h4>
      <div className="nextup-toggle">
        <span>Autoplay</span>
        <Checkbox toggle />
      </div>
    </div>
    <VideoPreview horizontal />
    <Divider />
  </Fragment>

);

export default NextUpVideo;
