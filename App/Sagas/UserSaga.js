import { put, call } from 'redux-saga/effects'
import { Toast } from 'native-base'
import UserActions from 'App/Stores/User/Actions'
import { userService } from 'App/Services/UserService'

export function* fetchUser(action) {
  yield put(UserActions.fetchUserLoading())

  const user = yield call(userService.fetchUser, action.id)
  if (user) {
    yield put(UserActions.fetchUserSuccess(user))
  } else {
    const error = 'There was an error while fetching user information.'
    Toast.show({
      text: error,
      buttonText: 'Okay',
      type: 'danger',
      duration: 3000,
    })
    yield put(UserActions.fetchUserFailure(error))
  }
}
