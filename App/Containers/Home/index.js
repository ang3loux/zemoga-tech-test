import React from 'react'
import { View } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import PostActions from 'App/Stores/Post/Actions'
// import ExampleActions from 'App/Stores/Example/Actions'
import styles from './styles'
// import { Images } from 'App/Theme'
import Header from 'App/Components/Header'
import Spinner from 'App/Components/Spinner'
import FlatList from 'App/Components/FlatList'
import Components from './Components'

class Screen extends React.Component {
  componentDidMount() {
    const { posts, fetchPosts } = this.props
    if (!posts.length) {
      fetchPosts()
    }
  }

  renderItem({ item, index }) {
    return <Components.PostCard {...item} />
  }

  render() {
    const { posts, postsIsLoading, postsErrorMessage } = this.props

    return (
      <Container>
        <Header />

        <View style={styles.content}>
          {postsIsLoading ? (
            <Spinner />
          ) : (
            <FlatList
              data={posts}
              contentContainerStyle={styles.listContent}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </Container>
    )
  }
}

Screen.propTypes = {
  posts: PropTypes.array,
  postsIsLoading: PropTypes.bool,
  postsErrorMessage: PropTypes.string,
  fetchPosts: PropTypes.func,
}

const mapStateToProps = ({ post }) => ({
  ...post,
})

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(PostActions.fetchPosts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen)
