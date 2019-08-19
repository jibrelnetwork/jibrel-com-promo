import React, { useState } from 'react'
import * as PropTypes from 'prop-types'
import { noop } from 'lodash-es'
import Lottie from 'react-lottie'

const Animation = ({
  loadAnimation,
  className,
  isHovered,
  isLooped,
  loopCount,
}) => {
  const [isPaused, setPaused] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [direction, setDirection] = useState(1)
  const [animationData, setAnimationData] = useState(null)

  if (isHovered && (isPaused || direction === -1)) {
    setDirection(1)
    setPaused(false)
    setSpeed(1)
  } else if (!isHovered && !isPaused && direction === 1) {
    setDirection(-1)
    setSpeed(4)
  }

  Promise.resolve()
    .then(loadAnimation)
    .then(setAnimationData)
    .catch((err) => {
      console.error(err)
      setAnimationData(null)
    })

  return (
    <div className={className}>
      <Lottie
        options={{
          loop: loopCount ? loopCount : isLooped,
          animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        speed={speed}
        direction={direction}
        isPaused={isPaused}
      />
    </div>
  )
}

Animation.propTypes = {
  loadAnimation: PropTypes.func,
  className: PropTypes.string,
  loopCount: PropTypes.number,
  isHovered: PropTypes.bool,
  isLooped: PropTypes.bool,
}

Animation.defaultProps = {
  loadAnimation: noop,
  isHovered: false,
  isLooped: false,
}

export default Animation
