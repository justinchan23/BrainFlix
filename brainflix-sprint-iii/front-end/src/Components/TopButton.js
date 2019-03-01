import React from 'react'
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button'

const TopButton = () => (
  <div>
    <ScrollUpButton
      EasingType="linear"
      ShowAtPosition={50}
      AnimationDuration={100}
      ToggledStyle={{ right: '20px' }}
    />
  </div>
)

export default TopButton
