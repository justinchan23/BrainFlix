import React from 'react'
import Comment from './Comment'
import dateCalculator from '../Scripts/dateCalculator'

const CommentsSection = props => {
  const { currentVideo, commentTextbox, itemText, addComment, deleteComment } = props
  var commentList = currentVideo.comments.map((comment, i) => {
    var dateSince = dateCalculator(comment.timestamp)
    return (
      <Comment
        name={comment.name}
        dateSince={dateSince}
        comment={comment.comment}
        id={comment.id}
        deleteComment={deleteComment}
        key={i}
      />
    )
  })
  return (
    <div className="commentContent">
      <div className="commentContent__main">
        <h3 className="commentContent__commentNum">{currentVideo.comments.length} Comments</h3>
        <div className="commentContent__section">
          <img src="../Assets/Images/Mohan-muruge.jpg" className="commentContent__pic" alt="" />
          <form id="commentSubmit" onSubmit={event => event.preventDefault()}>
            <label>JOIN THE CONVERSATION</label>
            <textarea
              className="commentContent__name commentContent__commentNew"
              type="text"
              id="name"
              name="name"
              placeholder="Type your comment here"
              onChange={commentTextbox}
              value={itemText}
            />
          </form>
          <button
            className="commentContent__button"
            id="commentContent__addButton"
            type="submit"
            onClick={addComment}
          >
            COMMENT
          </button>
        </div>
        <div id="commentJava">{commentList.reverse()}</div>
      </div>
    </div>
  )
}

export default CommentsSection
