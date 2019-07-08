import { all, takeLatest } from 'redux-saga/effects'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { PostTypes } from 'App/Stores/Post/Actions'
import { UserTypes } from 'App/Stores/User/Actions'
import { CommentTypes } from 'App/Stores/Comment/Actions'
import { startup } from './StartupSaga'
import { fetchPosts } from './PostSaga'
import { fetchUser } from './UserSaga'
import { fetchComments } from './CommentSaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(PostTypes.FETCH_POSTS, fetchPosts),
    takeLatest(UserTypes.FETCH_USER, fetchUser),
    takeLatest(CommentTypes.FETCH_COMMENTS, fetchComments),
  ])
}
