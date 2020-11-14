import React from 'react';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const CommentContainer = (props) => {
  console.log(props)
  return (
    <div className="ui container comments">
      {props.comments && props.comments.map((comment) => {
        return (
          <ApprovalCard>
            <CommentDetail comment={comment} />
          </ApprovalCard>
        );
      })}
    </div>
  );
}

export default CommentContainer;