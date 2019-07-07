import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setPost: ['post'],
  fetchPosts: null,
  fetchPostsLoading: null,
  fetchPostsSuccess: ['posts'],
  fetchPostsFailure: ['errorMessage'],
})

export const PostTypes = Types
export default Creators
