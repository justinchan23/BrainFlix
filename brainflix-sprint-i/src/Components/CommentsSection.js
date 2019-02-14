import React from 'react'
import dateCalculator from '../Scripts/dateCalculator'

class CommentsSection extends React.Component {
  render() {
    const commentList = this.props.currentVideo.comments.map(comment => {
      var dateSince = dateCalculator(comment.timestamp)
      return (
        <div className="commentJava__section" key={comment.id}>
          <img
            src={require('../Assets/Images/Mohan-muruge.jpg')}
            className="commentJava__pic"
            alt=""
          />
          <h4 className="commentJava__name">{comment.name}</h4>
          <h5 className="commentJava__date">{dateSince}</h5>
          <p className="commentJava__comment">{comment.comment}</p>
          <button className="commentContent__delete" id="commentContent__deleteButton">
            Delete
          </button>
        </div>
      )
    })

    return <div id="commentJava">{commentList}</div>
  }
}

export default CommentsSection
