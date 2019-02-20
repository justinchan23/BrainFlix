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
    const { apiURL, apiKEY } = this.state
    const { params } = this.props.match
    axios.get(apiURL + apiKEY).then(response => {
      this.setState({ videoList: response.data })
      var videoIDs = this.state.videoList.map(video => video.id)
      if (params.id && videoIDs.indexOf(params.id) !== -1) {
        this.setState({ defaultVideoID: params.id })
      } else {
        this.setState({ defaultVideoID: response.data[0].id })
      }
      axios
        .get(apiURL + this.state.defaultVideoID + apiKEY)
        .then(response => {
          //console.log(response)
          this.setState(Object.assign(this.state, { currentVideo: response.data }))
        })
        .catch(error => console.log(error))
    })
  }

  componentDidUpdate(prevProps) {
    const { apiURL, apiKEY, defaultVideoID } = this.state
    const { params } = this.props.match
    var url = apiURL + params.id + apiKEY
    if (params.id !== prevProps.match.params.id) {
      if (params.id === undefined) {
        url = apiURL + defaultVideoID + apiKEY
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
    const { apiURL, apiKEY, currentVideo } = this.state
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
        .post(apiURL + currentVideo.id + '/comments' + apiKEY, data, header)
        .then(() => {
          this.setState({ itemText: '' })
          axios
            .get(apiURL + currentVideo.id + apiKEY)
            .then(response => {
              this.setState(Object.assign(this.state, { currentVideo: response.data }))
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    }
  }

  deleteComment = id => {
    const { apiURL, apiKEY, currentVideo } = this.state
    axios
      .delete(apiURL + currentVideo.id + '/comments/' + id + apiKEY)
      .then(() => {
        axios
          .get(apiURL + currentVideo.id + apiKEY)
          .then(response => {
            this.setState(Object.assign(this.state, { currentVideo: response.data }))
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }

  render() {
    const { currentVideo, apiKEY, itemText, videoList } = this.state
    return (
      <div>
        {currentVideo && (
          <MainVideo
            poster={currentVideo.image}
            duration={currentVideo.duration}
            src={currentVideo.video + apiKEY}
          />
        )}
        {currentVideo && (
          <MainContent
            currentVideo={currentVideo}
            commentTextbox={this.commentTextbox}
            addComment={this.addComment}
            itemText={itemText}
            deleteComment={this.deleteComment}
            videoList={videoList}
          />
        )}
        <TopButton />
      </div>
    )
  }
}

export default Main
