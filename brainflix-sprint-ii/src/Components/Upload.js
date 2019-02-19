import React from 'react'

class Upload extends React.Component {
  render() {
    return (
      <div>
        <main className="main__upload">
          <div className="main__uploadDiv">
            <h1 className="main__uploadH1">Upload Video</h1>
            <div className="main__uploadDivContainer">
              <div className="main__uploadThumb">
                <label>VIDEO THUMBNAIL</label>
                <img
                  src="./Assets/Images/Upload-video-preview.jpg"
                  alt=""
                  className="main__uploadPic"
                />
              </div>
              <div className="main__uploadFormDiv">
                <form className="main__uploadForm">
                  <label>TITLE YOUR VIDEO</label>
                  <input
                    type="text"
                    placeholder="Add a title to your video"
                    className="main__uploadVidTitle"
                  />
                  <label>ADD A VIDEO DESCRIPTION</label>
                  <textarea
                    type="text"
                    placeholder="Add a description to your video"
                    className="main__uploadVidDescription"
                  />
                </form>
              </div>
            </div>
            <div className="main__uploadButtons">
              <button className="main__cancelButton">CANCEL</button>
              <button className="main__uploadButton">PUBLISH</button>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Upload
