import React from 'react'
import { SwipeRow, Button, Icon, Text, View } from 'native-base'
import { PropTypes } from 'prop-types'
import styles from './styles'

class Component extends React.PureComponent {
  render() {
    const { wasRead, body, isFavorite } = this.props

    return (
      <SwipeRow
        style={styles.card}
        disableRightSwipe
        rightOpenValue={-75}
        right={
          <Button danger onPress={() => alert('Trash')}>
            <Icon active name="trash" />
          </Button>
        }
        body={
          <View style={styles.content}>
            {wasRead || <View style={styles.dot} />}
            <Text style={styles.text}>{body.replace(/(\r\n|\n|\r)/gm, ' ')}</Text>
            {isFavorite && <Icon style={styles.star} name="star" type="Ionicons" />}
          </View>
        }
      />
    )
  }
}

Component.propTypes = {
  wasRead: PropTypes.bool,
  body: PropTypes.string,
  isFavorite: PropTypes.bool,
}

Component.defaultProps = {
  wasRead: false,
  body: '',
  isFavorite: false,
}

export default Component
