import React from 'react';
import './Rating.scss';
import { Progress, Icon } from 'semantic-ui-react';


const Rating = (props) => {
    let progress = null;

    if (props.likes && props.dislikes){
        const percent = 100*(props.likes/ (props.likes+props.dislikes));
        progress = <Progress className='progress'percent ={percent} size='tiny'/>
    }
    return (
        <div className='rating'>
            <div className='thumb-up'>
                <Icon name='thumbs up'/>
                <span>{props.likes}</span>
            </div>
            <div className='thumb-down'>
                <Icon name='thumbs down'/>
                <span>{props.dislikes}</span>
            </div>
            {progress}
        </div>
        
    )
}


export default Rating;