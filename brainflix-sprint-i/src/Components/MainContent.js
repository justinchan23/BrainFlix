import React from 'react'
import Aside from './Aside'
import CommentsSection from './CommentsSection'

class MainContent extends React.Component {
  render() {
    return (
      <content class="main__content">
        <div class="main__contentMain">
          <div class="main__contentMainDiv">
            <h1 class="main__descriptionHeader">{this.props.currentVid.title}</h1>
            <div class="main__descriptionDiv">
              <div class="main__descriptionAuthorDate">
                <h4 class="main__descriptionName">BY {this.props.currentVid.channel}</h4>
                <h5 class="main__descriptionDate">12/18/2018</h5>
              </div>
              <div class="main__descriptionViewsLikes">
                <img
                  src={require('../Assets/Icons/SVG/Icon-views.svg')}
                  class="main__descriptionIcon"
                  alt=""
                />
                <h5 class="main__descriptionNum">{this.props.currentVid.views}</h5>

                <img
                  src={require('../Assets/Icons/SVG/Icon-likes.svg')}
                  class="main__descriptionIcon"
                  alt=""
                />
                <h5 class="main__descriptionNum">{this.props.currentVid.thumbsUp}</h5>
              </div>
            </div>
          </div>
          <hr />
          <div class="main__videoFullDescription">
            <p>{this.props.currentVid.description}</p>
          </div>

          <div class="commentContent">
            <div class="commentContent__main">
              <h3 class="commentContent__commentNum">
                {this.props.currentVid.comments.length} Comments
              </h3>
              <div class="commentContent__section">
                <img
                  src={require('../Assets/Images/Mohan-muruge.jpg')}
                  class="commentContent__pic"
                  alt=""
                />
                <form id="commentSubmit">
                  <label for="name">JOIN THE CONVERSATION</label>
                  <input
                    class="commentContent__name commentContent__commentNew"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Type your comment here"
                  />
                </form>
                <button class="commentContent__button" id="commentContent__addButton" type="submit">
                  COMMENT
                </button>
              </div>

              <CommentsSection />
            </div>
          </div>
        </div>

        <Aside />
      </content>
    )
  }
}

export default MainContent
