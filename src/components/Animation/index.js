// @flow strict

import React from 'react'
import * as PropTypes from 'prop-types'
import Lottie from 'react-lottie'

class Animation extends React.PureComponent {
  static propTypes = {
    loadAnimation: PropTypes.func,
    className: PropTypes.string,
    isPlayed: PropTypes.bool,
  }
  static defaultProps = {
    isPlayed: false,
  }

  state = {
    animationData: null,
  }

  componentDidMount () {
    this.props.loadAnimation()
      .then(animationData => this.setState({ animationData }))
  }
  
  render() {
    const { className, isPlayed } = this.props
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
}


export default React.memo(Animation)