import React from 'react';
import './Comment.scss';
import Rating from '../../../components/Rating/Rating';
import { Button, Image } from 'semantic-ui-react';

const Comment = (props) => {
    return (
        <div className='comment'>
            <Image className='user-image' src='https://via.placeholder.com/48x48' circular />
            <div>
                <div className='user-name'>User Name</div>
                <span>Comment text</span>
                <div className='comment-actions'>
                    <Rating likes={2} /> <Button size='mini' compact>reply</Button>
                </div>
            </div>
        </div>
    );
}

export default Comment ;