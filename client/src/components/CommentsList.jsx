import React from 'react';
import CommentsListEntry from './CommentsListEntry.jsx';

const CommentsList = (props) => (
  <div className="list">
    <h3>List of Comments:</h3>
      <CommentsListEntry key={obj.id} obj={obj} index={index}/>
  </div>
)

export default CommentsList;