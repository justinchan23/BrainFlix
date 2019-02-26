import React from 'react'

const Comment = props => {
  const { name, dateSince, comment, id, deleteComment } = props
  return (
    <div className="commentJava__section">
      <img src="../Assets/Images/Mohan-muruge.jpg" className="commentJava__pic" alt="" />
      <h4 className="commentJava__name">{name}</h4>
      <h5 className="commentJava__date">{dateSince}</h5>
      <p className="commentJava__comment">{comment}</p>
      <button
        className="commentContent__delete"
        id="commentContent__deleteButton"
        onClick={() => {
          deleteComment(id)
        }}
      >
        Delete
      </button>
    </div>
  )
}

export default Comment
