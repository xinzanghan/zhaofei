// pages/HighstudentInfoFour/index.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exam: [
      { value: '1', name: '正常' },
      { value: '2', name: '有进步', },
      { value: '3', name: '失常' },
    ],            //考试发挥情况
    items: [
      { value: '1', name: '超一本100分以上' },
      { value: '2', name: '超一本30分以上', },
      { value: '3', name: '刚够一本' },
      { value: '4', name: '一本偏下' },
    ],            //注意事项2
    itemss: [
      { value: '1', name: '600+' },
      { value: '2', name: '1+', },
      { value: '3', name: '1' },
      { value: '4', name: '1-' },
    ],            //注意事项1
    step4_q1: '',
    step4_q2: '',
    step4_q3: '',
    step4_q4: '',
    step4_q5: '',
    step4_q6: '',
    step4_q7: '',
    step4_q8: '',
    step4_q9: '',
    step4_q9_detail: '',
    step4_q10: '',
    step4_q11: '',
    HighstudentInfo: {},//初选合格提交信息 存储信息的数组

  },
  //页面所有input输入框的点击事件
  InputLatelyScore: function (e) {
    this.setData({
      step4_q1: e.detail.value
    })
  },
  InputThisLine: function (e) {
    this.setData({
      step4_q2: e.detail.value
    })
  },
  InputThisRanking: function (e) {
    this.setData({
      step4_q3: e.detail.value
    })
  },
  radioChange1(e) {
    this.setData({
      step4_q4: e.detail.value
    })
  },
  InputLastScore: function (e) {
    this.setData({
      step4_q5: e.detail.value
    })
  },
  InputLastLine: function (e) {
    this.setData({
      step4_q6: e.detail.value
    })
  },
  InputLastRanking: function (e) {
    this.setData({
      step4_q7: e.detail.value
    })
  },
  radioChange2(e) {
    this.setData({
      step4_q8: e.detail.value
    })
  },
  radioChange3(e) {
    this.setData({
      step4_q9: e.detail.value
    })
    // let that =this;
    // if (e.detail.value == 2) {
    //   that.setData({
    //     step4_q9_detail: '无'
    //   })
    // }else{
    //   this.setData({
    //     step4_q9_detail: ''
    //   })
    // }
    //  else {
    //   let i = e.detail.value - 110
    //   this.setData({
    //     step2_q4: i
    //   })
    // }
  },
  InputScore: function (e) {
    
    this.setData({
      step4_q9_detail: e.detail.value
    })
   
  },
  radioChange4(e) {
    this.setData({
      step4_q10: e.detail.value
    })
  },
  radioChange5(e) {
    this.setData({
      step4_q11: e.detail.value
    })
  },
  //上一项按钮
  toBackPage() {
    wx.navigateBack({
      delta: 1,
    })
    // ({
    //   url: '/pages/HighstudentInfoThree/index',
    // })
  },
  //提交按钮
  toNextPage() {
    let that = this;
    if (that.data.step4_q1 == '') {
      wx.showToast({
        title: '请输入最近月考总分',
        icon: 'none'
      })
    } else if (that.data.step4_q2 == '') {
      wx.showToast({
        title: '请输入本次考试一本划线',
        icon: 'none'
      })
    } else if (that.data.step4_q3 == '') {
      wx.showToast({
        title: '请输入本次考试年级排名',
        icon: 'none'
      })
    } else if (that.data.step4_q4 == '') {
      wx.showToast({
        title: '请选择本次月考发挥情况',
        icon: 'none'
      })
    } else if (that.data.step4_q5 == '') {
      wx.showToast({
        title: '请输入上次考试总分',
        icon: 'none'
      })
    } else if (that.data.step4_q6 == '') {
      wx.showToast({
        title: '请输入上次考试一本划线',
        icon: 'none'
      })
    } else if (that.data.step4_q7 == '') {
      wx.showToast({
        title: '请输入上次考试年级排名',
        icon: 'none'
      })
    } else if (that.data.step4_q8 == '') {
      wx.showToast({
        title: '请选择上次月考发挥情况',
        icon: 'none'
      })
    } else if (that.data.step4_q9 == '') {
      wx.showToast({
        title: '请选择高考是否符合少数民族等优惠政策加分',
        icon: 'none'
      })
    }
    // else if (that.data.step4_q9 == 1) {
    //   // if(that.data.step4_q9_detail == ''){
    //   //   wx.showToast({
    //   //     title: '请输入符合少数民族等优惠政策加分的具体分值',
    //   //     icon: 'none'
    //   //   })
    //   // }

    // }
    else if (that.data.step4_q10 == '') {
      wx.showToast({
        title: '请输入本人自认为高考能达到的成绩等次',
        icon: 'none'
      })
    } else if (that.data.step4_q11 == '') {
      wx.showToast({
        title: '请输入空军招飞教官现场预判的成绩等次',
        icon: 'none'
      })
    } else {
      if (that.data.step4_q9 == 1) {
        if (that.data.step4_q9_detail == '') {
          wx.showToast({
            title: '请输入符合少数民族等优惠政策加分的具体分值',
            icon: 'none'
          })
        } else {
          console.log('我租了')
          let HighstudentInfo = wx.getStorageSync('HighstudentInfo');
          let url = '/api/high/stage1';
          let params = {
            step1_q1: that.data.HighstudentInfo.step1_q1,
            step1_q2: that.data.HighstudentInfo.step1_q2,
            step1_q3: that.data.HighstudentInfo.step1_q3,
            step1_q4: that.data.HighstudentInfo.step1_q4,
            step1_q5: that.data.HighstudentInfo.step1_q5,
            step1_q6: that.data.HighstudentInfo.step1_q6,
            step1_q7: that.data.HighstudentInfo.step1_q7,
            step1_q8: that.data.HighstudentInfo.step1_q8,
            step1_q9: that.data.HighstudentInfo.step1_q9,
            step1_q10: that.data.HighstudentInfo.step1_q10,
            step1_q11: that.data.HighstudentInfo.step1_q11,
            step1_q12: that.data.HighstudentInfo.step1_q12,
            step1_q13: that.data.HighstudentInfo.step1_q13,
            step1_q14: that.data.HighstudentInfo.step1_q14,
            step1_q15: that.data.HighstudentInfo.step1_q15,
            step1_q16: that.data.HighstudentInfo.step1_q16,
            step1_q17: that.data.HighstudentInfo.step1_q17,
            step1_q18: that.data.HighstudentInfo.step1_q18,
            step2_q1: that.data.HighstudentInfo.step2_q1,
            step2_q2: that.data.HighstudentInfo.step2_q2,
            step2_q3: that.data.HighstudentInfo.step2_q3,
            step2_q4: that.data.HighstudentInfo.step2_q4,
            step2_q5: that.data.HighstudentInfo.step2_q5,
            step2_q6: that.data.HighstudentInfo.step2_q6,
            step2_q7: that.data.HighstudentInfo.step2_q7,
            step2_q8: that.data.HighstudentInfo.step2_q8,
            step2_q9: that.data.HighstudentInfo.step2_q9,
            step3_q1: that.data.HighstudentInfo.step3_q1,
            step3_q2: that.data.HighstudentInfo.step3_q2,
            step4_q1: that.data.step4_q1,
            step4_q2: that.data.step4_q2,
            step4_q3: that.data.step4_q3,
            step4_q4: that.data.step4_q4,
            step4_q5: that.data.step4_q5,
            step4_q6: that.data.step4_q6,
            step4_q7: that.data.step4_q7,
            step4_q8: that.data.step4_q8,
            step4_q9: that.data.step4_q9,
            step4_q9_detail: that.data.step4_q9_detail,
            step4_q10: that.data.step4_q10,
            step4_q11: that.data.step4_q11,
          }
          app.post(url, params).then(r => {
            console.log(r)
          })
          wx.navigateBack({
            delta: 4
          })
        }
      }else {
        console.log('我租了')
        let HighstudentInfo = wx.getStorageSync('HighstudentInfo');
        let url = '/api/high/stage1';
        let params = {
          step1_q1: that.data.HighstudentInfo.step1_q1,
          step1_q2: that.data.HighstudentInfo.step1_q2,
          step1_q3: that.data.HighstudentInfo.step1_q3,
          step1_q4: that.data.HighstudentInfo.step1_q4,
          step1_q5: that.data.HighstudentInfo.step1_q5,
          step1_q6: that.data.HighstudentInfo.step1_q6,
          step1_q7: that.data.HighstudentInfo.step1_q7,
          step1_q8: that.data.HighstudentInfo.step1_q8,
          step1_q9: that.data.HighstudentInfo.step1_q9,
          step1_q10: that.data.HighstudentInfo.step1_q10,
          step1_q11: that.data.HighstudentInfo.step1_q11,
          step1_q12: that.data.HighstudentInfo.step1_q12,
          step1_q13: that.data.HighstudentInfo.step1_q13,
          step1_q14: that.data.HighstudentInfo.step1_q14,
          step1_q15: that.data.HighstudentInfo.step1_q15,
          step1_q16: that.data.HighstudentInfo.step1_q16,
          step1_q17: that.data.HighstudentInfo.step1_q17,
          step1_q18: that.data.HighstudentInfo.step1_q18,
          step2_q1: that.data.HighstudentInfo.step2_q1,
          step2_q2: that.data.HighstudentInfo.step2_q2,
          step2_q3: that.data.HighstudentInfo.step2_q3,
          step2_q4: that.data.HighstudentInfo.step2_q4,
          step2_q5: that.data.HighstudentInfo.step2_q5,
          step2_q6: that.data.HighstudentInfo.step2_q6,
          step2_q7: that.data.HighstudentInfo.step2_q7,
          step2_q8: that.data.HighstudentInfo.step2_q8,
          step2_q9: that.data.HighstudentInfo.step2_q9,
          step3_q1: that.data.HighstudentInfo.step3_q1,
          step3_q2: that.data.HighstudentInfo.step3_q2,
          step4_q1: that.data.step4_q1,
          step4_q2: that.data.step4_q2,
          step4_q3: that.data.step4_q3,
          step4_q4: that.data.step4_q4,
          step4_q5: that.data.step4_q5,
          step4_q6: that.data.step4_q6,
          step4_q7: that.data.step4_q7,
          step4_q8: that.data.step4_q8,
          step4_q9: that.data.step4_q9,
          step4_q9_detail: that.data.step4_q9_detail,
          step4_q10: that.data.step4_q10,
          step4_q11: that.data.step4_q11,
        }
        app.post(url, params).then(r => {
          console.log(r)
        })
        wx.navigateBack({
          delta: 4
        })
      }

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
      if(r.data!=null){
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
        step4_q1: r.data.step4_q1,
        step4_q2: r.data.step4_q2,
        step4_q3: r.data.step4_q3,
        step4_q4: r.data.step4_q4,
        step4_q5: r.data.step4_q5,
        step4_q6: r.data.step4_q6,
        step4_q7: r.data.step4_q7,
        step4_q8: r.data.step4_q8,
        step4_q9: r.data.step4_q9,
        step4_q9_detail: r.data.step4_q9_detail,
        step4_q10: r.data.step4_q10,
        step4_q11: r.data.step4_q11,
        
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
      HighstudentInfo: wx.getStorageSync('HighstudentInfo'),

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