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
      axios
        .get(this.state.apiURL + this.state.defaultVideoID + this.state.apiKEY)
        .then(response => {
          //console.log(response)
          this.setState(Object.assign(this.state, { currentVideo: response.data }))
        })
        .catch(error => console.log(error))
    })
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
          this.setState(Object.assign(this.state, { currentVideo: response.data }))
        })
        .catch(error => console.log(error))
    }
    // go to top of page when clicking a video link
    // window.scrollTo(0, 0)
  }

  commentTextbox = event => {
    this.setState({ itemText: event.target.value })
    //console.log(this.state.itemText)
  }

  addComment = () => {
    //event.preventDefault()
    var data = {
      name: 'Justin',
      comment: this.state.itemText
    }

    var header = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    if (this.state.itemText.length < 2) {
      alert('Please enter a valid comment')
    } else {
      axios
        .post(
          this.state.apiURL + this.state.currentVideo.id + '/comments' + this.state.apiKEY,
          data,
          header
        )
        .then(() => {
          this.setState({ itemText: '' })
          axios
            .get(this.state.apiURL + this.state.currentVideo.id + this.state.apiKEY)
            .then(response => {
              this.setState(Object.assign(this.state, { currentVideo: response.data }))
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    }
  }

  deleteComment = id => {
    axios
      .delete(
        this.state.apiURL + this.state.currentVideo.id + '/comments/' + id + this.state.apiKEY
      )
      .then(() => {
        axios
          .get(this.state.apiURL + this.state.currentVideo.id + this.state.apiKEY)
          .then(response => {
            this.setState(Object.assign(this.state, { currentVideo: response.data }))
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.currentVideo && (
          <MainVideo
            poster={this.state.currentVideo.image}
            duration={this.state.currentVideo.duration}
            src={this.state.currentVideo.video + this.state.apiKEY}
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
