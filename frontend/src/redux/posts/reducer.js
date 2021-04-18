import * as actions from './constant'

const initialState = {
  loading: false,
  posts: [],
  currentPost: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_POSTS_INIT:
      return {
        ...state,
        loading: true,
      }
    case actions.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      }
    case actions.FETCH_POSTS_FAIL:
      return {
        ...state,
        loading: false,
      }
    case actions.CURRENT_POSTS:
      return {
        ...state,
        currentPost: action.payload,
      }
    case actions.UPDATE_POSTS:
      return {
        ...state,
        currentPost: {},
      }
    default:
      return state
  }
}
