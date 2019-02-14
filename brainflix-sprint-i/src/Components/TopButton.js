import React from 'react'
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button'

class TopButton extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          EasingType="linear"
          ShowAtPosition={50}
          AnimationDuration={100}
          ToggledStyle={{ right: '20px' }}
        />
      </div>
    )
  }
}

export default TopButton
