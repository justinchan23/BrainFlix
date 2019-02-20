import React from 'react'

class MainVideo extends React.Component {
  constructor() {
    super()
    this.state = {
      videoPlay: false,
      playPauseButton: './Assets/Icons/SVG/Icon-play.svg',
      videoMute: false
    }
  }

  videoPlay = () => {
    if (this.state.videoPlay === false) {
      this.refs.video.play()
      this.setState({ videoPlay: true, playPauseButton: './Assets/Icons/SVG/Icon-pause.svg' })
    } else {
      this.refs.video.pause()
      this.setState({ videoPlay: false, playPauseButton: './Assets/Icons/SVG/Icon-play.svg' })
    }
  }

  videoMute = () => {
    if (this.state.videoMute === false) {
      this.setState({ videoMute: true })
      this.refs.video.muted = this.state.videoMute
    } else {
      this.setState({ videoMute: false })
      this.refs.video.muted = this.state.videoMute
    }
  }

  render() {
    const { poster, duration, src } = this.props
    return (
      <main className="main">
        <div className="main__videoImage">
          <video
            poster={poster}
            src={src}
            ref="video"
            className="main__videoImageFull"
            // onEnded={() => {
            //   this.refs.video.load()
            // }}
          />
        </div>
        <div className="main__videoControls">
          <button className="main__videoButton" onClick={this.videoPlay}>
            <img src={this.state.playPauseButton} alt="" />
          </button>
          <div className="main__videoSlider">
            <progress className="main__videoBar" value="0" min="0" max="100" />
            <h6 className="main__videoTime">0:00 / {duration}</h6>
          </div>
          <div className="main__buttonRight">
            <button
              className="main__videoButtonRight main__videoButtonPadding"
              onClick={() => {
                this.refs.video.requestFullscreen()
              }}
            >
              <img
                src="./Assets/Icons/SVG/Icon-fullscreen.svg"
                alt=""
                className="main__videoFullscreen"
              />
            </button>
            <button className="main__videoButtonRight" onClick={this.videoMute}>
              <img src="./Assets/Icons/SVG/Icon-volume.svg" alt="" className="main__videoVolume" />
            </button>
          </div>
        </div>
      </main>
    )
  }
}

export default MainVideo
