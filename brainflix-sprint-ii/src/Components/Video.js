import React from 'react'
import { Link } from 'react-router-dom'

class Video extends React.Component {
  render() {
    const { videoImage, videoTitle, videoChannel, videoId } = this.props
    return (
      <div className="asideSection__div">
        <Link to={videoId}>
          <img src={videoImage} className="asideSection__previewPic" alt="" />
          <div className="asideSection__titleDiv">
            <h3 className="asideSection__title">{videoTitle}</h3>
          </div>
          <h5 className="asideSection__name">{videoChannel}</h5>
        </Link>
      </div>
    )
  }
}

export default Video
