import axios from 'axios'
import { Config } from 'App/Config'

const ROUTES = {
  users: '/users',
}

const userApiClient = (route = 'users') =>
  axios.create({
    baseURL: Config.API_URL + ROUTES[route],
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 3000,
  })

function fetchUser(id) {
  const query = `/${id}`

  return userApiClient()
    .get(query)
    .then(({ status, data }) => (status === 200 ? data : null))
    .catch((err) => {
      console.log(err)
      return null
    })
}

export const userService = {
  fetchUser,
}
