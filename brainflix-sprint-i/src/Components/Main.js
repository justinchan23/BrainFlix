import React from 'react'
import MainContent from './MainContent'
import TopButton from './TopButton'

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
            name: 'Michael Lyons',
            comment:
              'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
            id: 'fa6a4285-258d-4dc0-8be6-9e03837683fe',
            timestamp: 1530744338878
          },
          {
            name: 'Gary Wong',
            comment:
              'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
            id: 'a41f3802-8db7-45d4-95e4-142aeecd1aa4',
            timestamp: 1530744338878
          },
          {
            name: 'Theodore Duncan',
            comment:
              'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
            id: 'a41f3802-8db7-45d4-95e4-142beecd1aa4',
            timestamp: 1530744338878
          }
        ]
      },
      itemText: ''
    }
  }

  commentTextbox = event => {
    this.setState({ itemText: event.target.value })
    //console.log(this.state.itemText)
  }

  addComment = () => {
    //event.preventDefault()
    //console.log(this.state.itemText)
    if (this.state.itemText.length < 2) {
      alert('Please enter a valid comment')
    } else {
      const newComment = this.state.currentVideo.comments.concat({
        name: 'Justin Chan',
        comment: this.state.itemText,
        id: this.state.currentVideo.comments.length,
        timestamp: Math.floor(new Date())
      })
      this.setState(
        Object.assign(this.state.currentVideo, {
          comments: newComment,
          itemText: ''
        })
      )
    }
  }

  deleteComment = key => {
    const commentArray = this.state.currentVideo.comments
    delete commentArray[key]
    this.setState(Object.assign(this.state.currentVideo, { comments: commentArray }))
  }

  render() {
    return (
      <div>
        <main className="main">
          <div className="main__videoImage">
            <video
              controls
              poster={this.state.currentVideo.image}
              className="main__videoImageFull"
            />
          </div>
        </main>
        <MainContent
          currentVideo={this.state.currentVideo}
          commentTextbox={this.commentTextbox}
          addComment={this.addComment}
          itemText={this.state.itemText}
          deleteComment={this.deleteComment}
        />
        <TopButton />
      </div>
    )
  }
}

export default Main
