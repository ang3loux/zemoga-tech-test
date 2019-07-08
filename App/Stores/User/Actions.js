import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchUser: ['id'],
  fetchUserLoading: null,
  fetchUserSuccess: ['user'],
  fetchUserFailure: ['errorMessage'],
})

export const UserTypes = Types
export default Creators
