import React from 'react'

class MainVideo extends React.Component {
  render() {
    return (
      <main className="main">
        <div className="main__videoImage">
          <video poster={this.props.poster} className="main__videoImageFull" />
        </div>
        <div className="main__videoControls">
          <button className="main__videoButton">
            <img src="./Assets/Icons/SVG/Icon-play.svg" alt="" />
          </button>
          <div className="main__videoSlider">
            <progress className="main__videoBar" value="0" min="0" max="100" />
            <h6 className="main__videoTime">0:00 / {this.props.duration}</h6>
          </div>
          <div className="main__buttonRight">
            <button className="main__videoButtonRight main__videoButtonPadding">
              <img
                src="./Assets/Icons/SVG/Icon-fullscreen.svg"
                alt=""
                className="main__videoFullscreen"
              />
            </button>
            <button className="main__videoButtonRight">
              <img src="./Assets/Icons/SVG/Icon-volume.svg" alt="" className="main__videoVolume" />
            </button>
          </div>
        </div>
      </main>
    )
  }
}

export default MainVideo
