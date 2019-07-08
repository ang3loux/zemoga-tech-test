import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import { PostTypes } from './Actions'

const updatePost = (posts, id, prop) =>
  posts.map((post) => {
    post[prop] = post.id === id ? !post[prop] : post[prop]
    return post
  })

export const readPost = (state, { id }) => ({
  ...state,
  posts: updatePost(state.posts, id, 'wasRead'),
})

export const switchFavorite = (state, { id }) => ({
  ...state,
  posts: updatePost(state.posts, id, 'isFavorite'),
})

export const deletePost = (state, { id }) => ({
  ...state,
  posts: state.posts.filter((post) => post.id !== id),
})

export const deleteAllPosts = (state) => ({
  ...state,
  posts: [],
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
  [PostTypes.READ_POST]: readPost,
  [PostTypes.SWITCH_FAVORITE]: switchFavorite,
  [PostTypes.DELETE_POST]: deletePost,
  [PostTypes.DELETE_ALL_POSTS]: deleteAllPosts,
  [PostTypes.FETCH_POSTS_LOADING]: fetchPostsLoading,
  [PostTypes.FETCH_POSTS_SUCCESS]: fetchPostsSuccess,
  [PostTypes.FETCH_POSTS_FAILURE]: fetchPostsFailure,
})
