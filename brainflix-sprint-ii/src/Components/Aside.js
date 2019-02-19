import React from 'react'
import Video from './Video'
// import axios from 'axios'

class Aside extends React.Component {
  render() {
    const videoList = this.props.videoList.map((video, i) => {
      return (
        <Video
          videoImage={video.image}
          videoTitle={video.title}
          videoChannel={video.channel}
          videoId={video.id}
          key={i}
          currentVideo={this.props.currentVideo}
        />
      )
    })

    return (
      <aside className="asideSection">
        <h5 className="asideSection__heading">NEXT VIDEO</h5>
        {videoList}
      </aside>
    )
  }
}

export default Aside
