import React, { useRef } from 'react'
import axios from 'axios'

const Upload = () => {
  const apiURL = 'http://localhost:8080/upload'
  const title = useRef()
  const description = useRef()

  const upload = event => {
    event.preventDefault()
    var data = {
      title: title.current.value,
      description: description.current.value
    }

    var header = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    if (title.current.value.length < 2 || description.current.value.length < 2) {
      alert('Please enter a valid comment')
    } else {
      axios.post(apiURL, data, header).then(response => {
        title.current.value = ''
        description.current.value = ''
        alert('Upload successful')
      })
    }
  }

  return (
    <div>
      <main className="main__upload">
        <div className="main__uploadDiv">
          <h1 className="main__uploadH1">Upload Video</h1>
          <div className="main__uploadDivContainer">
            <div className="main__uploadThumb">
              <label>VIDEO THUMBNAIL</label>
              <img
                src="../Assets/Images/Upload-video-preview.jpg"
                alt=""
                className="main__uploadPic"
              />
            </div>
            <div className="main__uploadFormDiv">
              <form className="main__uploadForm" onSubmit={upload}>
                <label>TITLE YOUR VIDEO</label>
                <input
                  type="text"
                  ref={title}
                  placeholder="Add a title to your video"
                  className="main__uploadVidTitle"
                />
                <label>ADD A VIDEO DESCRIPTION</label>
                <textarea
                  type="text"
                  ref={description}
                  placeholder="Add a description to your video"
                  className="main__uploadVidDescription"
                />
              </form>
            </div>
          </div>
          <div className="main__uploadButtons">
            <button className="main__cancelButton">CANCEL</button>
            <button className="main__uploadButton" onClick={upload}>
              PUBLISH
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Upload
