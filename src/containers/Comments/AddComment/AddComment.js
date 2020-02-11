import React from 'react';
import './AddComment.scss';
import { Image, Form, TextArea } from 'semantic-ui-react';

const AddComment = () => (
    <div className='add-comment'>
        <Image className='user-image' src='https://via.placeholder.com/48x48' circular />
        <Form>
            <Form.Field control={TextArea} autoHeight placeholder='Add a public comment'/>
        </Form>
    </div>
)

export default AddComment;