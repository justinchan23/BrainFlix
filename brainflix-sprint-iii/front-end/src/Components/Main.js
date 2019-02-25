import React, { useState, useEffect } from 'react'
import MainContent from './MainContent'
import TopButton from './TopButton'
import MainVideo from './MainVideo'
import axios from 'axios'

const Main = props => {
  const apiURL = 'http://localhost:8080/videos/'
  const apiKEY = '?api_key=25cadaa5-9cad-4892-a867-f96564af9f05'
  const [currentVideo, setCurrentVideo] = useState(null)
  const [itemText, setItemText] = useState('')
  const [videosList, setVideosList] = useState([])
  const [defaultVidID, setDefaultVidID] = useState('')
  const [pageLoaded, setPageLoaded] = useState(false)
  var firstVideoID = ''
  var videoIDs = []

  const getData = () => {
    axios
      .get(apiURL)
      .then(response => {
        setVideosList(response.data)
        // firstVideoID = response.data[0].id
        setDefaultVidID((firstVideoID = response.data[0].id))
        videoIDs = response.data.map(video => video.id)
      })
      .then(() => {
        getVideo()
      })
      .then(() => {
        setPageLoaded(true)
      })
      .catch(error => console.log(error))
  }

  const getVideo = () => {
    props.match.params.id && videoIDs.indexOf(props.match.params.id) !== -1
      ? getVideoDetails(props.match.params.id)
      : getVideoDetails(firstVideoID)
  }

  const getVideoDetails = videoID => {
    axios
      .get(apiURL + videoID)
      .then(response => {
        setCurrentVideo(response.data)
      })
      .catch(error => console.log(error))
  }

  const changeData = newVideoID => {
    newVideoID === undefined ? getVideoDetails(defaultVidID) : getVideoDetails(newVideoID)
  }

  const commentTextbox = event => {
    setItemText(event.target.value)
    // console.log(itemText)
  }

  const addComment = () => {
    var data = {
      name: 'Justin',
      comment: itemText
    }

    var header = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    if (itemText.length < 2) {
      alert('Please enter a valid comment')
    } else {
      axios
        .post(apiURL + currentVideo.id + '/comments' + data, header)
        .then(() => {
          setItemText('')
          axios
            .get(apiURL + currentVideo.id)
            .then(response => {
              setCurrentVideo(response.data)
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    }
  }

  const deleteComment = id => {
    axios
      .delete(apiURL + currentVideo.id + '/comments/' + id)
      .then(() => {
        axios
          .get(apiURL + currentVideo.id)
          .then(response => {
            setCurrentVideo(response.data)
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
  }

  const likeVideo = id => {
    axios
      .put(apiURL + id + '/likes')
      .then(response => setCurrentVideo(response.data))
      .catch(error => {
        console.log(error)
      })
  }

  // componentdidmount/didupdate
  useEffect(() => {
    pageLoaded ? changeData(props.match.params.id) : getData()
  }, [props.match.params.id])

  if (pageLoaded === false) {
    return <h1>Loading ...</h1>
  } else {
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
            commentTextbox={commentTextbox}
            addComment={addComment}
            itemText={itemText}
            deleteComment={deleteComment}
            videoList={videosList}
            likeVideo={likeVideo}
          />
        )}
        <TopButton />
      </div>
    )
  }
}

export default Main
