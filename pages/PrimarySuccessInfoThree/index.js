// pages/PrimarySuccessInfoThree/index.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step3_q1: '',
    step3_q1_detail: '',
    step3_q2: '',
    step3_q2_detail: '',
    step3_q3: '',
    step3_q3_detail: '',
    step3_q4: '',
    PrimarySuccessInfo: {},//初选合格提交信息 存储信息的数组
  },
  //页面3个单选框的点击事件
  radioChange1(e) {
    this.setData({
      step3_q1: e.detail.value
    })
  },
  InputSpecialCondition1: function (e) {
    this.setData({
      step3_q1_detail: e.detail.value
    })
  },
  radioChange2(e) {
    this.setData({
      step3_q2: e.detail.value
    })
  },
  InputSpecialCondition2: function (e) {
    this.setData({
      step3_q2_detail: e.detail.value
    })
  },
  radioChange3(e) {
    this.setData({
      step3_q3: e.detail.value
    })
  },
  InputSpecialCondition3: function (e) {
    this.setData({
      step3_q3_detail: e.detail.value
    })
  },
  InputSpecialCondition4: function (e) {
    this.setData({
      step3_q4: e.detail.value
    })
  },
  //上一项按钮
  toBackPage() {
    wx.navigateBack({
      delta: 1,
    })
    // ({
    //   url: '/pages/PrimarySuccessInfoTwo/index',
    // })
  },
  // pan() {
  //   let that = this;
  //   if (that.data.step3_q1 == 1 && that.data.step3_q1_detail == '') {
  //     wx.showToast({
  //       title: '请描述父母、祖父母、外祖父母以及他们的子女有无失踪失联、收养领养或送人抱养的具体情况',
  //       icon: 'none'
  //     })
  //   } else if (that.data.step3_q2 == 1 && that.data.step3_q2_detail == '') {
  //     wx.showToast({
  //       title: '请描述父母、祖父母、外祖父母以及他们所生育的子女有无违法犯罪的具体情况',
  //       icon: 'none'
  //     })
  //   } else if (that.data.step3_q3 == 1 && that.data.step3_q3_detail == '') {
  //     wx.showToast({
  //       title: '请描述父母、祖父母、外祖父母以及他们所生育的子女有无在国外或港澳台地区工作、学习、居住的具体情况',
  //       icon: 'none'
  //     })
  //   }
  //   else{
  //     that.B()
  //   }
  // },
  //提交按钮
  toNextPage() {
    let that = this;
    if (that.data.step3_q1 == '') {
      wx.showToast({
        title: '请选择父母、祖父母、外祖父母以及他们的子女有无失踪失联、收养领养或送人抱养的情况',
        icon: 'none'
      })
    } else if (that.data.step3_q1_detail == '') {
      wx.showToast({
        title: '请填写父母、祖父母、外祖父母以及他们的子女有无失踪失联、收养领养或送人抱养的情况具体情况',
        icon: 'none'
      })
    }else if (that.data.step3_q2 == '') {
      wx.showToast({
        title: '请选择父母、祖父母、外祖父母以及他们所生育的子女有无违法犯罪的情况',
        icon: 'none'
      })
    }else if (that.data.step3_q2_detail == '') {
      wx.showToast({
        title: '请填写父母、祖父母、外祖父母以及他们所生育的子女有无违法犯罪的情况具体情况',
        icon: 'none'
      })
    } else if (that.data.step3_q3 == '') {
      wx.showToast({
        title: '请选择父母、祖父母、外祖父母以及他们所生育的子女有无在国外或港澳台地区工作、学习、居住等情况',
        icon: 'none'
      })
    }else if (that.data.step3_q3_detail == '') {
      wx.showToast({
        title: '请填写父母、祖父母、外祖父母以及他们所生育的子女有无在国外或港澳台地区工作、学习、居住等具体情况',
        icon: 'none'
      })
    }  else {
      // that.pan();
      that.B()
      // if (that.data.step3_q1 == 1) {
      //   if (that.data.step3_q1_detail == '') {
      //     wx.showToast({
      //       title: '请描述父母、祖父母、外祖父母以及他们的子女有无失踪失联、收养领养或送人抱养的具体情况',
      //       icon: 'none'
      //     })
      //   } else {
      //     if (that.data.step3_q2 == 1) {
      //       if (that.data.step3_q2_detail == '') {
      //         wx.showToast({
      //           title: '请描述父母、祖父母、外祖父母以及他们所生育的子女有无违法犯罪的具体情况',
      //           icon: 'none'
      //         })
      //       } else {
      //         if (that.data.step3_q3 == 1) {
      //           if (that.data.step3_q3_detail == '') {
      //             wx.showToast({
      //               title: '请描述父母、祖父母、外祖父母以及他们所生育的子女有无在国外或港澳台地区工作、学习、居住的具体情况',
      //               icon: 'none'
      //             })
      //           } else {
      //             this.B()
      //           }
      //         }
      //       }
      //     }
      //   }
      // } else {
      //   if (that.data.step3_q2 == 1) {
      //     if (that.data.step3_q2_detail == '') {
      //       wx.showToast({
      //         title: '请描述父母、祖父母、外祖父母以及他们所生育的子女有无违法犯罪的具体情况',
      //         icon: 'none'
      //       })
      //     } else {
      //       if (that.data.step3_q3 == 1) {
      //         if (that.data.step3_q3_detail == '') {
      //           wx.showToast({
      //             title: '请描述父母、祖父母、外祖父母以及他们所生育的子女有无在国外或港澳台地区工作、学习、居住的具体情况',
      //             icon: 'none'
      //           })
      //         } else {
      //           this.B()
      //         }
      //       }
      //     }
      //   } else {
      //     if (that.data.step3_q3 == 1) {
      //       if (that.data.step3_q3_detail == '') {
      //         wx.showToast({
      //           title: '请描述父母、祖父母、外祖父母以及他们所生育的子女有无在国外或港澳台地区工作、学习、居住的具体情况',
      //           icon: 'none'
      //         })
      //       } else {
      //         this.B()
      //       }
      //     }
      //     else {
      //       this.B()
      //     }
      //   }
      // }
    }

  },
  B() {
    let that = this;
    let PrimarySuccessInfo = wx.getStorageSync('PrimarySucscessInfo');
    let url = '/api/high/stage2';
    let params = {
      step1_q1: that.data.PrimarySuccessInfo.step1_q1,
      step1_q2: that.data.PrimarySuccessInfo.step1_q2,
      step1_q3: that.data.PrimarySuccessInfo.step1_q3,
      step1_q4: that.data.PrimarySuccessInfo.step1_q4,
      step1_q5: that.data.PrimarySuccessInfo.step1_q5,
      step1_q6: that.data.PrimarySuccessInfo.step1_q6,
      step1_q7: that.data.PrimarySuccessInfo.step1_q7,
      step1_q8: that.data.PrimarySuccessInfo.step1_q8,
      step1_q9: that.data.PrimarySuccessInfo.step1_q9,
      step1_q10: that.data.PrimarySuccessInfo.step1_q10,
      step1_q11: that.data.PrimarySuccessInfo.step1_q11,
      step2_q1: that.data.PrimarySuccessInfo.step2_q1,
      step2_q2: that.data.PrimarySuccessInfo.step2_q2,
      step2_q3: that.data.PrimarySuccessInfo.step2_q3,
      step2_q3_detail: that.data.PrimarySuccessInfo.step2_q3_detail,
      step2_q4: that.data.PrimarySuccessInfo.step2_q4,
      step2_q4_detail: that.data.PrimarySuccessInfo.step2_q4_detail,
      step2_q5: that.data.PrimarySuccessInfo.step2_q5,
      step2_q5_detail: that.data.PrimarySuccessInfo.step2_q5_detail,
      step2_q6: that.data.PrimarySuccessInfo.step2_q6,
      step2_q7: that.data.PrimarySuccessInfo.step2_q7,
      step2_q8: that.data.PrimarySuccessInfo.step2_q8,
      step2_q9: that.data.PrimarySuccessInfo.step2_q9,
      step2_q10: that.data.PrimarySuccessInfo.step2_q10,
      step2_q10_detail: that.data.PrimarySuccessInfo.step2_q10_detail,
      step2_q11: that.data.PrimarySuccessInfo.step2_q11,
      step2_q11_detail: that.data.PrimarySuccessInfo.step2_q11_detail,
      step2_q12: that.data.PrimarySuccessInfo.step2_q12,
      step2_q13: that.data.PrimarySuccessInfo.step2_q13,
      step2_q14: that.data.PrimarySuccessInfo.step2_q14,
      step2_q14_detail: that.data.PrimarySuccessInfo.step2_q14_detail,
      step2_q15: that.data.PrimarySuccessInfo.step2_q15,

      step3_q1: that.data.step3_q1,
      step3_q1_detail: that.data.step3_q1_detail,
      step3_q2: that.data.step3_q2,
      step3_q2_detail: that.data.step3_q2_detail,
      step3_q3: that.data.step3_q3,
      step3_q3_detail: that.data.step3_q3_detail,
      step3_q4: that.data.step3_q4,
    }
    app.post(url, params).then(r => {
      console.log(r)
    })
    wx.navigateBack({
      delta: 3
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = '/api/high/stage2View';
    let params = wx.getStorageSync('student_token');
    app.post(url, params).then(r => {
      console.log(r)

      if (r.data != null) {
        this.setData({
          step3_q1: r.data.step3_q1,
          step3_q1_detail: r.data.step3_q1_detail,
          step3_q2: r.data.step3_q2,
          step3_q2_detail: r.data.step3_q2_detail,
          step3_q3: r.data.step3_q3,
          step3_q3_detail: r.data.step3_q3_detail,
          step3_q4: r.data.step3_q4,
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
      PrimarySuccessInfo: wx.getStorageSync('PrimarySuccessInfo')
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