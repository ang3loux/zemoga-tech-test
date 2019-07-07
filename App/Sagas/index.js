import { all, takeLatest } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { PostTypes } from 'App/Stores/Post/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchPosts } from './PostSaga'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(PostTypes.FETCH_POSTS, fetchPosts),
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
  ])
}
