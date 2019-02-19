import React from 'react'
import Comment from './Comment'
import dateCalculator from '../Scripts/dateCalculator'
// import Main from './Main'

class CommentsSection extends React.Component {
  render() {
    // if (this.props.currentVideo.comments > 0) {
    var commentList = this.props.currentVideo.comments.map((comment, i) => {
      var dateSince = dateCalculator(comment.timestamp)
      return (
        <Comment
          name={comment.name}
          dateSince={dateSince}
          comment={comment.comment}
          index={i}
          deleteComment={this.props.deleteComment}
          key={i}
        />
      )
    })
    // } else {
    //   return 'Loading'
    // }

    return (
      <div className="commentContent">
        <div className="commentContent__main">
          <h3 className="commentContent__commentNum">
            {this.props.currentVideo.comments.length} Comments
          </h3>
          <div className="commentContent__section">
            <img src="./Assets/Images/Mohan-muruge.jpg" className="commentContent__pic" alt="" />
            <form id="commentSubmit" onSubmit={event => event.preventDefault()}>
              <label>JOIN THE CONVERSATION</label>
              <textarea
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
