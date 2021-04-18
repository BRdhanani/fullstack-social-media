import * as actions from './constant'
import {
  getPostsService,
  createPostService,
  updatePostService,
  deletePostService,
  likePostService,
} from '../../services/Posts.service'
export const getPosts = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: actions.FETCH_POSTS_INIT,
    })
    const { data } = await getPostsService()
    dispatch({
      type: actions.FETCH_POSTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actions.FETCH_POSTS_FAIL,
    })
  }
}

export const createPosts = (payload) => async (dispatch) => {
  try {
    const { data } = await createPostService(payload)
    dispatch({
      type: actions.CREATE_POSTS,
      payload: data,
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const updatePost = (payload) => async (dispatch) => {
  try {
    const { data } = await updatePostService(payload)
    dispatch({
      type: actions.UPDATE_POSTS,
      payload: data,
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const setCurrentPost = (payload) => async (dispatch) => {
  dispatch({
    type: actions.CURRENT_POSTS,
    payload,
  })
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await deletePostService(id)
  } catch (error) {
    console.log(error.message)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    await likePostService(id)
  } catch (error) {
    console.log(error.message)
  }
}
