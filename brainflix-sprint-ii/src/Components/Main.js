import React from 'react'
import MainContent from './MainContent'
import TopButton from './TopButton'
// import videoData from './Data/CurrentVideo.json'
import MainVideo from './MainVideo'
import axios from 'axios'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      currentVideo: null,
      videos: [],
      itemText: ''
    }
  }

  componentDidMount() {
    axios
      .get(
        'https://project-2-api.herokuapp.com/videos?api_key=25cadaa5-9cad-4892-a867-f96564af9f04'
      )
      .then(response => {
        this.setState({ videos: response.data })
        let defaultVidID = response.data[0].id
        axios
          .get(
            'https://project-2-api.herokuapp.com/videos/' +
              defaultVidID +
              '?api_key=25cadaa5-9cad-4892-a867-f96564af9f04'
          )
          .then(response => {
            //console.log(response)
            // this.setState({ currentVideo: response.data })
            this.setState(Object.assign(this.state, { currentVideo: response.data }))
          })
          .catch(error => console.log(error))
      })
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
    const commentArray = this.state.currentVideo.comments.slice(0)
    commentArray.splice(key, 1)
    //delete commentArray[key]
    this.setState(Object.assign(this.state.currentVideo, { comments: commentArray }))
  }

  render() {
    return (
      <div>
        {this.state.currentVideo && (
          <MainVideo
            poster={this.state.currentVideo.image}
            duration={this.state.currentVideo.duration}
          />
        )}
        {this.state.currentVideo && (
          <MainContent
            currentVideo={this.state.currentVideo}
            commentTextbox={this.commentTextbox}
            addComment={this.addComment}
            itemText={this.state.itemText}
            deleteComment={this.deleteComment}
          />
        )}
        <TopButton />
      </div>
    )
  }
}

export default Main
