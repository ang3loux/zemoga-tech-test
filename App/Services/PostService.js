import axios from 'axios'
import { Config } from 'App/Config'

const ROUTES = {
  posts: '/posts',
}

const postApiClient = (route = 'posts') =>
  axios.create({
    baseURL: Config.API_URL + ROUTES[route],
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 3000,
  })

function fetchPosts() {
  return postApiClient()
    .get()
    .then(({ status, data }) => (status === 200 ? data : null))
    .catch((err) => {
      console.log(err)
      return null
    })
}

export const postService = {
  fetchPosts,
}
