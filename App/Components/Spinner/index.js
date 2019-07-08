import React from 'react'
import { Spinner } from 'native-base'
import { PropTypes } from 'prop-types'

class Component extends React.PureComponent {
  render() {
    return <Spinner color="green" />
  }
}

Component.propTypes = {
  color: PropTypes.string,
}

Component.defaultProps = {
  color: 'green',
}

export default Component
