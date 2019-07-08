import React from 'react'
import { Alert } from 'react-native'
import { Container, View, Button, Icon } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import PostActions from 'App/Stores/Post/Actions'
import styles from './styles'
import Header from 'App/Components/Header'
import Spinner from 'App/Components/Spinner'
import FlatList from 'App/Components/FlatList'
import FloatingButton from 'App/Components/FloatingButton'
import Components from './Components'

class Screen extends React.Component {
  componentDidMount() {
    const { posts, fetchPosts } = this.props
    if (!posts.length) {
      fetchPosts()
    }
  }

  goToPost(post) {
    const { navigation, readPost } = this.props
    if (!post.wasRead) {
      readPost(post.id)
    }
    navigation.navigate('PostDetailScreen', { post })
  }

  renderItem({ item: post }) {
    const { deletePost } = this.props
    return (
      <Components.PostCard
        {...post}
        onNavigateToPost={() => this.goToPost(post)}
        onDeletePost={() => deletePost(post.id)}
      />
    )
  }

  onDeleteAllPosts() {
    const { deleteAllPosts } = this.props
    Alert.alert(
      'Warning',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        { text: 'OK', onPress: deleteAllPosts },
      ],
      { cancelable: false }
    )
  }

  render() {
    const { posts, postsIsLoading, fetchPosts } = this.props

    return (
      <Container>
        <Header
          title="Posts"
          RightCustomComponent={() => (
            <Button transparent onPress={fetchPosts}>
              <Icon name="refresh" />
            </Button>
          )}
        />

        <View style={styles.content}>
          {postsIsLoading ? (
            <Spinner />
          ) : (
            <FlatList
              data={posts}
              contentContainerStyle={styles.listContent}
              renderItem={this.renderItem.bind(this)}
            />
          )}
        </View>

        <FloatingButton
          position="bottomRight"
          disabled={postsIsLoading || !posts.length}
          onPress={this.onDeleteAllPosts.bind(this)}
        />
      </Container>
    )
  }
}

Screen.propTypes = {
  navigation: PropTypes.object.isRequired,
  posts: PropTypes.array,
  postsIsLoading: PropTypes.bool,
  postsErrorMessage: PropTypes.string,
  fetchPosts: PropTypes.func,
  readPost: PropTypes.func,
  deletePost: PropTypes.func,
  deleteAllPosts: PropTypes.func,
}

const mapStateToProps = ({ post }) => ({
  ...post,
})

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(PostActions.fetchPosts()),
  readPost: (id) => dispatch(PostActions.readPost(id)),
  deletePost: (id) => dispatch(PostActions.deletePost(id)),
  deleteAllPosts: () => dispatch(PostActions.deleteAllPosts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen)
