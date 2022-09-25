// pages/MiddleSchool/index.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    education: '2',
    idcard: '',//身份证号
    password: '',//密码
    student_token:''
    
  },
   /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  //跳转至初中生信息登记首页
  toMiddleStudentIndex() {
    // wx.navigateTo({
    //   url: '../MiddleStudentIndex/index?Middle=' + 1,

    // })
    wx.redirectTo({
      url: '../MiddleStudentIndex/index?Middle=' + 1,
    })

  },
  //跳转至修改密码页面
  toChangePassword() {
    wx.navigateTo({
      url: '/pages/ChangePassword/index',
    })
  },

  //获取身份证号码 输入框的值 触发的事件
  onInputIdNum(e) {
    let that=this;
    // console.log(e.detail.value)
    
    this.setData({
      idcard: e.detail.value
    })
  },

  onInputIdCode(e) {
    // console.log(e.detail.value)
    this.setData({
      password: e.detail.value
    })
  },


  

  toMiddleStudentIndex(e) {
    let that=this;
    // console.log(this.data.idNum)
    // console.log(this.data.idCode)
    wx.setStorageSync('idcard',that.data.idcard)
    if (this.data.idcard == '') {
      wx.showToast({
        title: '请输入身份证号码',
        icon: 'none'
      })
    } else if (this.data.password == '') {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      })
    } else {
      /*身份证验证输入是否正确 
        *身份证号合法性验证 
        *支持15位和18位身份证号 *支持地址编码、出生日期、校验位验证
        若pass = true则通过
      */
      // var that = this;
      // let idcard = this.data.idcard
      // console.log(idcard)
      // var city = {
      //   11: "北京",
      //   12: "天津",
      //   13: "河北",
      //   14: "山西",
      //   15: "内蒙古",
      //   21: "辽宁",
      //   22: "吉林",
      //   23: "黑龙江 ",
      //   31: "上海",
      //   32: "江苏",
      //   33: "浙江",
      //   34: "安徽",
      //   35: "福建",
      //   36: "江西",
      //   37: "山东",
      //   41: "河南",
      //   42: "湖北 ",
      //   43: "湖南",
      //   44: "广东",
      //   45: "广西",
      //   46: "海南",
      //   50: "重庆",
      //   51: "四川",
      //   52: "贵州",
      //   53: "云南",
      //   54: "西藏 ",
      //   61: "陕西",
      //   62: "甘肃",
      //   63: "青海",
      //   64: "宁夏",
      //   65: "新疆",
      //   71: "台湾",
      //   81: "香港",
      //   82: "澳门",
      //   91: "国外 "
      // };
      // var tip = "";
      // var pass = true;
      // var reg = /^\d{6}(18|19|24r3240)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
      // if (!reg.test(idcard)) {
       
      //   tip = "身份证号格式错误";
      //   pass = false;
      // } else if (!city[idcard.substr(0, 2)]) {
      //   tip = "地址编码错误";
      //   pass = false;
      // } else {
        
      //   if (idcard.length == 18) {
      //     idcard = idcard.split('');
          
      //     var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
           
      //     var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
      //     var sum = 0;
      //     var ai = 0;
      //     var wi = 0;
      //     for (var i = 0; i < 17; i++) {
      //       ai = idcard[i];
      //       wi = factor[i];
      //       sum += ai * wi;
      //     }
      //     var last = parity[sum % 11];
      //     if (parity[sum % 11] != idcard[17]) {
      //       tip = "校验位错误";
      //       pass = false;
      //     }
      //   }
      // }
      // console.log("pass===" + pass)
      // if (pass) {
      //   that.setData({
      //     allow_id: true
      //   });
       

      // }
      // if (!pass) {
      //   console.log("tip" + tip);
      //   wx.showToast({
      //     title: '输入的身份证不合法',
      //     icon: 'none'
      //   })
      // }
      // return pass;
    
        let url='/api/index/login'
        let params = {
          education:that.data.education,
          idcard:that.data.idcard,
          password:that.data.password
        }
        app.post(url,params ).then(r => {
          console.log(r);
          let that = this;
          this.setData({
            student_token:r.data.student_token
          })
          wx.setStorageSync('student_token',that.data.student_token);
          wx.showToast({
            title: '登录成功',
            icon:'none'
          })
          setTimeout(() => {
            // wx.setStorageSync('idNum', this.data.idNum);
            wx.redirectTo({
              url: '/pages/MiddleStudentIndex/index'
            })
          }, 1200)
        })
  
    }
    


    // let id=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    // if(id.test(this.data.idNum)){
    //   console.log("格式正确")
    //   //接口调取
    // setTimeout(() => {
    //   wx.redirectTo({
    //     url: '/pages/HighStudentIndex/index',
    //   })
    // }, 1200);
    // }else{
    // wx.showToast({
    //   title: '输入的身份证不合法',
    //   icon:'none'
    // })
    // }
    // }

  },
  //修改密码
  toChangePassword() {
    wx.navigateTo({
      url: '/pages/ChangePassword/index',
    })
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