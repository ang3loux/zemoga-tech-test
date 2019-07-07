import { combineReducers } from 'redux'
import { reducer as ExampleReducer } from './Example/Reducers'
import { reducer as PostReducer } from './Post/Reducers'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'

export default () => {
  const rootReducer = combineReducers({
    post: PostReducer,
    example: ExampleReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
