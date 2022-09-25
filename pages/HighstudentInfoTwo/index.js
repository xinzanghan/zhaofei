// pages/HighstudentInfoTwo/index.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ti: '',//体重比
    items: [
      { value: '1', name: '需练习下蹲' },
      { value: '2', name: '需治疗痔疮', },
      { value: '3', name: '需治疗腋臭' },
      { value: '4', name: '无' },
    ],            //注意事项1
    itemss: [
      { value: '1', name: '需做鼻中隔偏曲手术' },
      { value: '2', name: '需做上眼脸下垂手术', },
      { value: '3', name: '无' },
    ],            //注意事项2
    step2_q1: '',
    step2_q2: '',
    step2_q3: '',//身高
    step2_q4: '', //标准体重
    step2_q5: '',//实际体重
    step2_q6: '', //体重比
    step2_q7: '',
    step2_q8: '',
    step2_q9: '',
    HighstudentInfo: {},//初选合格提交信息 存储信息的数组
  },
  //所有input输入框的点击事件
  InputLeft: function (e) {
    this.setData({
      step2_q1: e.detail.value
    })
  },
  InputRight: function (e) {
    this.setData({
      step2_q2: e.detail.value
    })
  },
  InputHeight: function (e) {
    this.setData({
      step2_q3: e.detail.value
    })
    if (e.detail.value == '') {
      this.setData({
        step2_q4: 0
      })
    } else {
      let i = e.detail.value - 110
      this.setData({
        step2_q4: i
      })
    }
  },
  InputWeight: function (e) {
    this.setData({
      step2_q4: e.detail.value
    })
  },
  InputRealWeight: function (e) {
    this.setData({
      step2_q5: e.detail.value
    })
    if (e.detail.value == '') {
      this.setData({
        step2_q6: 0
      })
    } else {
      let i = (e.detail.value / this.data.step2_q4).toFixed(2)
      this.setData({
        step2_q6: i
      })
    }
  },
  InputOnWeight: function (e) {
    this.setData({
      step2_q6: e.detail.value
    })
  },
  radioChange: function (e) {
    this.setData({
      step2_q7: e.detail.value
    })
  },
  radioChanged: function (e) {
    this.setData({
      step2_q8: e.detail.value
    })
  },
  InputNotice: function (e) {
    this.setData({
      step2_q9: e.detail.value
    })
  },
  //上一项按钮
  toBackPage() {
    wx.navigateBack({
      delta: 1,
    })
    // ({
    //   url: '/pages/HighstudentInfo/index',
    // })
  },
  //下一项按钮
  toNextPage() {
    let that = this;
    if (that.data.step2_q1 == '') {
      wx.showToast({
        title: '请输入左眼C字表视力',
        icon: 'none'
      })
    } else if (that.data.step2_q2 == '') {
      wx.showToast({
        title: '请输入右眼C字表视力',
        icon: 'none'
      })
    } else if (that.data.step2_q3 == '') {
      wx.showToast({
        title: '请输入身高（cm）',
        icon: 'none'
      })
    } else if (that.data.step2_q4 == '') {
      wx.showToast({
        title: '请输入标准体重（kg）',
        icon: 'none'
      })
    } else if (that.data.step2_q5 == '') {
      wx.showToast({
        title: '请输入实际体重（kg）',
        icon: 'none'
      })
    } else if (that.data.step2_q6 == '') {
      wx.showToast({
        title: '请输入体重比（%）',
        icon: 'none'
      })
    } else if (that.data.step2_q7 == '') {
      wx.showToast({
        title: '请输入医生交代注意事项1',
        icon: 'none'
      })
    } else if (that.data.step2_q8 == '') {
      wx.showToast({
        title: '请输入医生交代注意事项2',
        icon: 'none'
      })
    } else {
      let HighstudentInfo = wx.getStorageSync('HighstudentInfo');
      HighstudentInfo.step2_q1 = that.data.step2_q1;
      HighstudentInfo.step2_q2 = that.data.step2_q2;
      HighstudentInfo.step2_q3 = that.data.step2_q3;
      HighstudentInfo.step2_q4 = that.data.step2_q4;
      HighstudentInfo.step2_q5 = that.data.step2_q5;
      HighstudentInfo.step2_q6 = that.data.step2_q6;
      HighstudentInfo.step2_q7 = that.data.step2_q7;
      HighstudentInfo.step2_q8 = that.data.step2_q8;
      HighstudentInfo.step2_q9 = that.data.step2_q9;
      wx.setStorageSync('HighstudentInfo', HighstudentInfo)
      wx.navigateTo({
        url: '/pages/HighstudentInfoThree/index',
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that = this;
    let url = '/api/high/stage1View';
    let params = wx.getStorageSync('student_token')
    app.post(url, params).then(r => {

      console.log(r);
      if (r.data != null) {
        // let items = that.data.items;
        // for (let i = 0; i < items.length; i++) {
        //   if (items[i].value == r.data.step1_q6) {
        //    items[i].checked=true
        //   }
        // }

        // that.setData({
        //   items
        // })

        this.setData({
          step2_q1: r.data.step2_q1,
          step2_q2: r.data.step2_q2,
          step2_q3: r.data.step2_q3,
          step2_q4: r.data.step2_q4,
          step2_q5: r.data.step2_q5,
          step2_q6: r.data.step2_q6,
          step2_q7: r.data.step2_q7,
          step2_q8: r.data.step2_q7,
          step2_q9: r.data.step2_q9,

        })
      }
    })

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
    let that = this;
    that.setData({
      HighstudentInfo: wx.getStorageSync('HighstudentInfo')
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