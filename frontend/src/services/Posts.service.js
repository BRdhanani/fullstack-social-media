import ApiService from './api.service'

const api = new ApiService()

export const getPostsService = async () => {
  try {
    return await api.getApi('/posts')
  } catch (e) {
    throw new Error(e)
  }
}

export const createPostService = async (data) => {
  try {
    return await api.postApi('/posts/create-post', data)
  } catch (e) {
    throw new Error(e)
  }
}

export const updatePostService = async (data) => {
  try {
    return await api.patchApi(`/posts/${data?.id}`, data)
  } catch (e) {
    throw new Error(e)
  }
}

export const deletePostService = async (id) => {
  try {
    return await api.deleteApi(`/posts/${id}`)
  } catch (e) {
    throw new Error(e)
  }
}

export const likePostService = async (id) => {
  try {
    return await api.patchApi(`/posts/${id}/like`)
  } catch (e) {
    throw new Error(e)
  }
}
