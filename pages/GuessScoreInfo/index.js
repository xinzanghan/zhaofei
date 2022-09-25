// pages/GuessScoreInfo/index.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['物理', '历史', '化学', '政治', '生物', '地理'],
    name1: '',
    name2: '',
    name3: '',
    index: 999,
    idcard: '',//上一页传递的身份证号码
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    q11: '',
    q12: '',
    q13: '',
    q14: '',
    q15: '',
    q16: '',
    subject: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = '/api/high/stage4View';
    let params = wx.getStorageSync('student_token');
    app.post(url, params).then(r => {
      console.log(r)
      if (r.data != null) {
        this.setData({
          q1: r.data.q1,
          q2: r.data.q2,
          q3: r.data.q3,
          q4: r.data.q4,
          q5: r.data.q5,
          q6: r.data.q6,
          q7: r.data.q7,
          q8: r.data.q8,
          q9: r.data.q9,
          q10: r.data.q10,
          q11: r.data.q11,
          q12: r.data.q12,
          q13: r.data.q13,
          q14: r.data.q14,
          q15: r.data.q15,
          q16: r.data.q16,
        })
      }
    })
  },
  bindPickerChange1(e) {
    console.log(e);
    let that = this;
    that.setData({
      name1: that.data.array[e.detail.value]
    })
  },
  bindPickerChange2(e) {
    let that = this;
    that.setData({
      name2: that.data.array[e.detail.value]
    })
  },
  bindPickerChange3(e) {
    let that = this;
    that.setData({
      name3: that.data.array[e.detail.value]
    })
  },
  //页面的input点击事件
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
  InputChineseScore: function (e) {
    this.setData({
      q4: e.detail.value
    })
  },
  InputMathScore: function (e) {
    this.setData({
      q5: e.detail.value
    })
  },
  InputEnglishScore: function (e) {
    this.setData({
      q6: e.detail.value
    })
  },
  InputPhysicsScore(e) {
    this.setData({
      q7: e.detail.value
    })
  },
  InputChymistScore(e) {
    this.setData({
      q8: e.detail.value
    })
  },
  InputBiologyScore(e) {
    this.setData({
      q9: e.detail.value
    })
  },
  InputHistoryScore(e) {
    this.setData({
      q10: e.detail.value
    })
  },
  InputPolityScore(e) {
    this.setData({
      q11: e.detail.value
    })
  },
  InputGeographyScore(e) {
    this.setData({
      q12: e.detail.value
    })
  },


  InputTotalScore: function (e) {
    this.setData({
      q13: e.detail.value
    })
  },
  InputCheapScore: function (e) {
    this.setData({
      q14: e.detail.value
    })
  },
  InputProvince: function (e) {
    this.setData({
      q15: e.detail.value
    })
  },
  InputStudentNum: function (e) {
    this.setData({
      q16: e.detail.value
    })
  },
  //确定按钮
  toHighSchoolIndex() {
    let that = this;
    
    // console.log('woshi')
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
        title: '请输入语文成绩',
        icon: 'none'
      })
    } else if (that.data.q5 == '') {
      wx.showToast({
        title: '请输入数学成绩',
        icon: 'none'
      })
    } else if (that.data.q6 == '') {
      wx.showToast({
        title: '请输入英语成绩',
        icon: 'none'
      })
    }  else if (that.data.q13 == '') {
      wx.showToast({
        title: '请输入总分',
        icon: 'none'
      })
    } else if (that.data.q14 == '') {
      wx.showToast({
        title: '请输入优惠分',
        icon: 'none'
      })
    } else if (that.data.q15 == '') {
      wx.showToast({
        title: '请输入高考省份',
        icon: 'none'
      })
    } else if (that.data.q16 == '') {
      wx.showToast({
        title: '请输入高考考生号',
        icon: 'none'
      })
    } else {
      let list = [];
      
      let that = this;
       if (that.data.q7 != '') {
        list.push(that.data.q7)
      } 
       if (that.data.q8 != '') {
        list.push(that.data.q8)
      } 
       if (that.data.q9 != '') {
        list.push(that.data.q9)
      } 
       if (that.data.q10 != '') { 
        list.push(that.data.q10)
      } 
       if (that.data.q11 != '') {
        list.push(that.data.q11)
      } 
       if (that.data.q12 != '') {
        list.push(that.data.q12)
      }
      if (list.length == 3) {
        console.log(list,'我是刚')
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
            let url = '/api/high/stage4';
            let params = {
              q1: that.data.q1,
              q2: that.data.q2,
              q3: that.data.q3,
              q4: that.data.q4,
              q5: that.data.q5,
              q6: that.data.q6,
              q7: that.data.q7,
              q8: that.data.q8,
              q9: that.data.q9,
              q10: that.data.q10,
              q11: that.data.q11,
              q12: that.data.q12,
              q13: that.data.q13,
              q14: that.data.q14,
              q15: that.data.q15,
              q16: that.data.q16,
            };
            app.post(url, params).then(r => {
              console.log(r)
            })
            wx.redirectTo({
              url: '/pages/HighStudentIndex/index',
            })
          }
        })
      } else {
        wx.showToast({
          title: '请选择三个科目',
          icon:'none'
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
      idcard: wx.getStorageSync('idcard')
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