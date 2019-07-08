import { call, put } from 'redux-saga/effects'
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
    yield put(PostActions.fetchPostsFailure('There was an error while fetching all the posts.'))
  }
}
