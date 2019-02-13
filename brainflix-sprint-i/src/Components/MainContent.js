import React from 'react'
import Aside from './Aside'

class MainContent extends React.Component {
  render() {
    return (
      <content class="main__content">
        <div class="main__contentMain">
          <div class="main__contentMainDiv">
            <h1 class="main__descriptionHeader">BMX Rampage: 2018 Highlights</h1>
            <div class="main__descriptionDiv">
              <div class="main__descriptionAuthorDate">
                <h4 class="main__descriptionName">BY RED Cow</h4>
                <h5 class="main__descriptionDate">12/18/2018</h5>
              </div>
              <div class="main__descriptionViewsLikes">
                <img src="Assets/Icons/SVG/Icon-views.svg" class="main__descriptionIcon" alt="" />
                <h5 class="main__descriptionNum">1,001,023</h5>

                <img src="Assets/Icons/SVG/Icon-likes.svg" class="main__descriptionIcon" alt="" />
                <h5 class="main__descriptionNum">110,985</h5>
              </div>
            </div>
          </div>
          <hr />
          <div class="main__videoFullDescription">
            <p>
              On a gusty day in Southern utah, a group of 25 daring mountain bikers blew the doors
              off what is possible on two wheels, unleashing some of the bigest moments the sport
              has ever seen. While mother nature only allowed for one run before conditions made it
              impossible to ride, that was all that was needed for even vertern Kyle Strait, who won
              the event for the second time - eight years after his first Red Cow Rampge title.
            </p>
          </div>

          <div class="commentContent">
            <div class="commentContent__main">
              <h3 class="commentContent__commentNum">3 Comments</h3>
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

              <div id="commentJava">
                <div class="commentJava__section">
                  <img
                    src={require('../Assets/Images/Mohan-muruge.jpg')}
                    class="commentJava__pic"
                    alt=""
                  />
                  <h4 class="commentJava__name">Michael Lyons</h4>
                  <h5 class="commentJava__date">12/18/2018</h5>
                  <p class="commentJava__comment">
                    They BLEW the ROOF off at their last show, once everyone started figuring out
                    they were going. This is still simply the greatest opening of a concert I have
                    EVER witnessed.
                  </p>
                  <button class="commentContent__delete" id="commentContent__deleteButton">
                    Delete
                  </button>
                  <button class="commentContent__like">0 Likes</button>
                </div>
                <div class="commentJava__section">
                  <img
                    src={require('../Assets/Images/Mohan-muruge.jpg')}
                    class="commentJava__pic"
                    alt=""
                  />
                  <h4 class="commentJava__name">Michael Lyons</h4>
                  <h5 class="commentJava__date">12/18/2018</h5>
                  <p class="commentJava__comment">
                    They BLEW the ROOF off at their last show, once everyone started figuring out
                    they were going. This is still simply the greatest opening of a concert I have
                    EVER witnessed.
                  </p>
                  <button class="commentContent__delete" id="commentContent__deleteButton">
                    Delete
                  </button>
                  <button class="commentContent__like">0 Likes</button>
                </div>
                <div class="commentJava__section">
                  <img
                    src={require('../Assets/Images/Mohan-muruge.jpg')}
                    class="commentJava__pic"
                    alt=""
                  />
                  <h4 class="commentJava__name">Michael Lyons</h4>
                  <h5 class="commentJava__date">12/18/2018</h5>
                  <p class="commentJava__comment">
                    They BLEW the ROOF off at their last show, once everyone started figuring out
                    they were going. This is still simply the greatest opening of a concert I have
                    EVER witnessed.
                  </p>
                  <button class="commentContent__delete" id="commentContent__deleteButton">
                    Delete
                  </button>
                  <button class="commentContent__like">0 Likes</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Aside />
      </content>
    )
  }
}

export default MainContent
