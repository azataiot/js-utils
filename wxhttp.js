import baseUrl from './env'
 
function getHeader() {
  if (wx.getStorageSync('token')) {
    return {
      'content-type': 'application/json',
      'token': wx.getStorageSync('token')
    }
  }
  return {
    'content-type': 'application/json'
  }
}
 
function showErrToast(e) {
  if(e) {
    wx.showToast({
      title: e,
      icon: 'none',
      duration: 1500
    })
  }
}
 
function getPromise(url, data, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}${url}`,
      header: getHeader(),
      method: method,
      data: data,
      success: function(res) {
        if(res.data.status != undefined) {
          if (res.data.status === 0) {
            resolve(res.data.data)
          } else {
            reject(res.data.msg)
          }
        }
        if(res.data.msgCode != undefined) {
          if (res.data.msgCode === 0) {
            resolve(res.data.resultInfo)
          } else {
            reject(res.data.msgInfo)
          }
        }
      },
      fail: function(err) {
        reject(err)
      }
    })
  }).catch(function(e) {
    showErrToast(e)
  })
}
 
const http = {
  get: function(url, data) {
    // uploadFormIds()
    return getPromise(url, data, 'GET')
  },
  post: function(url, data) {
    return getPromise(url, data, 'POST')
  },
  put: function(url, data) {
    return getPromise(url, data, 'PUT')
  },
  delete: function(url, data) {
    return getPromise(url, data, 'DELETE')
  }
}
 
export default http