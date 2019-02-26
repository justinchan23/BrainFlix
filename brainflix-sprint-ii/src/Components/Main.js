import React, { useState, useEffect } from 'react'
import MainContent from './MainContent'
import TopButton from './TopButton'
import MainVideo from './MainVideo'
import axios from 'axios'

const Main = props => {
  const apiURL = 'https://project-2-api.herokuapp.com/videos/'
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
      .get(apiURL + apiKEY)
      .then(response => {
        setVideosList(response.data)
        setDefaultVidID((firstVideoID = response.data[0].id))
        videoIDs = response.data.map(video => video.id)
      })
      .then(() => {
        getVideo()
      })
      .then(() => {
        setPageLoaded(true)
      })
  }

  const getVideo = () => {
    const { id } = props.match.params
    id && videoIDs.indexOf(id) !== -1 ? getVideoDetails(id) : getVideoDetails(firstVideoID)
  }

  const getVideoDetails = videoID => {
    axios.get(apiURL + videoID + apiKEY).then(response => {
      setCurrentVideo(response.data)
    })
  }

  const changeData = newVideoID => {
    newVideoID === undefined ? getVideoDetails(defaultVidID) : getVideoDetails(newVideoID)
  }

  const commentTextbox = event => {
    setItemText(event.target.value)
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
      axios.post(apiURL + currentVideo.id + '/comments' + apiKEY, data, header).then(() => {
        setItemText('')
        axios.get(apiURL + currentVideo.id + apiKEY).then(response => {
          setCurrentVideo(response.data)
        })
      })
    }
  }

  const deleteComment = id => {
    axios.delete(apiURL + currentVideo.id + '/comments/' + id + apiKEY).then(() => {
      axios.get(apiURL + currentVideo.id + apiKEY).then(response => {
        setCurrentVideo(response.data)
      })
    })
  }

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
          />
        )}
        <TopButton />
      </div>
    )
  }
}

export default Main
