// pages/ChangePassword/index.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    education: '1',//学历
    isShow: false,//页面确认弹框
    //idNum:'',//页面传递的身份证号
    //idCode:'',//密码
    idConfirm: '',//确认密码
    idcard: '',//身份证号
    newpassword: '',//新密码
    student_token:'',//学生token
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onInputIdNum: function (e) {
    console.log('身份证号为' + e.detail.value)
    this.setData({
      idcard: e.detail.value
    })
  },
  onInputidCode: function (e) {
    console.log('密码为' + e.detail.value)
    this.setData({
      newpassword: e.detail.value
    })
  },
  onInputidConfirm: function (e) {
    console.log('确认密码' + e.detail.value)
    this.setData({
      idConfirm: e.detail.value
    })
  },

  //弹框
  toMask() {
    let that=this;
    if (that.data.idcard == '') {
      wx.showToast({
        title: '请输入身份证号码',
        icon: 'none'
      })
    } else if (that.data.password == '' ) {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      })
    } else if (that.data.idConfirm ==''){
      wx.showToast({
        title: '请确认密码',
        icon: 'none'
      })
    }else{
      this.setData({
        isShow: !this.data.isShow
      })
    }
  },
  cancel() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  //确认按钮
  confirm() {
    let that = this;
      let url = '/api/index/editpwd';
      let params = {
        education: that.data.education,
        idcard: that.data.idcard,
        newpassword: that.data.newpassword,
      }
      app.post(url, params).then(r => {
        console.log(r)
      })
      if (that.data.newpassword == that.data.idConfirm) {
        this.setData({
          isShow: !this.data.isShow
        }),
          wx.showToast({
            title: '修改成功',
            icon: 'none',
          }),
          setTimeout(() => {
            // wx.redirectTo({
            //   url: '/pages/HighStudent/index'
            // })
            wx.navigateBack({
              delta: 1,
            })
          }, 2000);
      } else {
        this.setData({
          isShow: false,
        }),
          wx.showToast({
            title: '两次输入密码不一致，请再次确认密码',
            icon: 'none'
          })
      }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})