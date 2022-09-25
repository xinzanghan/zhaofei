// app.js

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
   
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight
      }
    })
  },
  post: function (url, data, showLoad) {
    wx.showNavigationBarLoading()
    var promise = new Promise((resolve, reject) => {
      //init
      let that = this;
      let postData = data
    
      let baseUrl = 'https://zhaofei.brotop.cn'
      let hearderType = url=='/api/wechat/login'?'':'application/x-www-form-urlencoded'
      //网络请求  
      wx.request({
        url: baseUrl + url,
        data: postData,
        method: 'POST',
        header: {
          'content-type': hearderType,
          'token': wx.getStorageSync('token') || '',
          'Student-Token': wx.getStorageSync('student_token') || ''
        },
        success: function (res) { //返回取得的数据
          if (res.data.code == '1') {
            resolve(res.data)
          } else if (res.data.code == '5000') {
            wx.hideLoading();
            reject(res.data)
            wx.removeStorageSync('token');
            wx.removeStorageSync('login');
            // wx.navigateTo({
            //   url: '/pages/register/register?type=1',
            // })
          } else {
            wx.showModal({
              title: '提示',
              content: res.data.msg,
              showCancel: false
            })
            reject(res.data)
          }
          setTimeout(function () {
            wx.hideNavigationBarLoading()
          }, 600)
        },
        fail: function (e) {
          reject('网络出错');
          wx.hideNavigationBarLoading()
        }
      })
    });
    return promise;
  },
  globalData: {
    userInfo: null,
    share: false,  // 分享默认为false
    height: 50,
  }
})
