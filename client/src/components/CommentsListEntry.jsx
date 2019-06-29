import React from 'react';

const CommentsListEntry = (props) => (
  <div className="repo-entry">
    <div className="username">
        <h4>
           { props.obj.commenter_username }
        </h4>
    </div>
    <div className="repo-info">
        <p>Comment: {props.obj.content}</p>
    </div>
  </div>
)

export default CommentsListEntry;