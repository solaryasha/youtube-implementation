import React, { Fragment } from 'react';
import './VideoGrid.scss';
import { Divider } from 'semantic-ui-react';
import { VideoPreview } from '../VideoPreview/VideoPreview';
import VideoGridHeader from './VideoGridHeader/VideoGridHeader';



const VideoGrid = (props) => {
    const divider = props.hideDivider ? null: <Divider />;

    return (
        <Fragment>
            <VideoGridHeader title={props.title} />
            <div className='video-grid'>
            {
                props.videolist.map(video => <VideoPreview { ...video }/>)
            }
                
            </div>
            {divider}
        </Fragment>
    );
}

export default VideoGrid;