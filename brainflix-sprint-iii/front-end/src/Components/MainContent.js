import React from 'react'
import Aside from './Aside'
import CommentsSection from './CommentsSection'

const MainContent = props => {
  const { title, channel, views, likes, description, timestamp } = props.currentVideo
  const { currentVideo, commentTextbox, addComment, itemText, deleteComment, videoList } = props
  const date = new Date(timestamp).toLocaleDateString()
  return (
    <content className="main__content">
      <div className="main__contentMain">
        <div className="main__contentMainDiv">
          <h1 className="main__descriptionHeader">{title}</h1>
          <div className="main__descriptionDiv">
            <div className="main__descriptionAuthorDate">
              <h4 className="main__descriptionName">BY {channel}</h4>
              <h5 className="main__descriptionDate">{date}</h5>
            </div>
            <div className="main__descriptionViewsLikes">
              <img
                src="./Assets/Icons/SVG/Icon-views.svg"
                className="main__descriptionIcon"
                alt=""
              />
              <h5 className="main__descriptionNum">{views}</h5>

              <img
                src="./Assets/Icons/SVG/Icon-likes.svg"
                className="main__descriptionIcon"
                alt=""
              />
              <h5 className="main__descriptionNum">{likes}</h5>
            </div>
          </div>
        </div>
        <hr />
        <div className="main__videoFullDescription">
          <p>{description}</p>
        </div>
        <CommentsSection
          currentVideo={currentVideo}
          commentTextbox={commentTextbox}
          addComment={addComment}
          itemText={itemText}
          deleteComment={deleteComment}
        />
      </div>
      <Aside videoList={videoList} currentVideo={currentVideo} />
    </content>
  )
}

export default MainContent
