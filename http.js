import baseUrl from './env'
import axios from 'axios'
axios.defaults.baseURL = baseUrl

axios.interceptors.request.use(function(config) { // 请求拦截器
  if(localStorage.getItem('token') || sessionStorage.getItem('token')) {
    config.headers.token = localStorage.token || sessionStorage.token
  }
  return config
}, function(err) {
  showErrToast(err)
  return Promise.reject(err)
})
axios.interceptors.response.use(function(res) { // 响应拦截器
  if(res.status == 200 && res.data.code == 200) { // 请求成功
    return res.data
  } else {
    showErrToast(res.data.message || res.statusText)
    Promise.reject(res.data)
  }
}, function(err) {
  showErrToast(err)
  Promise.reject(err)
})
function showErrToast(e) {
  if(e) {
    alert(e)
  }
}
function getPromise(url, data, method) {
  let params = null
  if(method == 'get') {
    params = {
      params: data
    }
  }
  return new Promise((resolve, reject) => {
    axios.request({
      url: url,
      data: data,
      ...params,
      method: method,
    }).then( res => {
      resolve(res)
    }).catch( e => {
      reject(e)
    })
  }).catch( e => {
    showErrToast(e)
  })
}

const http = {
  get: (url, data) => { return getPromise(url, data, 'get') },
  post: (url, data) => { return getPromise(url, data, 'post') },
  put: (url ,data) => { return getPromise(url, data, 'put') },
  delete: (url, data) => { return getPromise(url, data, 'delete') }
}

export default http