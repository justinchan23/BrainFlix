import React from 'react'
import dateCalculator from '../Scripts/dateCalculator'

class CommentsSection extends React.Component {
  render() {
    var commentList = this.props.currentVideo.comments.map(comment => {
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

    return (
      <div className="commentContent">
        <div className="commentContent__main">
          <h3 className="commentContent__commentNum">
            {this.props.currentVideo.comments.length} Comments
          </h3>
          <div className="commentContent__section">
            <img
              src={require('../Assets/Images/Mohan-muruge.jpg')}
              className="commentContent__pic"
              alt=""
            />
            <form id="commentSubmit">
              <label>JOIN THE CONVERSATION</label>
              <input
                className="commentContent__name commentContent__commentNew"
                type="text"
                id="name"
                name="name"
                placeholder="Type your comment here"
                onChange={this.props.commentTextbox}
                value={this.props.itemText}
              />
            </form>
            <button
              className="commentContent__button"
              id="commentContent__addButton"
              type="submit"
              onClick={this.props.addComment}
            >
              COMMENT
            </button>
          </div>
          <div id="commentJava">{commentList.reverse()}</div>
        </div>
      </div>
    )
  }
}

export default CommentsSection
