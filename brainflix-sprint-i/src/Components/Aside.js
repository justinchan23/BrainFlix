import React from 'react'
import Video from './Video'
import videoList from './Data/VideoList.json'

class Aside extends React.Component {
  constructor() {
    super()
    this.state = {
      videos: videoList
    }
  }
  render() {
    const videoList = this.state.videos.map((video, i) => {
      return (
        <Video
          videoImage={video.image}
          videoTitle={video.title}
          videoChannel={video.channel}
          key={i}
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
