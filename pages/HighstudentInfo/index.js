// pages/HighstudentInfo/index.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { value: '1', name: '群众', checked: 'false' },
      { value: '2', name: '共青团员', checked: 'false' },
      { value: '3', name: '中共党员', checked: 'false' },
      { value: '4', name: '预备党员', checked: 'false' },
    ],            //政治面貌
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
    step1_q12: '',
    step1_q13: '',
    step1_q14: '',
    step1_q15: '',
    step1_q16: '',
    step1_q17: '',
    step1_q18: '',

    idcard: '',  //身份证号码
    sex: '',       //性别:1=男,2=女
    birthday: '',  //生日
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this;
    let url = '/api/index/stage1Header';
    let params = {
      idcard: that.data.idcard,
      sex: that.data.sex,
      birthday: that.data.birthday
    }
    app.post(url, params).then(r => {
      that.setData({
        idcard: r.data.idcard,
        sex: r.data.sex,
        birthday: r.data.birthday
      })
      if (r.data.sex == '2') {
        that.setData({
          sex: '女'
        })
      } else {
        that.setData({
          sex: '男'
        })
      }
    })
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
      if (r.data != null) {
        let step1_q8 = r.data.step1_q8.split(",");
        console.log(r.data.step1_q8);
        this.setData({
          step1_q1: r.data.step1_q1,
          step1_q2: r.data.step1_q2,
          step1_q3: r.data.step1_q3,
          step1_q4: r.data.step1_q4,
          step1_q5: r.data.step1_q5,
          step1_q6: r.data.step1_q6,
          step1_q7: r.data.step1_q7,
          step1_q8,
          // :r.data.step1_q8,
          step1_q9: r.data.step1_q9,
          step1_q10: r.data.step1_q10,
          step1_q11: r.data.step1_q11,
          step1_q12: r.data.step1_q12,
          step1_q13: r.data.step1_q13,
          step1_q14: r.data.step1_q14,
          step1_q15: r.data.step1_q15,
          step1_q16: r.data.step1_q16,
          step1_q17: r.data.step1_q17,
          step1_q18: r.data.step1_q18,
        })
      }

      // let items = that.data.items;
      // for (let i = 0; i < items.length; i++) {
      //   if (items[i].value == r.data.step1_q6) {
      //    items[i].checked=true
      //   }
      // }

      // that.setData({
      //   items
      // })


    })

  },

  //input输入框的点击事件
  InputBianhao: function (e) {
    this.setData({
      step1_q1: e.detail.value
    })
    // let that =this;



  },
  InputName: function (e) {
    this.setData({
      step1_q2: e.detail.value
    })
  },
  InputAddress: function (e) {
    this.setData({
      step1_q3: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      step1_q4: e.detail.value
    })
  },
  radioChange1: function (e) {
    this.setData({
      step1_q5: e.detail.value
    })
  },
  radioChange2: function (e) {
    this.setData({
      step1_q6: e.detail.value
    })
  },
  radioChange3: function (e) {
    this.setData({
      step1_q7: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      step1_q8: e.detail.value
    })
  },
  InputReading: function (e) {
    this.setData({
      step1_q9: e.detail.value
    })
  },
  InputReaded: function (e) {
    this.setData({
      step1_q10: e.detail.value
    })
  },
  InputProvince: function (e) {
    this.setData({
      step1_q11: e.detail.value
    })
  },
  InputEnglish: function (e) {
    this.setData({
      step1_q12: e.detail.value
    })
  },
  radioChange4: function (e) {
    this.setData({
      step1_q13: e.detail.value
    })
  },
  InputTeacher: function (e) {
    this.setData({
      step1_q14: e.detail.value
    })
  },
  teacherPhone(e) {
    this.setData({
      step1_q15: e.detail.value
    })
  },
  myPhone(e) {
    this.setData({
      step1_q16: e.detail.value
    })
  },
  parentPhone1(e) {
    this.setData({
      step1_q17: e.detail.value
    })
  },
  parentPhone2(e) {
    this.setData({
      step1_q18: e.detail.value
    })
  },

  //下一项按钮 判断手机号的输入框是否有值 在值存在的情况下验证手机号
  toNextPage() {
    console.log("1111111")
    let that = this;
    if (that.data.step1_q1 == '') {
      wx.showToast({
        title: '请输入初选合格证编号',
        icon: 'none'
      })
    } else if (that.data.step1_q2 == '') {
      wx.showToast({
        title: '请输入学生姓名',
        icon: 'none'
      })
    } else if (that.data.step1_q3 == '') {
      wx.showToast({
        title: '请输入参选学生地点',
        icon: 'none'
      })
    } else if (that.data.step1_q4 == '') {
      wx.showToast({
        title: '请输入民族',
        icon: 'none'
      })
    } else if (that.data.step1_q5 == '') {
      wx.showToast({
        title: '请选择应往届',
        icon: 'none'
      })
    } else if (that.data.step1_q6 == '') {
      wx.showToast({
        title: '请选择政治面貌',
        icon: 'none'
      })
    } else if (that.data.step1_q7 == '') {
      wx.showToast({
        title: '请选择户口类型',
        icon: 'none'
      })
    } else if (that.data.step1_q8 == '') {
      wx.showToast({
        title: '请输入就读学校所在省市区',
        icon: 'none'
      })
    } else if (that.data.step1_q9 == '') {
      wx.showToast({
        title: '请输入就读学校名称',
        icon: 'none'
      })
    } else if (that.data.step1_q10 == '') {
      wx.showToast({
        title: '请输入学籍学校名称',
        icon: 'none'
      })
    } else if (that.data.step1_q11 == '') {
      wx.showToast({
        title: '请输入参加高考省份',
        icon: 'none'
      })
    } else if (that.data.step1_q12 == '') {
      wx.showToast({
        title: '请输入高考外语语种',
        icon: 'none'
      })
    } else if (that.data.step1_q13 == '') {
      wx.showToast({
        title: '请选择文理科',
        icon: 'none'
      })
    } else if (that.data.step1_q14 == '') {
      wx.showToast({
        title: '请输入高三班主任姓名',
        icon: 'none'
      })
    } else if (that.data.step1_q15 == '') {
      wx.showToast({
        title: '请输入班主任手机号',
        icon: 'none'
      })
    } else if (that.data.step1_q16 == '') {
      wx.showToast({
        title: '请输入本人手机号',
        icon: 'none'
      })
    } else if (that.data.step1_q17 == '') {
      wx.showToast({
        title: '请输入父母手机号1',
        icon: 'none'
      })
    } else {
      let that=this;
      let left = that.data.step1_q1.substr(0, 5);
      let right = that.data.step1_q1.substr(-4);
      let bianhao = /^[A-Z][0-9]{4}$/;
      let phone = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/;
    console.log(left)
    console.log(right)
    console.log(bianhao)

      // let left=substring(that.data.step1_q1, 0, 5);
      // let right=substring(that.data.step1_q1, 5,4);
      //合格编码前5位
      //合格编码后4位
      console.log(that.data.step1_q1);
      if (!bianhao.test(left) ||right != that.data.idcard.substr(14, 4)||that.data.step1_q1.length != 9) {
        wx.showToast({
          title: '初选合格证编号填写错误',
          icon: 'none'
        })
        
      }else if (!phone.test(this.data.step1_q15)) {
        wx.showToast({
          title: '请输入正确的班主任手机号',
          icon: 'none'
        })
      } else if (!phone.test(this.data.step1_q16)) {
        wx.showToast({
          title: '请输入正确的本人手机号',
          icon: 'none'
        })
      } else if (!phone.test(this.data.step1_q17)) {
        wx.showToast({
          title: '请输入正确的父母手机号1',
          icon: 'none'
        })
      } else if (this.data.step1_q18 != '') {
        if (!phone.test(this.data.step1_q18)) {
          wx.showToast({
            title: '请输入正确的父母手机号2',
            icon: 'none'
          })
        } else {
          console.log('else')
          //将本页面的参数 存入HighstudentInfo对象 并存入缓存
          let HighstudentInfo = {};
          HighstudentInfo.step1_q1 = that.data.step1_q1;
          HighstudentInfo.step1_q2 = that.data.step1_q2;
          HighstudentInfo.step1_q3 = that.data.step1_q3;
          HighstudentInfo.step1_q4 = that.data.step1_q4;
          HighstudentInfo.step1_q5 = that.data.step1_q5;
          HighstudentInfo.step1_q6 = that.data.step1_q6;
          HighstudentInfo.step1_q7 = that.data.step1_q7;
          HighstudentInfo.step1_q8 = that.data.step1_q8;
          HighstudentInfo.step1_q9 = that.data.step1_q9;
          HighstudentInfo.step1_q10 = that.data.step1_q10;
          HighstudentInfo.step1_q11 = that.data.step1_q11;
          HighstudentInfo.step1_q12 = that.data.step1_q12;
          HighstudentInfo.step1_q13 = that.data.step1_q13;
          HighstudentInfo.step1_q14 = that.data.step1_q14;
          HighstudentInfo.step1_q15 = that.data.step1_q15;
          HighstudentInfo.step1_q16 = that.data.step1_q16;
          HighstudentInfo.step1_q17 = that.data.step1_q17;
          HighstudentInfo.step1_q18 = that.data.step1_q18;
          wx.setStorageSync('HighstudentInfo', HighstudentInfo)
          console.log('打印')
          wx.navigateTo({
            url: '/pages/HighstudentInfoTwo/index',
          })
        }
      } else {
        console.log('else')
        //将本页面的参数 存入HighstudentInfo对象 并存入缓存
        let HighstudentInfo = {};
        HighstudentInfo.step1_q1 = that.data.step1_q1;
        HighstudentInfo.step1_q2 = that.data.step1_q2;
        HighstudentInfo.step1_q3 = that.data.step1_q3;
        HighstudentInfo.step1_q4 = that.data.step1_q4;
        HighstudentInfo.step1_q5 = that.data.step1_q5;
        HighstudentInfo.step1_q6 = that.data.step1_q6;
        HighstudentInfo.step1_q7 = that.data.step1_q7;
        HighstudentInfo.step1_q8 = that.data.step1_q8;
        HighstudentInfo.step1_q9 = that.data.step1_q9;
        HighstudentInfo.step1_q10 = that.data.step1_q10;
        HighstudentInfo.step1_q11 = that.data.step1_q11;
        HighstudentInfo.step1_q12 = that.data.step1_q12;
        HighstudentInfo.step1_q13 = that.data.step1_q13;
        HighstudentInfo.step1_q14 = that.data.step1_q14;
        HighstudentInfo.step1_q15 = that.data.step1_q15;
        HighstudentInfo.step1_q16 = that.data.step1_q16;
        HighstudentInfo.step1_q17 = that.data.step1_q17;
        HighstudentInfo.step1_q18 = that.data.step1_q18;
        wx.setStorageSync('HighstudentInfo', HighstudentInfo)
        console.log('打印')
        wx.navigateTo({
          url: '/pages/HighstudentInfoTwo/index',
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