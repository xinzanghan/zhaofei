// pages/PolityInfo/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //组件所需的参数
    navbarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '空军招收飞行学员政治考核', //导航栏 中间的标题
      title1: '个人信息表'
    },
    //此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    Middle: 2, //判断是否是从初中进入   1是从初中进入 2是从高中进入  默认是高中
    array: [], //性别
    index: 88888, //性别默认
    q5: [], //地区
    q11: [], //学生经常居住地区
    q16: [], //高三学校所在地区
    q19: [], //复读学校所在地区
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
    q17: '',
    q18: '',
    q19: '',
    q20: '',
    q21: '',
    q22: '',
    q23: '',
  },
  politics(e) {
    this.setData({
      q1: e.detail.value
    })
  },
  studentName(e) {
    this.setData({
      q2: e.detail.value
    })
  },
  //选择性别
  sex(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      q3: e.detail.value
    })
  },
  place(e) {
    this.setData({
      q4: e.detail.value
    })
  },
  //选择所在地区
  bindRegionChange: function (e) {
    this.setData({
      q5: e.detail.value
    })
  },
  police(e) {
    this.setData({
      q6: e.detail.value
    })
  },
  court(e) {
    this.setData({
      q7: e.detail.value
    })
  },
  procuratorate(e) {
    this.setData({
      q8: e.detail.value
    })
  },
  village(e) {
    this.setData({
      q9: e.detail.value
    })
  },
  live(e) {
    this.setData({
      q10: e.detail.value
    })
  },
  //选择学生经常居住地区
  bindcityChange(e) {
    this.setData({
      q11: e.detail.value
    })
  },
  procuratorate1(e) {
    this.setData({
      q12: e.detail.value
    })
  },
  village1(e) {
    this.setData({
      q13: e.detail.value
    })
  },
  graduate(e) {
    this.setData({
      q14: e.detail.value
    })
  },
  type(e) {
    this.setData({
      q15: e.detail.value
    })
  },

  //选择高三所在学校地区
  bindSchoolCityChange(e) {
    this.setData({
      q16: e.detail.value
    })
  },
  teacherName(e) {
    this.setData({
      q17: e.detail.value
    })
  },
  teacherPhone(e) {
    this.setData({
      q18: e.detail.value
    })
  },
  bindAgainSchoolChange(e) {
    this.setData({
      q19: e.detail.value
    })
  },
  againSchool(e) {
    this.setData({
      q20: e.detail.value
    })
  },
  againSchoolTeacher(e) {
    this.setData({
      q21: e.detail.value
    })
  },
  againSchoolTeacherPhone(e) {
    this.setData({
      q22: e.detail.value
    })
  },
  remark(e) {
    this.setData({
      q23: e.detail.value
    })
  },
  //提交
  submit() {
    let that = this;
    if (that.data.q1 == '') {
      wx.showToast({
        title: '请填写政考编号',
        icon: 'none'
      })
    } else if (that.data.q2 == '') {
      wx.showToast({
        title: '请填写考生姓名',
        icon: 'none'
      })
    } else if (that.data.q3 == '') {
      wx.showToast({
        title: '请填写性别',
        icon: 'none'
      })
    } else if (that.data.q4 == '') {
      wx.showToast({
        title: '请填写参选初选地',
        icon: 'none'
      })
    } else if (that.data.q5 == '') {
      wx.showToast({
        title: '请填写学生户籍所在地省/市/区',
        icon: 'none'
      })
    } else if (that.data.q6 == '') {
      wx.showToast({
        title: '请填写学生户籍所在地派出所',
        icon: 'none'
      })
    } else if (that.data.q7 == '') {
      wx.showToast({
        title: '请填写学生户籍所在地法院',
        icon: 'none'
      })
    } else if (that.data.q8 == '') {
      wx.showToast({
        title: '请填写学生户籍所在地检察院',
        icon: 'none'
      })
    } else if (that.data.q9 == '') {
      wx.showToast({
        title: '请填写学生户籍地所在村委会',
        icon: 'none'
      })
    } else if (that.data.q10 == '') {
      wx.showToast({
        title: '请填写学生经常居住详细地址',
        icon: 'none'
      })
    } else if (that.data.q11 == '') {
      wx.showToast({
        title: '请填写学生经常居住所在省/市/区',
        icon: 'none'
      })
    } else if (that.data.q12 == '') {
      wx.showToast({
        title: '请填写学生经常居住地所在的检察院',
        icon: 'none'
      })
    } else if (that.data.q13 == '') {
      wx.showToast({
        title: '请填写学生经常居住地所在的村委会',
        icon: 'none'
      })
    } else if (that.data.q14 == '') {
      wx.showToast({
        title: '请填写是否为毕业生',
        icon: 'none'
      })
    } else if (that.data.q15 == '') {
      wx.showToast({
        title: '请填写文/理科',
        icon: 'none'
      })
    } else if (that.data.q16 == '') {
      wx.showToast({
        title: '请填写高三学校所在省/市/区',
        icon: 'none'
      })
    } else if (that.data.q17 == '') {
      wx.showToast({
        title: '请填写高三班任姓名',
        icon: 'none'
      })
    } else if (that.data.q18 == '') {
      wx.showToast({
        title: '请填写高三班任电话',
        icon: 'none'
      })
    } else if (that.data.q19 == '') {
      wx.showToast({
        title: '请填写复读学校所在省/市/区',
        icon: 'none'
      })
    } else if (that.data.q20 == '') {
      wx.showToast({
        title: '请填写复读学校',
        icon: 'none'
      })
    } else if (that.data.q21 == '') {
      wx.showToast({
        title: '请填写复读学校班主任姓名',
        icon: 'none'
      })
    } else if (that.data.q22 == '') {
      wx.showToast({
        title: '请填写复读学校班主任电话',
        icon: 'none'
      })
    } else if (that.data.q23 == '') {
      wx.showToast({
        title: '请填写备注',
        icon: 'none'
      })
    } else {
      let phone = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/;
      if (!phone.test(this.data.q18)) {
        wx.showToast({
          title: '请输入正确的手机号',
          icon: 'none'
        })
      } else if (!phone.test(this.data.q22)) {
        wx.showToast({
          title: '请输入正确的手机号',
          icon: 'none'
        })
      } else {
        if (that.data.Middle == 1) {
          let url = '/api/middle/stage3';
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
            q17: that.data.q17,
            q18: that.data.q18,
            q19: that.data.q19,
            q20: that.data.q20,
            q21: that.data.q21,
            q22: that.data.q22,
            q23: that.data.q23,
          }
          app.post(url, params).then(r => {
            console.log(r)
          })
          wx.navigateBack({
            delta: 1,
          })
        } else {
          let url = '/api/high/stage5';
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
            q17: that.data.q17,
            q18: that.data.q18,
            q19: that.data.q19,
            q20: that.data.q20,
            q21: that.data.q21,
            q22: that.data.q22,
            q23: that.data.q23,
          }
          app.post(url, params).then(r => {
            console.log(r)
          })
          wx.navigateBack({
              delta: 1,
            })
        }



      }
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    if (options.Middle) {
      that.setData({
        Middle: options.Middle
      })
    }
    console.log(that.data.Middle, '高继凯')
   if(that.data.Middle!=1){
    let url = '/api/high/stage5View';
    let params = wx.getStorageSync('student_token');
    app.post(url, params).then(r => {
      console.log(r)
      
      if (r.data != null) {
      let q5=r.data.q5.split(",");
      let q11=r.data.q11.split(",");
      let q16=r.data.q16.split(",");
      let q19=r.data.q19.split(",");
        this.setData({
          q1: r.data.q1,
          q2: r.data.q2,
          q3: r.data.q3,
          q4: r.data.q4,
          q5,
          q6: r.data.q6,
          q7: r.data.q7,
          q8: r.data.q8,
          q9: r.data.q9,
          q10: r.data.q10,
          q11,
          q12: r.data.q12,
          q13: r.data.q13,
          q14: r.data.q14,
          q15: r.data.q15,
          q16,
          q17: r.data.q17,
          q18: r.data.q18,
          q19,
          q20: r.data.q20,
          q21: r.data.q21,
          q22: r.data.q22,
          q23: r.data.q23,
        })
      }
    })
   }else{
    let url = '/api/Middle/stage3View';
    let params = wx.getStorageSync('student_token');
    app.post(url, params).then(r => {
      console.log(r)
     
      if (r.data != null) { 
        let q5=r.data.q5.split(",");
      let q11=r.data.q11.split(",");
      let q16=r.data.q16.split(",");
      let q19=r.data.q19.split(",");
        this.setData({
          q1: r.data.q1,
          q2: r.data.q2,
          q3: r.data.q3,
          q4: r.data.q4,
          q5,
          q6: r.data.q6,
          q7: r.data.q7,
          q8: r.data.q8,
          q9: r.data.q9,
          q10: r.data.q10,
          q11,
          q12: r.data.q12,
          q13: r.data.q13,
          q14: r.data.q14,
          q15: r.data.q15,
          q16,
          q17: r.data.q17,
          q18: r.data.q18,
          q19,
          q20: r.data.q20,
          q21: r.data.q21,
          q22: r.data.q22,
          q23: r.data.q23,
        })
      }
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