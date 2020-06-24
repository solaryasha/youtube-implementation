import React, { Component, Fragment } from 'react';
import './VideoInfoBox.scss';
import { Image, Button, Divider } from 'semantic-ui-react';

export class VideoInfoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  render() {
    let descriptionTextClass = 'collapsed';
    let buttonTitle = 'Show More';

    if (!this.state.collapsed) {
      descriptionTextClass = 'expanded';
      buttonTitle = 'Show Less';
    }

    return (
      <Fragment>
        <div className="video-infobox">
          <Image className="channel-image" src="https://via.placeholder.com/48x48" circular />
          <div className="video-info">
            <div className="channel-title">Some Channel Name</div>
            <div className="channel-date">Thu May 14 2015</div>
          </div>
          <Button className="subscibe" color="youtube">subscribe</Button>
          <div className="video-description">
            <div className={descriptionTextClass}>
              <p>First paragraph</p>
              <p>Second paragraph</p>
              <p>First paragraph</p>
              <p>First paragraph</p>
              <p>First paragraph</p>
            </div>
            <Button compact onClick={this.toggleShowMoreButton}>{buttonTitle}</Button>
          </div>
        </div>
        <Divider />
      </Fragment>
    );
  }

    toggleShowMoreButton = () => {
      this.setState(prevState => ({
        collapsed: !prevState.collapsed,
      }));
    }
}
