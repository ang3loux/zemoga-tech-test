import React from 'react'
import { SwipeRow, Button, Icon, Text, View } from 'native-base'
import { PropTypes } from 'prop-types'
import styles from './styles'

class Component extends React.PureComponent {
  constructor(props) {
    super(props)
    this.cardRef = null
  }

  onDeletePost() {
    const { onDeletePost } = this.props
    this.cardRef._root.closeRow()
    setTimeout(() => onDeletePost(), 500)
  }

  render() {
    const { wasRead, body, isFavorite, onNavigateToPost } = this.props

    return (
      <SwipeRow
        ref={(ref) => (this.cardRef = ref)}
        style={styles.card}
        disableRightSwipe
        recalculateHiddenLayout
        closeOnRowPrcloseOnRowPressess
        rightOpenValue={-75}
        right={
          <Button danger onPress={this.onDeletePost.bind(this)}>
            <Icon active name="trash" />
          </Button>
        }
        body={
          <View style={styles.content}>
            {wasRead || <View style={styles.dot} />}
            <Text style={styles.text} onPress={onNavigateToPost}>
              {body.replace(/(\r\n|\n|\r)/gm, ' ')}
            </Text>
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
  onNavigateToPost: PropTypes.func,
  onDeletePost: PropTypes.func,
}

Component.defaultProps = {
  wasRead: false,
  body: '',
  isFavorite: false,
  onNavigateToPost: () => {},
  onDeletePost: () => {},
}

export default Component
