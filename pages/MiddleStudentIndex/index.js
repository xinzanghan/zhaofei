// pages/MiddleStudentIndex/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stage1_status: '', //基本信息填报状态  0是没有填报  1是已填报  
    stage2_status: '',//初选合格3日内填报
    stage3_status: '',//政治考核个人信息填报
    stage4_status: '',//政治考核调查线索填报
    student_token: '', //学生token
  },
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
  status(){
    let that=this;
    let url = '/api/middle/index';
    app.post(url, {}).then(r => {
      that.setData({
        stage1_status: r.data.stage1_status,
        stage2_status: r.data.stage2_status,
        stage3_status: r.data.stage3_status,
        stage4_status: r.data.stage4_status,
      })
    })
  },
  //跳转基本信息填报
  toBaseInfo() {
    let that = this;
    if (that.data.stage1_status == '0'||that.data.stage1_status == '1') {
      wx.navigateTo({
        url: '../BaseInfo/index',
      })
    }else{
      wx.showToast({
        title: '基本信息表已填报',
        icon:'none'
      })
    } 
    // })
  },
  //跳转到初选合格填报
  toQualified() {
    let that = this;
    if (that.data.stage1_status == '1'|| that.data.stage2_status =='1') {
      wx.navigateTo({
        url: '../Qualified/index',
      })
    }else if(that.data.stage2_status == '1'){
      wx.showToast({
        title: '初选合格3日内已填报',
        icon:'none'
      })
    }  else {
      wx.showToast({
        title: '请按顺序填报',
        icon:'none'
      })
    }
    // })
  },
  //跳转至政审信息表
  // toPolityInfo() {
  //   let that = this;
  //   if (that.data.stage2_status == '1'&&that.data.stage3_status == '0') {
  //     wx.navigateTo({
  //       url: '../PolityInfo/index?Middle=' + 1,
  //     })
  //   }else if(that.data.stage3_status == '1'){
  //     wx.showToast({
  //       title: '政治考核个人信息表已填报',
  //       icon:'none'
  //     })
  //   } else {
  //     wx.showToast({
  //       title: '请按顺序填报',
  //       icon: 'none'
  //     })
  //   }
  // },
  toPolityInfo() {
    let that = this;
    if (that.data.stage3_status == '0'||that.data.stage3_status == '1') {
      wx.navigateTo({
        url: '../PolityInfo/index?Middle=' + 1,
      })
    }else{
      wx.showToast({
        title: '政治考核个人信息表已填报',
        icon:'none'
      })
    } 
  },
  //跳转至政治调查线索填报
  // toPolityCheckInfo() {
  //   let that = this;
  //   if (that.data.stage3_status == '1'&&that.data.stage4_status == '0') {
  //     wx.navigateTo({
  //       url: '../PolityCheckInfo/index?Middle=' + 1,
  //     })
  //   }else if(that.data.stage4_status == '1'){
  //     wx.showToast({
  //       title: '政治考核调查线索表已填报',
  //       icon:'none'
  //     })
  //   } else {
  //     wx.showToast({
  //       title: '请按顺序填报',
  //       icon: 'none'
  //     })
  //   }
  // },
  toPolityCheckInfo() {
    let that = this;
    if (that.data.stage4_status == '0'||that.data.stage4_status == '1') {
      wx.navigateTo({
        url: '../PolityCheckInfo/index?Middle=' + 1,
      })
    }else{
      wx.showToast({
        title: '政治考核调查线索表已填报',
        icon:'none'
      })
    } 
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */


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