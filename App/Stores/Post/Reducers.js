import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import { PostTypes } from './Actions'

export const setPost = (state, { post }) => ({
  ...state,
  post: post,
})

export const fetchPostsLoading = (state) => ({
  ...state,
  postsIsLoading: true,
  postsErrorMessage: null,
})

export const fetchPostsSuccess = (state, { posts }) => ({
  ...state,
  posts: posts,
  postsIsLoading: false,
  postsErrorMessage: null,
})

export const fetchPostsFailure = (state, { errorMessage }) => ({
  ...state,
  posts: [],
  postsIsLoading: false,
  postsErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [PostTypes.SET_POST]: setPost,
  [PostTypes.FETCH_POSTS_LOADING]: fetchPostsLoading,
  [PostTypes.FETCH_POSTS_SUCCESS]: fetchPostsSuccess,
  [PostTypes.FETCH_POSTS_FAILURE]: fetchPostsFailure,
})
