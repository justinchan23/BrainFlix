import React from 'react'

class Main extends React.Component {
  render() {
    return (
      <main class="main">
        <div class="main__videoImage">
          <video
            controls
            poster={require('../Assets/Images/video-list-0.jpg')}
            class="main__videoImageFull"
          />
        </div>
      </main>
    )
  }
}

export default Main
