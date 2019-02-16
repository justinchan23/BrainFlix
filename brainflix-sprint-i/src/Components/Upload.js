import React from 'react'

class Upload extends React.Component {
  render() {
    return (
      <div>
        <main className="main__upload">
          <div className="main__uploadDiv">
            <h1 className="main__uploadH1">Upload Video</h1>
            <hr />
            <h6>VIDEO THUMBNAIL</h6>
            <img
              src="./Assets/Images/Upload-video-preview.jpg"
              alt=""
              className="main__uploadPic"
            />
            <hr />
            <h5>CANCEL</h5>
            <button className="main__uploadButton">PUBLISH</button>
          </div>
        </main>
      </div>
    )
  }
}

export default Upload
