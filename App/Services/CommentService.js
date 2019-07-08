import axios from 'axios'
import { Config } from 'App/Config'

const ROUTES = {
  comments: '/comments',
}

const commentApiClient = (route = 'comments') =>
  axios.create({
    baseURL: Config.API_URL + ROUTES[route],
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 3000,
  })

function fetchComments(postId) {
  const params = { postId }
  return commentApiClient()
    .get('', { params })
    .then(({ status, data }) => (status === 200 ? data : null))
    .catch((err) => {
      console.log(err)
      return null
    })
}

export const commentService = {
  fetchComments,
}
