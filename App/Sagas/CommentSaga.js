import { put, call } from 'redux-saga/effects'
import { Toast } from 'native-base'
import CommentActions from 'App/Stores/Comment/Actions'
import { commentService } from 'App/Services/CommentService'

export function* fetchComments(action) {
  yield put(CommentActions.fetchCommentsLoading())

  const comments = yield call(commentService.fetchComments, action.postId)
  if (comments) {
    yield put(CommentActions.fetchCommentsSuccess(comments))
  } else {
    const error = 'There was an error while fetching post comments.'
    Toast.show({
      text: error,
      buttonText: 'Okay',
      type: 'danger',
      duration: 3000,
    })
    yield put(CommentActions.fetchCommentsFailure(error))
  }
}
