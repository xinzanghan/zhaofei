// pages/JoinedInfo/index.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idcard: '',  //上一页传递的身份证号码
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q4_detail: '',
    stage1_status: '',
    stage2_status: '',
    stage3_status: '',
    stage4_status: '',
    stage5_status: '',
    stage6_status: '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = '/api/high/stage3View';
    let params = wx.getStorageSync('student_token');
    app.post(url, params).then(r => {
      console.log(r)
      if (r.data != null) {
        this.setData({
          q1: r.data.q1,
          q2: r.data.q2,
          q3: r.data.q3,
          q4: r.data.q4,
          q4_detail: r.data.q4_detail,
        })
      }
    })
  },
  //页面input的点击事件
  InputBianhao: function (e) {
    this.setData({
      q1: e.detail.value
    })
  },
  InputSchoolName: function (e) {
    this.setData({
      q2: e.detail.value
    })
  },
  InputName: function (e) {
    this.setData({
      q3: e.detail.value
    })
  },
  radioChange(e) {
    this.setData({
      q4: e.detail.value
    })
  },
  InputReason: function (e) {
    this.setData({
      q4_detail: e.detail.value
    })
  },
  pan(){
    let that = this;
    if (that.data.step3_q1 == 1 && that.data.step3_q1_detail == '') {
      wx.showToast({
        title: '请描述父母、祖父母、外祖父母以及他们的子女有无失踪失联、收养领养或送人抱养的具体情况',
        icon: 'none'
      })
    } else if (that.data.step3_q2 == 1 && that.data.step3_q2_detail == '') {
      wx.showToast({
        title: '请描述父母、祖父母、外祖父母以及他们所生育的子女有无违法犯罪的具体情况',
        icon: 'none'
      })
    } else if (that.data.step3_q3 == 1 && that.data.step3_q3_detail == '') {
      wx.showToast({
        title: '请描述父母、祖父母、外祖父母以及他们所生育的子女有无在国外或港澳台地区工作、学习、居住的具体情况',
        icon: 'none'
      })
    }
    else{
      that.B()
    }
  },
  //提交按钮
  toHighSchoolIndex() {
    let that = this;
    if (that.data.q1 == '') {
      wx.showToast({
        title: '请输入初选合格证编号',
        icon: 'none'
      })
    } else if (that.data.q2 == '') {
      wx.showToast({
        title: '请输入就读学校名称',
        icon: 'none'
      })
    } else if (that.data.q3 == '') {
      wx.showToast({
        title: '请输入学生姓名',
        icon: 'none'
      })
    } else if (that.data.q4 == '') {
      wx.showToast({
        title: '请选择是否已放弃空军招飞',
        icon: 'none'
      })
    } else {
      
      if (that.data.q4 == 1 && that.data.q4_detail == '') {
       
          wx.showToast({
            title: '请输入放弃空军招飞的原因',
            icon: 'none'
          })
        } else {
          let that = this;
          let url = '/api/high/stage1Base';
          app.post(url, {}).then(r => {
            console.log(r)
            if (that.data.q1 != r.data.step1_q1) {
              wx.showToast({
                title: '初选合格证编号与之前填写不一致',
                icon: 'none'
              })
            } else if (that.data.q2 != r.data.step1_q2) {
              wx.showToast({
                title: '就读学校名称与之前填写不一致',
                icon: 'none'
              })
            } else if (that.data.q3 != r.data.step1_q3) {
              wx.showToast({
                title: '姓名与之前填写不一致',
                icon: 'none'
              })
            } else {

              let url = '/api/high/stage3';
              let params = {
                q1: that.data.q1,
                q2: that.data.q2,
                q3: that.data.q3,
                q4: that.data.q4,
                q4_detail: that.data.q4_detail,
              };
              app.post(url, params).then(r => {
                console.log(r)
              })
              wx.navigateBack({
                delta: 1
              })
            }
          })
        }
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
    this.setData({
      idcard: wx.getStorageSync('idcard'),
      stage1_status: wx.getStorageSync('stage1_status'),
      stage2_status: wx.getStorageSync('stage2_status'),
      stage3_status: wx.getStorageSync('stage3_status'),
      stage4_status: wx.getStorageSync('stage4_status'),
      stage5_status: wx.getStorageSync('stage5_status'),
      stage6_status: wx.getStorageSync('stage6_status'),
    })
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