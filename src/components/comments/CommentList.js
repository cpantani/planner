import React from 'react'
import CommentSummary from './CommentSummary'


const CommentList = ({comments}) => {
  return (
    <div className="project-list section">
      { comments && comments.map(comment => {
        return(
            <CommentSummary comment={comment}  />
        )
      })}
    </div>
  )
}

export default CommentList 
