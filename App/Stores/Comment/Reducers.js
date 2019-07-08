import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { CommentTypes } from './Actions'

export const fetchCommentsLoading = (state) => ({
  ...state,
  commentsIsLoading: true,
  commentsErrorMessage: null,
})

export const fetchCommentsSuccess = (state, { comments }) => ({
  ...state,
  comments,
  commentsIsLoading: false,
  commentsErrorMessage: null,
})

export const fetchCommentsFailure = (state, { errorMessage }) => ({
  ...state,
  comments: {},
  commentsIsLoading: false,
  commentsErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [CommentTypes.FETCH_COMMENTS_LOADING]: fetchCommentsLoading,
  [CommentTypes.FETCH_COMMENTS_SUCCESS]: fetchCommentsSuccess,
  [CommentTypes.FETCH_COMMENTS_FAILURE]: fetchCommentsFailure,
})
