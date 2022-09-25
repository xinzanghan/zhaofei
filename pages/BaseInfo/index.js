// pages/BaseInfo/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step1_q3: [], //地区
    level: [{
      value: '1',
      name: '省级示范高中'
    },
    {
      value: '2',
      name: '市级示范高中'
    },
    {
      value: '3',
      name: '一般高中'
    },
    ],
    // level1: [
    //   {
    //     value: '1',
    //     name: '市级示范高中'
    //   },
    //   {
    //     value: '1',
    //     name: '一般高中'
    //   },
    // ], //预估中考水平
    idcard: '', //身份证号
    sex: '', //性别
    birthday: '', //出生日期
    step1_q1: '',//初选合格证编号
    step1_q2: '',//	学生姓名
    step1_q3: '',//就读学校所在省/市/区
    step1_q4: '',//就读学校名称
    step1_q5: '',//就读学校是否为学籍学校:1=是,2=否
    step1_q6: '',//年级排名稳定在前多少名（咨询班主任）
    step1_q7: '',//2021年初三毕业生数（咨询班主任）
    step1_q8: '',//	2021年全校考取省示范高中人数（咨询班主任）
    step1_q9: '',//	今年初三毕业生数（咨询班主任
    step1_q10: '',//学校预估今年初三中考能考取省示范高中数（咨询班主任）
    step1_q11: '',//班主任预估你中考水平（咨询班主任）
    gaoDer: 1,//省级示范高中的显示与隐藏
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
    let url = '/api/middle/stage1View';
    let params = wx.getStorageSync('student_token')
    app.post(url, params).then(r => {
      console.log(r);
      if (r.data != null) {
        let step1_q3 = r.data.step1_q3.split(",");
        console.log(r.data.step1_q8);
        that.setData({
          step1_q1: r.data.step1_q1,
          step1_q2: r.data.step1_q2,
          step1_q3,
          step1_q4: r.data.step1_q4,
          step1_q5: r.data.step1_q5,
          step1_q6: r.data.step1_q6,
          step1_q7: r.data.step1_q7,
          step1_q8: r.data.step1_q8,
          // :r.data.step1_q8,
          step1_q9: r.data.step1_q9,
          step1_q10: r.data.step1_q10,
          step1_q11: r.data.step1_q11,
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
  //初选合格证编号
  serialNumber(e) {
    this.setData({
      step1_q1: e.detail.value
    })
  },
  //学生姓名
  studentName(e) {
    this.setData({
      step1_q2: e.detail.value
    })
  },
  //就读学校所在省/市/区
  bindRegionChange: function (e) {
    this.setData({
      step1_q3: e.detail.value
    })
  },
  //就读学校名称
  schoolName(e) {
    this.setData({
      step1_q4: e.detail.value
    })
  },
  //就读学校是否为学籍学校
  changeSchool(e) {
    this.setData({
      step1_q5: e.detail.value
    })
  },
  //年级排名
  classRanking(e) {
    this.setData({
      step1_q6: e.detail.value
    })
  },
  //2021毕业生人数
  graduationStudent(e) {
    let that = this;
    this.setData({
      step1_q7: e.detail.value
    })

  },
  //2021全校考取省示范高中人数
  peopleNum(e) {
    this.setData({
      step1_q8: e.detail.value
    })
  },
  //今年毕业生人数
  graduationNum(e) {
    this.setData({
      step1_q9: e.detail.value
    })
  },
  //学校预估今年超三能考取省示范高中的人数
  predict(e) {
    let that = this;
    this.setData({
      step1_q10: e.detail.value
    })
    // if ((parseInt(that.data.step1_q10) < parseInt(that.data.step1_q6)) && (parseInt(that.data.step1_q7) < parseInt(that.data.step1_q6))) {
    //   that.setData({
    //     gaoDer: 2
    //   })
    // } else {
    //   that.setData({
    //     gaoDer: 1
    //   })
    // }
  },
  //预估中考水平
  radioChange(e) {
    // const level = this.data.level
    // for (let i = 0, len = level.length; i < len; ++i) {
    //   level[i].checked = level[i].value === e.detail.value
    // }
    this.setData({
      step1_q11: e.detail.value
    })
  },
  //下一项
  next() {
    let that = this;
    if (that.data.step1_q1 == '') {
      wx.showToast({
        title: '请填写初选编号',
        icon: 'none'
      })
    } else if (that.data.step1_q2 == '') {
      wx.showToast({
        title: '请填写您的姓名',
        icon: 'none'
      })
    } else if (that.data.step1_q3 == '') {
      wx.showToast({
        title: '请选择您就读学校的省市区',
        icon: 'none'
      })
    } else if (that.data.step1_q4 == '') {
      wx.showToast({
        title: '请填写您就读学校的名称',
        icon: 'none'
      })
    } else if (that.data.step1_q5 == '') {
      wx.showToast({
        title: '请选择就读学校的学校籍贯',
        icon: 'none'
      })
    } else if (that.data.step1_q6 == '') {
      wx.showToast({
        title: '请填写您的年级排名',
        icon: 'none'
      })
    } else if (that.data.step1_q7 == '') {
      wx.showToast({
        title: '请填写2021年初毕业生数量',
        icon: 'none'
      })
    } else if (that.data.step1_q8 == '') {
      wx.showToast({
        title: '请填写2021年全校考取省示范高中人数',
        icon: 'none'
      })
    } else if (that.data.step1_q9 == '') {
      wx.showToast({
        title: '请填写今年初三毕业人数',
        icon: 'none'
      })
    } else if (that.data.step1_q10 == '') {
      wx.showToast({
        title: '请填写学校预估今年初三中考能考取省示范高中数',
        icon: 'none'
      })
    } else if (that.data.step1_q11 == '') {
      wx.showToast({
        title: '请填写班主任预估你中考水平',
        icon: 'none'
      })
    } else {
      let that = this;
      let left = that.data.step1_q1.substr(0, 5);
      let right = that.data.step1_q1.substr(-4);
      let bianhao = /^[A-Z][0-9]{4}$/;
      console.log(left)
      console.log(right)
      console.log(bianhao)

      // let left=substring(that.data.step1_q1, 0, 5);
      // let right=substring(that.data.step1_q1, 5,4);
      //合格编码前5位
      //合格编码后4位
      console.log(that.data.step1_q1);
      if (!bianhao.test(left) || right != that.data.idcard.substr(14, 4) || that.data.step1_q1.length != 9) {
        wx.showToast({
          title: '初选合格证编号填写错误',
          icon: 'none'
        })

      } else {
        let information = {};
        information.step1_q1 = that.data.step1_q1;
        information.step1_q2 = that.data.step1_q2;
        information.step1_q3 = that.data.step1_q3;
        information.step1_q4 = that.data.step1_q4;
        information.step1_q5 = that.data.step1_q5;
        information.step1_q6 = that.data.step1_q6;
        information.step1_q7 = that.data.step1_q7;
        information.step1_q8 = that.data.step1_q8;
        information.step1_q9 = that.data.step1_q9;
        information.step1_q10 = that.data.step1_q10;
        information.step1_q11 = that.data.step1_q11;
        wx.setStorageSync('information', information);
        wx.navigateTo({
          url: '../BaseInfoTwo/index',
        })
      }

    }
    //  else {
    //   if (parseInt(that.data.step1_q7) < parseInt(that.data.step1_q6)) {
    //     wx.showToast({
    //       title: '请填写正确的初三毕业生人数',
    //       icon: 'none'
    //     })
    //   } else if (parseInt(that.data.step1_q10) < parseInt(that.data.step1_q6)) {
    //     wx.showToast({
    //       title: '请正确填写学校预估今年初三中考能考取省示范高中数',
    //       icon: 'none'
    //     })
    //   } else {
    //     let information = {};
    //     information.step1_q1 = that.data.step1_q1;
    //     information.step1_q2 = that.data.step1_q2;
    //     information.step1_q3 = that.data.step1_q3;
    //     information.step1_q4 = that.data.step1_q4;
    //     information.step1_q5 = that.data.step1_q5;
    //     information.step1_q6 = that.data.step1_q6;
    //     information.step1_q7 = that.data.step1_q7;
    //     information.step1_q8 = that.data.step1_q8;
    //     information.step1_q9 = that.data.step1_q9;
    //     information.step1_q10 = that.data.step1_q10;
    //     information.step1_q11 = that.data.step1_q11;
    //     wx.setStorageSync('information', information);
    //     wx.navigateTo({
    //       url: '../BaseInfoTwo/index',
    //     })
    //   }
    // }
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