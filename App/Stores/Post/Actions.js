import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  readPost: ['id'],
  switchFavorite: ['id'],
  deletePost: ['id'],
  deleteAllPosts: null,
  fetchPosts: null,
  fetchPostsLoading: null,
  fetchPostsSuccess: ['posts'],
  fetchPostsFailure: ['errorMessage'],
})

export const PostTypes = Types
export default Creators
