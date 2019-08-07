import React, { useState } from 'react'
import * as PropTypes from 'prop-types'
import { noop } from 'lodash-es'
import Lottie from 'react-lottie'

const Animation = ({
  loadAnimation,
  className,
  isPlayed,
}) => {
  const [animationData, setAnimationData] = useState(null)

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
          loop: true,
          animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        isStopped={!isPlayed}
      />
    </div>
  )
}

Animation.propTypes = {
  loadAnimation: PropTypes.func,
  className: PropTypes.string,
  isPlayed: PropTypes.bool,
}

Animation.defaultProps = {
  loadAnimation: noop,
  isPlayed: false,
}

export default Animation
