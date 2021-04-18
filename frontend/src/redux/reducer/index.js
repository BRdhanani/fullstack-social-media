import { combineReducers } from 'redux'
import posts from '../posts/reducer'

const rootReducer = (history) =>
  combineReducers({
    posts,
  })

export default rootReducer
