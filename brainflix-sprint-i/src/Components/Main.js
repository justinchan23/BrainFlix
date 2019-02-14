import React from 'react'
import MainContent from './MainContent'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      currentVideo: {
        id: '1edc16bd-1bad-418b-bd40-c72ddd926672',
        title: 'BMX Rampage: 2018 Highlights',
        description:
          'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
        channel: 'Red Cow',
        views: '1,001,023',
        duration: '0:42',
        image: require('../Assets/Images/video-list-0.jpg'),
        video: 'https://project-2-api.herokuapp.com/stream',
        thumbsUp: 110.985,
        comments: [
          {
            name: 'Nigel',
            comment: 'Never gonna give you up...',
            id: 'fa6a4285-258d-4dc0-8be6-9e03837683fe',
            timestamp: 1530744338878
          },
          {
            name: 'Ian',
            comment: 'You could make $5000 a day too! I wish =P',
            id: 'a41f3802-8db7-45d4-95e4-142aeecd1aa4',
            timestamp: 1530744338878
          },
          {
            name: 'Michael',
            comment:
              'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
            id: 'a41f3802-8db7-45d4-95e4-142aeecd1aa4',
            timestamp: 1530744338878
          }
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <main class="main">
          <div class="main__videoImage">
            <video controls poster={this.state.currentVideo.image} class="main__videoImageFull" />
          </div>
        </main>
        <MainContent currentVideo={this.state.currentVideo} />
      </div>
    )
  }
}

export default Main
