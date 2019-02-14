import React from 'react'
import Aside from './Aside'
import CommentsSection from './CommentsSection'

class MainContent extends React.Component {
  render() {
    return (
      <content className="main__content">
        <div className="main__contentMain">
          <div className="main__contentMainDiv">
            <h1 className="main__descriptionHeader">{this.props.currentVideo.title}</h1>
            <div className="main__descriptionDiv">
              <div className="main__descriptionAuthorDate">
                <h4 className="main__descriptionName">BY {this.props.currentVideo.channel}</h4>
                <h5 className="main__descriptionDate">12/18/2018</h5>
              </div>
              <div className="main__descriptionViewsLikes">
                <img
                  src={require('../Assets/Icons/SVG/Icon-views.svg')}
                  className="main__descriptionIcon"
                  alt=""
                />
                <h5 className="main__descriptionNum">{this.props.currentVideo.views}</h5>

                <img
                  src={require('../Assets/Icons/SVG/Icon-likes.svg')}
                  className="main__descriptionIcon"
                  alt=""
                />
                <h5 className="main__descriptionNum">{this.props.currentVideo.thumbsUp}</h5>
              </div>
            </div>
          </div>
          <hr />
          <div className="main__videoFullDescription">
            <p>{this.props.currentVideo.description}</p>
          </div>

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
                  />
                </form>
                <button
                  className="commentContent__button"
                  id="commentContent__addButton"
                  type="submit"
                >
                  COMMENT
                </button>
              </div>

              <CommentsSection currentVideo={this.props.currentVideo} />
            </div>
          </div>
        </div>

        <Aside />
      </content>
    )
  }
}

export default MainContent
