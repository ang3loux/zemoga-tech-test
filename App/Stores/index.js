import { combineReducers } from 'redux'
import { reducer as PostReducer } from './Post/Reducers'
import { reducer as UserReducer } from './User/Reducers'
import { reducer as CommentReducer } from './Comment/Reducers'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'

export default () => {
  const rootReducer = combineReducers({
    post: PostReducer,
    user: UserReducer,
    comment: CommentReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
