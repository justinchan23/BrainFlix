import React from 'react'
import videoList from './VideoList.json'

class Aside extends React.Component {
  constructor() {
    super()
    this.state = {
      videos: videoList
    }
  }
  render() {
    const videoList = this.state.videos.map(video => {
      return (
        <div className="asideSection__div" key={video.id}>
          <img src={video.image} className="asideSection__previewPic" alt="" />
          <h3 className="asideSection__title">{video.title}</h3>
          <h5 className="asideSection__name">{video.channel}</h5>
        </div>
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
