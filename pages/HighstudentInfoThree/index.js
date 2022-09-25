// pages/HighstudentInfoThree/index.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { value:'1',name: '兼报民航'},
      { value:'2',name: '兼报海军'},
      { value:'3',name: '无兼报' },
    ],            //注意事项2
    itemss: [
      { value:'1',name: '父母（老师、同学）建议报考，我只是来试试' },
      { value:'2',name: '如果有更好的选择，我可能会放弃当空军飞行员', },
      { value:'3',name: '我只想报考清华、北大、北航“双学籍”飞行学员' },
      { value:'4',name: '我的梦想就是成为空军飞行员' },
    ],            //注意事项1
    step3_q1:[],
    step3_q2:'',
    HighstudentInfo:{},//初选合格提交信息 存储信息的数组
    jianzhi:[],//存储
  },

   // 注意事项1单选按钮
  //  radioChange: function (e) {
  //    console.log(e.detail.value)
  //   this.setData({
  //     step3_q1:e.detail.value
  //   })
  // },
  checkboxChange(e) {
    let that = this;
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    let list = [];
    list = e.detail.value;
    that.setData({
      step3_q1:list
    })
    // const list1 = this.data.items
    // const values = e.detail.value
    // for (let i = 0; i < list1.length; i++) {
    //   Items[i].checked = false

    //   for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
    //     if (Items[i].value === values[j]) {
    //       Items[i].checked = true
    //       break
    //     }
    //   }
    // }

    // this.setData({
    //   items:Items
    // })
    // console.log(Items)
  },
  // 注意事项1单选按钮
  radioChanged: function (e) {
    this.setData({
      step3_q2:e.detail.value
    })
  },
  //上一项按钮
  toBackPage(){
    wx.navigateBack({
      delta: 1,
    })
    // ({
    //   url: '/pages/HighstudentInfoTwo/index',
    // })
  },
  //下一项按钮
  toNextPage(){
    let that=this;
    // let list = that.data.step3_q1.toString();
    
    // console.log(list,'高继凯')
    if(that.data.step3_q1 == ''){
      wx.showToast({
        title: '请选择是否兼报民航、海军招飞',
        icon: 'none'
      })
    }else if(that.data.step3_q2 == ''){
      wx.showToast({
        title: '请选择本人报考意愿',
        icon: 'none'
      })
    }else{
      let HighstudentInfo=wx.getStorageSync('HighstudentInfo');
      let list = that.data.step3_q1;

        HighstudentInfo.step3_q1=list.toString();
        console.log(list,'高继凯')
        HighstudentInfo.step3_q2=that.data.step3_q2;
        wx.setStorageSync('HighstudentInfo', HighstudentInfo)
        wx.navigateTo({
          url: '/pages/HighstudentInfoFour/index',
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
      if(r.data!=null){
      let items = that.data.items;
     let array= r.data.step3_q1.split(',')
      for(let i in array){
        for (let j = 0; j < items.length; j++) {
          if (array[i]==items[j].value) {
            items[j].checked=true
          }
        }
      }
      console.log(items)
      that.setData({
        items
      })

      this.setData({
        step3_q1: r.data.step3_q1,
        step3_q2: r.data.step3_q2,
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
    let that=this;
    that.setData({
      HighstudentInfo:wx.getStorageSync('HighstudentInfo')
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