import { combineReducers } from 'redux'
import { reducer as UserReducer } from './User/Reducers'
import { reducer as PostReducer } from './Post/Reducers'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'

export default () => {
  const rootReducer = combineReducers({
    post: PostReducer,
    user: UserReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
