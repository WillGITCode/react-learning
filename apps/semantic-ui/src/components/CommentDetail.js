import React from 'react';

const CommentDetail = (props) => {
  return props.comment && (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.comment.img} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.comment.name}
        </a>
        <div className="metadata">
          <span className="date">{props.comment.date}</span>
        </div>
        <div className="text">{props.comment.text}</div>
      </div>
    </div>
  );
}

export default CommentDetail;