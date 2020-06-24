import React, { Component } from 'react';
import './Comments.scss';
import CommentsHeader from './CommentsHeader/CommentsHeader';
import AddComment from './AddComment/AddComment';
import Comment from './Comment/Comment';

export class Comments extends Component {
  render() {
    return (
      <div>
        <CommentsHeader commentsAmount={this.props.commentsAmount} />
        <AddComment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}
