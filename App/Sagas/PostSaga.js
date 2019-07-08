import { call, put } from 'redux-saga/effects'
import { Toast } from 'native-base'
import PostActions from 'App/Stores/Post/Actions'
import { postService } from 'App/Services/PostService'

export function* fetchPosts() {
  yield put(PostActions.fetchPostsLoading())

  const posts = yield call(postService.fetchPosts)
  if (posts) {
    const _posts = posts.map((post, index) => ({
      ...post,
      wasRead: !(index < 20),
      isFavorite: false,
    }))

    yield put(PostActions.fetchPostsSuccess(_posts))
  } else {
    const error = 'There was an error while fetching all the posts.'
    Toast.show({
      text: error,
      buttonText: 'Okay',
      type: 'danger',
      duration: 3000,
    })
    yield put(PostActions.fetchPostsFailure(error))
  }
}
