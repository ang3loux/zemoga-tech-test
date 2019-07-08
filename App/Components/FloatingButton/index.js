import React from 'react'
import { Button, Icon } from 'native-base'
import { PropTypes } from 'prop-types'
import _ from 'lodash'
import styles from './styles'

const POSITIONS = {
  topLeft: { top: 20, left: 20 },
  topRight: { top: 20, right: 20 },
  bottomLeft: { bottom: 20, left: 20 },
  bottomRight: { bottom: 20, right: 20 },
}

class Component extends React.PureComponent {
  render() {
    const { disabled, icon, position, debounceTime, handleFirstTap, onPress } = this.props

    return (
      <Button
        active
        disabled={disabled}
        style={{ ...styles.container, ...POSITIONS[position] }}
        onPress={_.debounce(onPress, debounceTime, handleFirstTap)}
      >
        <Icon name={icon} />
      </Button>
    )
  }
}

Component.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  position: PropTypes.string,
  handleFirstTap: PropTypes.bool,
  debounceTime: PropTypes.number,
  onPress: PropTypes.func,
}

Component.defaultProps = {
  disabled: true,
  icon: 'trash',
  position: 'topLeft',
  handleFirstTap: false,
  debounceTime: 500,
  onPress: () => {},
}

export default Component
