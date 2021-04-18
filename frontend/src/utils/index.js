import { LABELS } from '../config/constants'
import { toast } from 'react-toastify'
export const updateMetadata = (pageName) => {
  document.title = `${LABELS.HEADLINE} - ${pageName}`
}

export const content_types = {
  multipart: {
    'Content-Type': 'multipart/form-data',
  },
  json: {
    'Content-Type': 'application/json',
  },
}

export const errorToast = (message, onClose = () => {}) => {
  if (!message) return
  toast.error(message, {
    onClose,
  })
}

export const successToast = (message, onClose = () => {}) => {
  if (!message) return
  toast.success(message, {
    onClose,
  })
}

export const infoToast = (message, onClose = () => {}) => {
  if (!message) return
  toast.info(message, {
    onClose,
  })
}

export const auth_header = () => {
  return { authorization: 'token' }
}

export const getState = (key) => {
  return localStorage.getItem(key)
}
