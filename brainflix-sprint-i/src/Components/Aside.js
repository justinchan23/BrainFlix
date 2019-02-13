import React from 'react'

class Aside extends React.Component {
  constructor() {
    super()
    this.state = {
      videos: [
        {
          id: '1edc16bd-1bad-418b-bd40-c72ddd926672',
          title: 'Become A Travel Pro In One Easy Lesson',
          channel: 'Todd Welch',
          image: require('../Assets/Images/video-list-1.jpg')
        },
        {
          id: 'e5bc244e-be4c-4925-acce-3e3aa7069706',
          title: 'Les Houches The Hidden Gem Of The Chamonix',
          channel: 'Cornelia Blair',
          image: require('../Assets/Images/video-list-2.jpg')
        },
        {
          id: 'f0df529f-2b1d-46c1-b4d3-ca4ac8bd36df',
          title: 'Travel Health Useful Medical Information For',
          channel: 'Glen Harper',
          image: require('../Assets/Images/video-list-3.jpg')
        },
        {
          id: 'd7321c6e-33a9-4585-bd81-1670fa9fa695',
          title: 'Cheap Airline Tickets Great Ways To Save',
          channel: 'Emily Harper',
          image: require('../Assets/Images/video-list-4.jpg')
        },
        {
          id: 'fa72276e-b9f4-4556-a45d-c11605a91e14',
          title: 'Take A Romantic Break In A Boutique Hotel',
          channel: 'Ethan Owen',
          image: require('../Assets/Images/video-list-5.jpg')
        },
        {
          id: 'e4429e47-1d87-4802-8c07-5128ee7e2b11',
          title: 'Choose The Perfect Accommodations',
          channel: 'Lydia Perez',
          image: require('../Assets/Images/video-list-6.jpg')
        },
        {
          id: 'fc3e2c31-1da0-4d31-81b3-68a31c21cf64',
          title: 'Cruising Destination Ideas',
          channel: 'Timothy Austin',
          image: require('../Assets/Images/video-list-7.jpg')
        },
        {
          id: '70eec852-c6a9-4793-b12d-ffc59acffd61',
          title: 'Train Travel On Track For Safety',
          channel: 'Scotty Cranmer',
          image: require('../Assets/Images/video-list-8.jpg')
        }
      ]
    }
  }
  render() {
    const videoList = this.state.videos.map(video => {
      return (
        <div class="asideSection__div">
          <img src={video.image} class="asideSection__previewPic" alt="" />
          <h3 class="asideSection__title">{video.title}</h3>
          <h5 class="asideSection__name">{video.channel}</h5>
        </div>
      )
    })

    return (
      <aside class="asideSection">
        <h5 class="asideSection__heading">NEXT VIDEO</h5>
        {videoList}
      </aside>
    )
  }
}

export default Aside
