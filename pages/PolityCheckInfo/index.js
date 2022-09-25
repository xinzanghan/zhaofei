// pages/PolityCheckInfo/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '空军招收飞行学员政治考核', //导航栏 中间的标题
      title1: '调查线索表'
    },
    //此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    array: ['汉族', '蒙古族', '白族', '土家族'], //民族
    index: 88888, //民族默认
    culture: [
    //  { id:1,name:'小学', },
    //  { id:2,name:'初中', },
    //  { id:3,name:'高中', },
    //  { id:4,name:'大专', },
    //  { id:5,name:'本科', }
      '小学',
      '初中', 
      '高中', 
      '大专', 
      '本科',
    ], //文化程度
    id: 9999, //文化程度默认
    marriage: ['未婚', '已婚'], //婚姻状况
    Middle: 2, //判断是否是从初中进入   1是从初中进入 2是从高中进入  默认是高中
    item: 6666, //婚姻状况默认
    q11: [], //户籍所在地区
    q17: [], //经常居住地
    q24: [], //工作所在省/市/区
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
    q24: '',
    q25: '',
    q26: '',
    q27: '',
    q28: '',
    q29: '',
    q30: '',
    q31: '',
  },
  // bindCultureChange(e){
  //   console.log(e)
  // },
  // 选择民族点击事件
  appellation(e) {
    this.setData({
      q1: e.detail.value
    })
  },
  name(e) {
    this.setData({
      q2: e.detail.value
    })
  },
  nation(e) {
    this.setData({
      q3: e.detail.value
    })
  },
  idcard(e) {
    this.setData({
      q4: e.detail.value
    })
  },
  reason(e) {
    this.setData({
      q5: e.detail.value
    })
  },
  native(e) {
    this.setData({
      q6: e.detail.value
    })
  },
  phone(e) {
    this.setData({
      q7: e.detail.value
    })
  },
  politicsStatus(e) {
    this.setData({
      q8: e.detail.value
    })
  },
  //选择文化程度
  bindCultureChange(e) {
    let culture=this.data.culture[e.detail.value]
    console.log(culture)
    this.setData({
      id: e.detail.value,
      q9:culture
    })
  },
  //选择婚姻状况
  bindMarriageChange(e) {
    let marriage  = this.data.marriage[e.detail.value]
    console.log(marriage)
    this.setData({
      item: e.detail.value,
      q10:marriage,
       
    })
  },
  //户籍所在地
  bindRegionChange(e) {
    this.setData({
      q11: e.detail.value
    })
  },
  address(e) {
    this.setData({
      q12: e.detail.value
    })
  },
  police(e) {
    this.setData({
      q13: e.detail.value
    })
  },
  court(e) {
    this.setData({
      q14: e.detail.value
    })
  },
  procuratorate(e) {
    this.setData({
      q15: e.detail.value
    })
  },
  village(e) {
    this.setData({
      q16: e.detail.value
    })
  },
  //经常居住地区
  bindLiveCity(e) {
    this.setData({
      q17: e.detail.value
    })
  },
  address1(e) {
    this.setData({
      q18: e.detail.value
    })
  },
  police1(e) {
    this.setData({
      q19: e.detail.value
    })
  },
  court1(e) {
    this.setData({
      q20: e.detail.value
    })
  },
  procuratorate1(e) {
    this.setData({
      q21: e.detail.value
    })
  },
  village1(e) {
    this.setData({
      q22: e.detail.value
    })
  },
  civilServant(e) {
    this.setData({
      q23: e.detail.value
    })
  },
  //选择工作所在省/市/区
  bindWorkCity(e) {
    this.setData({
      q24: e.detail.value
    })
  },
  workAddress(e) {
    this.setData({
      q25: e.detail.value
    })
  },
  workName(e) {
    this.setData({
      q26: e.detail.value
    })
  },
  job(e) {
    this.setData({
      q27: e.detail.value
    })
  },
  leader(e) {
    this.setData({
      q28: e.detail.value
    })
  },
  leaderJob(e) {
    this.setData({
      q29: e.detail.value
    })
  },
  leaderPhone(e) {
    this.setData({
      q30: e.detail.value
    })
  },
  remark(e) {
    this.setData({
      q31: e.detail.value
    })
  },

  //提交按钮
  submit() {
    let that = this;
    that.setData({
      q9: parseInt(this.data.id) + 1,
      q10: parseInt(this.data.item) + 1
    })
    if (that.data.q1 == '') {
      wx.showToast({
        title: '请填写称谓',
        icon: 'none'
      })
    } else if (that.data.q2 == '') {
      wx.showToast({
        title: '请填写姓名',
        icon: 'none'
      })
    } else if (that.data.q3 == '') {
      wx.showToast({
        title: '请填写民族',
        icon: 'none'
      })
    } else if (that.data.q4 == '') {
      wx.showToast({
        title: '请填写身份证号',
        icon: 'none'
      })
    } else if (that.data.q5 == '') {
      wx.showToast({
        title: '请填写如已故去世原因',
        icon: 'none'
      })
    } else if (that.data.q6 == '') {
      wx.showToast({
        title: '请填写籍贯',
        icon: 'none'
      })
    } else if (that.data.q7 == '') {
      wx.showToast({
        title: '请填写联系电话',
        icon: 'none'
      })
    } else if (that.data.q8 == '') {
      wx.showToast({
        title: '请填写政治面貌',
        icon: 'none'
      })
    } else if (that.data.q9 == '') {
      wx.showToast({
        title: '请填写文化程度',
        icon: 'none'
      })
    } else if (that.data.q10 == '') {
      wx.showToast({
        title: '请填写婚姻状况',
        icon: 'none'
      })
    } else if (that.data.q11 == '') {
      wx.showToast({
        title: '请填写户籍所在地省/市/区',
        icon: 'none'
      })
    } else if (that.data.q12 == '') {
      wx.showToast({
        title: '请填写户籍详细地址',
        icon: 'none'
      })
    } else if (that.data.q13 == '') {
      wx.showToast({
        title: '请填写户籍所在地派出所',
        icon: 'none'
      })
    } else if (that.data.q14 == '') {
      wx.showToast({
        title: '请填写户籍所在地法院',
        icon: 'none'
      })
    } else if (that.data.q15 == '') {
      wx.showToast({
        title: '请填写户籍所在地检察院',
        icon: 'none'
      })
    } else if (that.data.q16 == '') {
      wx.showToast({
        title: '请填写户籍所在地村委会',
        icon: 'none'
      })
    } else if (that.data.q17 == '') {
      wx.showToast({
        title: '请填写经常居住地所在省/市/区',
        icon: 'none'
      })
    } else if (that.data.q18 == '') {
      wx.showToast({
        title: '请填写经常居住地所在省/请填写经常居住地详细地址/区',
        icon: 'none'
      })
    } else if (that.data.q19 == '') {
      wx.showToast({
        title: '请填写经常居住地派出所',
        icon: 'none'
      })
    } else if (that.data.q20 == '') {
      wx.showToast({
        title: '请填写经常居住地法院',
        icon: 'none'
      })
    } else if (that.data.q21 == '') {
      wx.showToast({
        title: '请填写经常居住地检察院',
        icon: 'none'
      })
    } else if (that.data.q22 == '') {
      wx.showToast({
        title: '请填写经常居住地村委会',
        icon: 'none'
      })
    } else if (that.data.q23 == '') {
      wx.showToast({
        title: '请填写是否为公务员',
        icon: 'none'
      })
    } else if (that.data.q24 == '') {
      wx.showToast({
        title: '请填写工作单位所在省/市/区',
        icon: 'none'
      })
    } else if (that.data.q25 == '') {
      wx.showToast({
        title: '请填写工作单位详细地址',
        icon: 'none'
      })
    } else if (that.data.q26 == '') {
      wx.showToast({
        title: '请填写工作单位名称',
        icon: 'none'
      })
    } else if (that.data.q27 == '') {
      wx.showToast({
        title: '请填写本人职务',
        icon: 'none'
      })
    } else if (that.data.q28 == '') {
      wx.showToast({
        title: '请填写上级领导姓名',
        icon: 'none'
      })
    } else if (that.data.q29 == '') {
      wx.showToast({
        title: '请填写上级领导姓名职务',
        icon: 'none'
      })
    } else if (that.data.q30 == '') {
      wx.showToast({
        title: '请填写上级领导电话',
        icon: 'none'
      })
    } else if (that.data.q31 == '') {
      wx.showToast({
        title: '请填写上级领导姓名职务',
        icon: 'none'
      })
    } else {
      let phone = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/;
      if (!phone.test(this.data.q7)) {
        wx.showToast({
          title: '请输入正确的手机号',
          icon: 'none'
        })
      } else if (!phone.test(this.data.q30)) {
        wx.showToast({
          title: '请输入正确的手机号',
          icon: 'none'
        })
      } else {
        if (that.data.Middle == 1) {
          let url = '/api/middle/stage4';
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
            q24: that.data.q24,
            q25: that.data.q25,
            q26: that.data.q26,
            q27: that.data.q27,
            q28: that.data.q28,
            q29: that.data.q29,
            q30: that.data.q30,
            q31: that.data.q31,
          }
          app.post(url, params).then(r => {
            console.log(r)
          })
          wx.navigateBack({
            delta: 1,
          })
        } else {
          let url = '/api/high/stage6';
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
            q24: that.data.q24,
            q25: that.data.q25,
            q26: that.data.q26,
            q27: that.data.q27,
            q28: that.data.q28,
            q29: that.data.q29,
            q30: that.data.q30,
            q31: that.data.q31,
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
    if (that.data.Middle != 1) {
      let url = '/api/high/stage6View';
      let params = wx.getStorageSync('student_token');
      app.post(url, params).then(r => {
        console.log(r)

        if (r.data != null) {
          let q11 = r.data.q11.split(",");
          let q17 = r.data.q17.split(",");
          let q24 = r.data.q24.split(",");
          if(r.data.q9){
            var q9=that.data.culture[r.data.q9-1];
           
          }
          if(r.data.q10){
            var q10=that.data.marriage[r.data.q10-1];

          }
          this.setData({
            q1: r.data.q1,
            q2: r.data.q2,
            q3: r.data.q3,
            q4: r.data.q4,
            q5: r.data.q5,
            q6: r.data.q6,
            q7: r.data.q7,
            q8: r.data.q8,
            q9,
            q10,
            q11,
            q12: r.data.q12,
            q13: r.data.q13,
            q14: r.data.q14,
            q15: r.data.q15,
            q16: r.data.q16,
            q17,
            q18: r.data.q18,
            q19: r.data.q19,
            q20: r.data.q20,
            q21: r.data.q21,
            q22: r.data.q22,
            q23: r.data.q23,
            q24,
            q25: r.data.q25,
            q26: r.data.q26,
            q27: r.data.q27,
            q28: r.data.q28,
            q29: r.data.q29,
            q30: r.data.q30,
            q31: r.data.q31,
          })
        }
      })
    } else {
      let url = '/api/Middle/stage4View';
      let params = wx.getStorageSync('student_token');
      app.post(url, params).then(r => {
        console.log(r)

        if (r.data != null) {
          let q11 = r.data.q11.split(",");
          let q17 = r.data.q17.split(",");
          let q24 = r.data.q24.split(",");
          if(r.data.q9){
            var q9=that.data.culture[r.data.q9-1];
           
          }
          if(r.data.q10){
            var q10=that.data.marriage[r.data.q10-1];

          }
          this.setData({
            q1: r.data.q1,
            q2: r.data.q2,
            q3: r.data.q3,
            q4: r.data.q4,
            q5: r.data.q5,
            q6: r.data.q6,
            q7: r.data.q7,
            q8: r.data.q8,
            q9,
            q10,
            q11,
            q12: r.data.q12,
            q13: r.data.q13,
            q14: r.data.q14,
            q15: r.data.q15,
            q16: r.data.q16,
            q17,
            q18: r.data.q18,
            q19: r.data.q19,
            q20: r.data.q20,
            q21: r.data.q21,
            q22: r.data.q22,
            q23: r.data.q23,
            q24,
            q25: r.data.q25,
            q26: r.data.q26,
            q27: r.data.q27,
            q28: r.data.q28,
            q29: r.data.q29,
            q30: r.data.q30,
            q31: r.data.q31,
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