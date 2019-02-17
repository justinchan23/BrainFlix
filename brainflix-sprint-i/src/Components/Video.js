import React from 'react'

class Video extends React.Component {
  render() {
    const { videoImage, videoTitle, videoChannel } = this.props
    return (
      <div className="asideSection__div">
        <img src={videoImage} className="asideSection__previewPic" alt="" />
        <div className="asideSection__titleDiv">
          <h3 className="asideSection__title">{videoTitle}</h3>
        </div>
        <h5 className="asideSection__name">{videoChannel}</h5>
      </div>
    )
  }
}

export default Video
