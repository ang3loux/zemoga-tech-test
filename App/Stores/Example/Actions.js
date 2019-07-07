import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchUser: null,
  fetchUserLoading: null,
  fetchUserSuccess: ['user'],
  fetchUserFailure: ['errorMessage'],
})

export const ExampleTypes = Types
export default Creators
