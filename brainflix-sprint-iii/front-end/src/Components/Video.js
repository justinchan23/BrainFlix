import React from 'react'
import { Link } from 'react-router-dom'

const Video = ({ videoImage, videoTitle, videoChannel, videoId, currentVideo }) => {
  var divId = ''
  if (videoId === currentVideo.id) {
    divId = 'currentVideo'
  }
  return (
    <div className="asideSection__div" id={divId}>
      <Link to={`/videos/${videoId}`}>
        <img src={videoImage} className="asideSection__previewPic" alt="" />
        <div className="asideSection__titleDiv">
          <h3 className="asideSection__title">{videoTitle}</h3>
        </div>
        <h5 className="asideSection__name">{videoChannel}</h5>
      </Link>
    </div>
  )
}

export default Video
