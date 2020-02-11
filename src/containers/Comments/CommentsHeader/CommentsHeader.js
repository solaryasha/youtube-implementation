import React from 'react';
import './CommentsHeader.scss';
import { Button, Icon } from 'semantic-ui-react';


const CommentsHeader = (props) => {
    return (
        <div className='comments-header'>
            <h4>{props.commentsAmount} Comments</h4>
            <Button basic icon labelPosition='left'>
               <Icon name='align left'/>
               Sort By
            </Button>
        </div>
    );
}

export default CommentsHeader;