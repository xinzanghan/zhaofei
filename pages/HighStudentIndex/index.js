// pages/HighStudentIndex/index.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stage1_status: '', //0:可以进行填报 , 1：已填报完成，不能再点进去
    stage2_status: '',
    stage3_status: '',
    stage4_status: '',
    stage5_status: '',
    stage6_status: '',
    student_token: '',//学生token
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this;
    let student_token = wx.getStorageSync('student_token')
    that.setData({
      student_token: student_token
    })
   setTimeout(()=>{
      that.status();
   },200)
  },
  //获取状态
  status() {
    let that = this;
    let url = '/api/high/index';
    app.post(url, {}).then(r => {
      that.setData({
        stage1_status: r.data.stage1_status,
        stage2_status: r.data.stage2_status,
        stage3_status: r.data.stage3_status,
        stage4_status: r.data.stage4_status,
        stage5_status: r.data.stage5_status,
        stage6_status: r.data.stage6_status,
      })
    })
  },
  //页面跳转事件 去基本信息填报
  toHighstudentInfo(e) {
    let that = this;
    if (that.data.stage1_status == '0'||that.data.stage1_status == '1' ) {
      wx.navigateTo({
        url: '/pages/HighstudentInfo/index',
      })
    }else{
      wx.showToast({
        title: '基本信息已填报',
        icon:'none'
      })
    }
  },
  //页面跳转事件 去初选合格3日内填报
  toPrimarySuccessInfo() {
    let that = this;
    if (that.data.stage1_status == '1' || that.data.stage2_status == '1') {
      wx.navigateTo({
        url: '/pages/PrimarySuccessInfo/index',
      })
    }else if(that.data.stage2_status=='1'){
      wx.showToast({
        title: '初选合格表格已填报',
        icon:'none'
      })
    }else {
      wx.showToast({
        title: '请按顺序进行填报',
        icon: 'none'
      })
    }
  },
  //页面跳转事件 去参检后续填报
  toJoinedInfo() {
    let that = this;
    if (that.data.stage2_status == '1' || that.data.stage3_status == '1') {
      wx.navigateTo({
        url: '/pages/JoinedInfo/index',
      })
    }else if(that.data.stage3_status=='1'){
      wx.showToast({
        title: '参检后续表格已填报',
        icon:'none'
      })
    } else {
      wx.showToast({
        title: '请按顺序进行填报',
        icon: 'none'
      })
    }
  },
  //页面跳转事件 去高考估分填报
  toGuessScoreInfo() {
    let that = this;
    if (that.data.stage3_status == '1' || that.data.stage4_status == '1') {
      wx.navigateTo({
        url: '/pages/GuessScoreInfo/index',
      })
    }else if(that.data.stage4_status=='1'){
      wx.showToast({
        title: '高考估分表已填报',
        icon:'none'
      })
    }else {
      wx.showToast({
        title: '请按顺序进行填报',
        icon: 'none'
      })
    }
  },
  //页面跳转事件 去政治考核个人信息填报
  // toPolityInfo() {
  //   let that = this;
  //   if (that.data.stage4_status == '1' && that.data.stage5_status == '0') {
  //     wx.navigateTo({
  //       url: '/pages/PolityInfo/index',
  //     })
  //   }else if(that.data.stage5_status=='1'){
  //     wx.showToast({
  //       title: '政治考核个人信息表已填报',
  //       icon:'none'
  //     })
  //   } else {
  //     wx.showToast({
  //       title: '请按顺序进行填报',
  //       icon: 'none'
  //     })
  //   }
  // },
  toPolityInfo() {
    let that = this;
    if ( that.data.stage5_status == '0'||that.data.stage5_status == '1' ) {
      wx.navigateTo({
        url: '/pages/PolityInfo/index',
      })
    }else {
      wx.showToast({
        title: '政治考核个人信息表已填报',
        icon:'none'
      })
    }
  },
  //页面跳转事件 去政治考核调查线索填表
  // toPolityCheckInfo() {
  //   let that = this;
  //   if (that.data.stage5_status == '1' && that.data.stage6_status == '0') {
  //     wx.navigateTo({
  //       url: '/pages/PolityCheckInfo/index',
  //     })
  //   }else if(that.data.stage6_status=='1'){
  //     wx.showToast({
  //       title: '政治考核调查线索表已填报',
  //       icon:'none'
  //     })
  //   } else {
  //     wx.showToast({
  //       title: '请按顺序进行填报',
  //       icon: 'none'
  //     })
  //   }
  // },
  toPolityCheckInfo() {
    let that = this;
    if ( that.data.stage6_status == '0'||that.data.stage6_status=='1') {
      wx.navigateTo({
        url: '/pages/PolityCheckInfo/index',
      })
    }else {
      wx.showToast({
        title: '政治考核调查线索表已填报',
        icon:'none'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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