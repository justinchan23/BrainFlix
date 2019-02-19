import React from 'react'
import MainContent from './MainContent'
import TopButton from './TopButton'
import MainVideo from './MainVideo'
import axios from 'axios'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      apiURL: 'https://project-2-api.herokuapp.com/videos/',
      apiKEY: '?api_key=25cadaa5-9cad-4892-a867-f96564af9f04',
      currentVideo: null,
      videoList: [],
      defaultVideoID: undefined,
      itemText: ''
    }
  }

  componentDidMount() {
    axios.get(this.state.apiURL + this.state.apiKEY).then(response => {
      this.setState({ videoList: response.data })
      if (this.props.match.params.id) {
        this.setState({ defaultVideoID: this.props.match.params.id })
      } else {
        this.setState({ defaultVideoID: response.data[0].id })
      }
      // let defaultVidID = response.data[0].id
      axios
        .get(this.state.apiURL + this.state.defaultVideoID + this.state.apiKEY)
        .then(response => {
          //console.log(response)
          // this.setState({ currentVideo: response.data })
          this.setState(Object.assign(this.state, { currentVideo: response.data }))
        })
        .catch(error => console.log(error))
    })
    // console.log(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    var url = this.state.apiURL + this.props.match.params.id + this.state.apiKEY
    if (this.props.match.params.id !== prevProps.match.params.id) {
      if (this.props.match.params.id === undefined) {
        url = this.state.apiURL + this.state.defaultVideoID + this.state.apiKEY
      }
      axios
        .get(url)
        .then(response => {
          //console.log(response)
          // this.setState({ currentVideo: response.data })
          this.setState(Object.assign(this.state, { currentVideo: response.data }))
        })
        .catch(error => console.log(error))
    }
  }

  commentTextbox = event => {
    this.setState({ itemText: event.target.value })
    //console.log(this.state.itemText)
  }

  addComment = () => {
    //event.preventDefault()
    //console.log(this.state.itemText)
    // assign form data into var
    var data = {
      name: 'Justin',
      comment: this.state.itemText
    }

    // header for posting to the api
    var header = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    //post the comment to the api
    if (this.state.itemText.length < 2) {
      alert('Please enter a valid comment')
    } else {
      axios
        .post(
          this.state.apiURL + this.state.currentVideo.id + '/comment' + this.state.apiKEY,
          data,
          header
        )
        .then(response => console.log(response))
        .catch(error => console.log(error))
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
            videoList={this.state.videoList}
          />
        )}
        <TopButton />
      </div>
    )
  }
}

export default Main
