import { call, put } from 'redux-saga/effects'
import PostActions from 'App/Stores/Post/Actions'
import { postService } from 'App/Services/PostService'

export function* fetchPosts() {
  yield put(PostActions.fetchPostsLoading())

  const posts = yield call(postService.fetchPosts)
  if (posts) {
    yield put(PostActions.fetchPostsSuccess(posts))
  } else {
    yield put(PostActions.fetchPostsFailure('There was an error while fetching all the posts.'))
  }
}
