import React from 'react'
import dateCalculator from '../Scripts/dateCalculator'

class CommentsSection extends React.Component {
  render() {
    const commentList = this.props.currentVideo.comments.map(comment => {
      var dateSince = dateCalculator(comment.timestamp)
      return (
        <div class="commentJava__section">
          <img src={require('../Assets/Images/Mohan-muruge.jpg')} class="commentJava__pic" alt="" />
          <h4 class="commentJava__name">{comment.name}</h4>
          <h5 class="commentJava__date">{dateSince}</h5>
          <p class="commentJava__comment">{comment.comment}</p>
          <button class="commentContent__delete" id="commentContent__deleteButton">
            Delete
          </button>
        </div>
      )
    })

    return <div id="commentJava">{commentList}</div>
  }
}

export default CommentsSection
