import React from 'react'
import dateCalculator from '../Scripts/dateCalculator'

class CommentsSection extends React.Component {
  constructor() {
    super()
    this.state = {
      comments: [
        {
          name: 'Nigel',
          comment: 'Never gonna give you up...',
          id: 'fa6a4285-258d-4dc0-8be6-9e03837683fe',
          timestamp: 1530744338878
        },
        {
          name: 'Ian',
          comment: 'You could make $5000 a day too!',
          id: 'a41f3802-8db7-45d4-95e4-142aeecd1aa4',
          timestamp: 1530744338878
        },
        {
          name: 'Michael',
          comment:
            'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
          id: 'a41f3802-8db7-45d4-95e4-142aeecd1aa4',
          timestamp: 1530744338878
        }
      ]
    }
  }

  render() {
    const commentList = this.state.comments.map(comment => {
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
