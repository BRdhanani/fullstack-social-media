import Axios from 'axios'
import { Configuration } from './../config/config.env'

export class ApiRequestService {
  constructor(baseURL) {
    this.baseURL = baseURL || Configuration.ROUTE
    this.axiosService = Axios.create({
      baseURL: this.baseURL,
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      },
    })

    this.axiosPutService = Axios.create({
      baseURL: this.baseURL,
    })
  }

  getApi(path, headers = {}, params = {}) {
    return new Promise((resolve) => {
      this.axiosService
        .get(path, {
          headers,
          params,
        })
        .then((res) => {
          resolve({
            message: res.data.message,
            status: res.status === 200,
            statusText: 'Success',
            data: res.data,
          })
        })
        .catch((error) => {
          resolve({
            message: error?.response?.data?.error,
            status: false,
            statusText: 'Error',
          })
        })
      // .then(() => {
      //     // here the code which should be excuted always
      // })
    })
  }

  postApi(path, apiData, headers = {}) {
    return new Promise((resolve, reject) => {
      this.axiosService
        .post(path, apiData, {
          headers,
        })
        .then((res) => {
          //   console.log('res', res)
          resolve({
            message: res.data ? res.data.message : '',
            status: res.data.code === 200,
            statusText: 'Success',
            data: res.data,
          })
        })
        .catch((error) => {
          console.log('err', error)
          resolve({
            message: error?.response?.data?.error,
            status: false,
            statusText: 'Error',
          })
        })
      // .then(() => {
      //     // here the code which should be excuted always
      // })
    })
  }

  patchApi(path, apiData, headers = {}) {
    return new Promise((resolve, reject) => {
      this.axiosService
        .patch(path, apiData, {
          headers,
        })
        .then((res) => {
          //   console.log('res', res)
          resolve({
            message: res.data ? res.data.message : '',
            status: res.data.code === 200,
            statusText: 'Success',
            data: res.data,
          })
        })
        .catch((error) => {
          console.log('err', error)
          resolve({
            message: error?.response?.data?.error,
            status: false,
            statusText: 'Error',
          })
        })
      // .then(() => {
      //     // here the code which should be excuted always
      // })
    })
  }

  deleteApi(path, headers = {}, apiData = {}) {
    return new Promise((resolve) => {
      this.axiosService
        .delete(path, {
          headers: {
            ...headers,
          },
          apiData,
        })
        .then((res) => {
          resolve({
            message: res.data.message,
            status: res.data.code === 200,
            statusText: 'Success',
            data: res.data.data,
          })
        })
        .catch((error) => {
          resolve({
            message: error?.response?.data?.error,
            status: false,
            statusText: 'Error',
          })
        })
      // .then(() => {
      //     // here the code which should be excuted always
      // })
    })
  }

  putApi(path, apiData) {
    return new Promise((resolve) => {
      this.axiosPutService
        .put(path, apiData)
        .then((res) => {
          resolve({
            message: res.data.message,
            status: res.data.code === 200,
            statusText: 'Success',
            data: res.data.data,
          })
        })
        .catch((error) => {
          resolve({
            message: error?.response?.data?.error,
            status: false,
            statusText: 'Error',
          })
        })
      // .then(() => {
      //     // here the code which should be excuted always
      // })
    })
  }
}

export default ApiRequestService
