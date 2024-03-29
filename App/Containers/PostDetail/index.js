import React from 'react'
import { ScrollView } from 'react-native'
import { Container, View, Button, Icon, H1, Text } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import _ from 'lodash'
import PostActions from 'App/Stores/Post/Actions'
import UserActions from 'App/Stores/User/Actions'
import CommentActions from 'App/Stores/Comment/Actions'
import styles from './styles'
import Header from 'App/Components/Header'
import Spinner from 'App/Components/Spinner'

const USER_DATA = ['name', 'email', 'phone', 'website']

class Screen extends React.Component {
  constructor(props) {
    super(props)
    const {
      navigation: { getParam },
    } = this.props

    this.state = {
      post: getParam('post', null),
    }
  }

  componentDidMount() {
    const { fetchUser, fetchComments } = this.props
    const { post } = this.state
    if (post) {
      fetchUser(post.userId)
      fetchComments(post.id)
    }
  }

  onSwitchFavorite() {
    const { switchFavorite } = this.props
    const { post } = this.state

    this.setState({ post: { ...post, isFavorite: !post.isFavorite } }, () =>
      switchFavorite(post.id)
    )
  }

  render() {
    const { user, userIsLoading, comments, commentsIsLoading } = this.props
    const { post } = this.state

    return !post ? null : (
      <Container style={styles.container}>
        <Header
          showBackButton
          RightCustomComponent={() => (
            <Button transparent onPress={this.onSwitchFavorite.bind(this)}>
              <Icon
                style={{ ...styles.starIcon, ...(post.isFavorite ? styles.isFavorite : {}) }}
                name={post.isFavorite ? 'star' : 'star-outline'}
                type="Ionicons"
              />
            </Button>
          )}
        />

        {userIsLoading || commentsIsLoading ? (
          <Spinner />
        ) : (
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.content}>
              <H1 style={styles.textSeparation}>Description</H1>

              <Text style={styles.textSeparation}>{post.body.replace(/(\r\n|\n|\r)/gm, ' ')}</Text>

              <H1 style={styles.textSeparation}>User</H1>

              {USER_DATA.map((data, index) => (
                <Text key={`userdata${index}`} style={styles.textSeparation}>{`${_.capitalize(
                  data
                )}: ${user[data]}`}</Text>
              ))}
            </View>

            <View style={styles.commentsHeader}>
              <Text>COMMENTS</Text>
            </View>

            {comments.map((comment, index) => (
              <View key={`comment${index}`} style={styles.commentCard}>
                <Text>{comment.body.replace(/(\r\n|\n|\r)/gm, ' ')}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </Container>
    )
  }
}

Screen.propTypes = {
  navigation: PropTypes.object.isRequired,
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  comments: PropTypes.array,
  commentsIsLoading: PropTypes.bool,
  switchFavorite: PropTypes.func,
  fetchUser: PropTypes.func,
  fetchComments: PropTypes.func,
}

const mapStateToProps = ({ user, comment }) => ({
  ...user,
  ...comment,
})

const mapDispatchToProps = (dispatch) => ({
  switchFavorite: (id) => dispatch(PostActions.switchFavorite(id)),
  fetchUser: (id) => dispatch(UserActions.fetchUser(id)),
  fetchComments: (postId) => dispatch(CommentActions.fetchComments(postId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen)
