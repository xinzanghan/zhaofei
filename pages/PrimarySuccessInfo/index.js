// pages/PrimarySuccessInfo/index.js
// 获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { value: '1', name: '超一本100分以上' },
      { value: '2', name: '超一本30分以上'},
      { value: '3', name: '刚够一本' },
      { value: '4', name: '一本偏下' },
    ],            //注意事项2
    kinds: [
      { value: '1', name: '艺术类考生' },
      { value: '2', name: '体育类考生'},
      { value: '3', name: '否' },
    ],            //考试发挥情况
    idcard: '',     //缓存中的身份证号码
    step1_q1: '',
    step1_q2: '',
    step1_q3: '',
    step1_q4: '',
    step1_q5: '',
    step1_q6: '',
    step1_q7: '',
    step1_q8: '',
    step1_q9: '',
    step1_q10: '',
    step1_q11: '',
  },
  //页面中所有input输入框的点击事件
  InputBiaohao: function (e) {
    this.setData({
      step1_q1: e.detail.value
    })
  },
  InputReading: function (e) {
    this.setData({
      step1_q2: e.detail.value
    })
  },
  InputName: function (e) {
    this.setData({
      step1_q3: e.detail.value
    })
  },
  InputStableRanking: function (e) {
    this.setData({
      step1_q4: e.detail.value
    })
  },

  InputForecastRanking: function (e) {
    this.setData({
      step1_q5: e.detail.value
    })
  },
  radioChange1(e) {
    this.setData({
      step1_q6: e.detail.value
    })
  },
  
  radioChange2(e) {
    this.setData({
      step1_q7: e.detail.value
    })
  },

  InputOneNum: function (e) {
    this.setData({
      step1_q8: e.detail.value
    })
  },
  InputAttendRate: function (e) {
    this.setData({
      step1_q9: e.detail.value
    })
  },
  InputNum: function (e) {
    this.setData({
      step1_q10: e.detail.value
    })
  },
  InputForecastNum: function (e) {
    this.setData({
      step1_q11: e.detail.value
    })
  },
  //下一页按钮
  toNextPage() {
    let that = this;
    if (that.data.step1_q1 == '') {
      wx.showToast({
        title: '请输入初选合格证编号',
        icon: 'none'
      })
    } else if (that.data.step1_q2 == '') {
      wx.showToast({
        title: '请输入就读学校名称',
        icon: 'none'
      })
    } else if (that.data.step1_q3 == '') {
      wx.showToast({
        title: '请输入学生姓名',
        icon: 'none'
      })
    } else if (that.data.step1_q4 == '') {
      wx.showToast({
        title: '请输入本人在班级排名稳定在前多少名',
        icon: 'none'
      })
    } else if (that.data.step1_q5 == '') {
      wx.showToast({
        title: '请选择班主任预估班级前多少名能考上一本',
        icon: 'none'
      })
    } else if (that.data.step1_q6 == '') {
      wx.showToast({
        title: '请输入班主任预估你高考成绩等次',
        icon: 'none'
      })
    } else if (that.data.step1_q7 == '') {
      wx.showToast({
        title: '请选择本人是否为艺术、体育类考生',
        icon: 'none'
      })
    } else if (that.data.step1_q8 == '') {
      wx.showToast({
        title: '请输入学校上届高三考取一本人数',
        icon: 'none'
      })
    } else if (that.data.step1_q9 == '') {
      wx.showToast({
        title: '请输入学校上届高三一本升学率',
        icon: 'none'
      })
    } else if (that.data.step1_q10 == '') {
      wx.showToast({
        title: '请输入学校本届高三人数',
        icon: 'none'
      })
    } else if (that.data.step1_q11 == '') {
      wx.showToast({
        title: '请输入学校预估本届高三能考一本人数',
        icon: 'none'
      })
    } else {
      let that = this;
      let url = '/api/high/stage1Base';
      app.post(url, {}).then(r => {
        console.log(r)
        if (that.data.step1_q1 != r.data.step1_q1) {
          wx.showToast({
            title: '初选合格证编号与之前填写不一致',
            icon: 'none'
          })
        } else if (that.data.step1_q2 != r.data.step1_q2) {
          wx.showToast({
            title: '就读学校名称与之前填写不一致',
            icon: 'none'
          })
        } else if (that.data.step1_q3 != r.data.step1_q3) {
          wx.showToast({
            title: '姓名与之前填写不一致',
            icon: 'none'
          })
        } else {
          let PrimarySuccessInfo = {};
          PrimarySuccessInfo.step1_q1 = that.data.step1_q1;
          PrimarySuccessInfo.step1_q2 = that.data.step1_q2;
          PrimarySuccessInfo.step1_q3 = that.data.step1_q3;
          PrimarySuccessInfo.step1_q4 = that.data.step1_q4;
          PrimarySuccessInfo.step1_q5 = that.data.step1_q5;
          PrimarySuccessInfo.step1_q6 = that.data.step1_q6;
          PrimarySuccessInfo.step1_q7 = that.data.step1_q7;
          PrimarySuccessInfo.step1_q8 = that.data.step1_q8;
          PrimarySuccessInfo.step1_q9 = that.data.step1_q9;
          PrimarySuccessInfo.step1_q10 = that.data.step1_q10;
          PrimarySuccessInfo.step1_q11 = that.data.step1_q11;
          wx.setStorageSync('PrimarySuccessInfo', PrimarySuccessInfo)

          wx.navigateTo({
            url: '/pages/PrimarySuccessInfoTwo/index',
          })
        }
      })
    }
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
          step1_q1: r.data.step1_q1,
          step1_q2: r.data.step1_q2,
          step1_q3: r.data.step1_q3,
          step1_q4: r.data.step1_q4,
          step1_q5: r.data.step1_q5,
          step1_q6: r.data.step1_q6,
          step1_q7: r.data.step1_q7,
          step1_q8: r.data.step1_q8,
          step1_q9: r.data.step1_q9,
          step1_q10: r.data.step1_q10,
          step1_q11: r.data.step1_q11,
         
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
    let idcard = wx.getStorageSync('idcard');
    this.setData({
      idcard: idcard
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