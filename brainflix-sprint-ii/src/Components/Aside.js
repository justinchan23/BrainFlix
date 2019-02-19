import React from 'react'
import Video from './Video'
//import videoList from './Data/VideoList.json'
import axios from 'axios'

class Aside extends React.Component {
  constructor() {
    super()
    this.state = {
      videos: []
    }
  }
  render() {
    const videoList = this.state.videos.map((video, i) => {
      return (
        <Video
          videoImage={video.image}
          videoTitle={video.title}
          videoChannel={video.channel}
          videoId={video.id}
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

  componentDidMount() {
    axios
      .get(
        'https://project-2-api.herokuapp.com/videos?api_key=25cadaa5-9cad-4892-a867-f96564af9f04'
      )
      .then(data => {
        this.setState({
          videos: data.data
        })
      })
  }
}

export default Aside
