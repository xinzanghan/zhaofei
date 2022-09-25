// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    idcard:'',  //身份证号
  },
  //点击页面跳转 高中
  toHighStudent(){
    wx.navigateTo({
      url: '/pages/HighStudent/index',
    })
    // let idcard=wx.getStorageSync('idcard')
    // if(idcard == ''){
      
    // }else{
      // wx.navigateTo({
      //   url: '/pages/HighStudentIndex/index',
      // })
    // }
  },
  //点击页面跳转 初中
  toMiddleStudent(){
    wx.navigateTo({
      url: '/pages/MiddleStudent/index',
    })
    // wx.navigateTo({
    //   url: '/pages/MiddleStudentIndex/index',
    // })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
