import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchComments: ['postId'],
  fetchCommentsLoading: null,
  fetchCommentsSuccess: ['comments'],
  fetchCommentsFailure: ['errorMessage'],
})

export const CommentTypes = Types
export default Creators
