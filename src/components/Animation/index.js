// @flow strict

import React from 'react'
import * as PropTypes from 'prop-types'
import Lottie from 'react-lottie'

class Animation extends React.PureComponent {
  state = {
    animationData: null,
  }

  switchAnimation = (value) => {
    switch (value) {
      case 'planet': this.animationPlanet()
        break
      case 'tranparency': this.animationTranparency()
        break
      case 'radar': this.animationRadar()
        break
      case 'hourglass': this.animationHourglass()
        break
      case 'error': this.animationError()
        break
    }
  }

  animationPlanet = () => import('./animations/planet.json')
    .then((animationData) => { 
      this.setState({ animationData })
    })
  animationTranparency = () => import('./animations/tranparency.json')
    .then((animationData) => { 
      this.setState({ animationData })
    })
  animationRadar = () => import('./animations/radar.json')
    .then((animationData) => {
      this.setState({ animationData }) 
    })
  animationHourglass = () => import('./animations/hourglass.json')
    .then((animationData) => {
      this.setState({ animationData }) 
    })
  animationError = () => import('./animations/error.json')
    .then((animationData) => {
      this.setState({ animationData }) 
    })
  
  render() {
    const { className, isPlayed, animationName } = this.props
    this.switchAnimation(animationName)
    const defaultOptions = {
      loop: true,
      animationData: this.state.animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }    

    return (
      <div className={className}>
        <Lottie options={defaultOptions}
          isStopped={!isPlayed}
        />
      </div>
    )
  }

  static propTypes = {
    animationName: PropTypes.string,
    className: PropTypes.string,
    isPlayed: PropTypes.bool,
  }
  static defaultProps = {
    isPlayed: false,
  }
}


export default React.memo(Animation)