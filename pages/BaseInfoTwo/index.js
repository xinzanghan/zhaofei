// pages/BaseInfoTwo/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    information: {}, //上一页的信息
    step2_q1: '',//民族
    step2_q2: '',//应往届:1=应届,2=往届
    step2_q3: '',//政治面貌:1=青年,2=共青团员
    step2_q4: '',//户口类型:1=农户,2=非农户
    step2_q5: '',//	是否独生子女:1=是,2=否
    step2_q6: '',//是否为班干部:1=是,2=否
    step2_q7: '',//何时获省、市、县级表彰奖励
    step2_q8: '',//初三班主任姓名
    step2_q9: '',//	班主任手机号
    step2_q10: '',//本人手机号
    step2_q11: '',//父母手机号码1
    step2_q12: '',//父母手机号码2
    step2_q13: '',//家长态度:1=支持,2=尊重学生意愿,3=反对
    step2_q14: '',//学生报考意愿（谨慎填写）:1=自愿报考,2=还在犹豫,3=不愿意
    step2_q15: '',//	学生报考动机:1=一心想当飞行员报效祖国,2=飞行员待遇好前途广,3=学校教学水平高、考重点大学概率大,4=不想当飞行员但是家长强迫
    //家长态度
    attitude: [{
      value: '1',
      name: '支持',
      },
      {
        value: '2',
        name: '尊重学生意愿',
      },
      {
        value: '3',
        name: '反对',
      },
    ],
    //学生报考意愿
    wish: [{
      value: '1',
      name: '自愿报考'
      },
      {
        value: '2',
        name: '还在犹豫'
      },
      {
        value: '3',
        name: '不愿意'
      }
    ],
    //学生报考动机
    intention: [{
      value: '1',
      name: '一心想当飞行员报效祖国'
      },
      {
        value: '2',
        name: '飞行员待遇好前途广'
      },
      {
        value: '3',
        name: '学校教学水平高、考重点大学概率大'
      },
      {
        value: '4',
        name: '不想当飞行员但是家长强迫'
      }
    ],
  },
   /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this;
    that.setData({
      information: wx.getStorageSync('information')
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
        // let items = that.data.items;
        // for (let i = 0; i < items.length; i++) {
        //   if (items[i].value == r.data.step1_q6) {
        //    items[i].checked=true
        //   }
        // }

        // that.setData({
        //   items
        // })

        this.setData({
          step2_q1: r.data.step2_q1,
          step2_q2: r.data.step2_q2,
          step2_q3: r.data.step2_q3,
          step2_q4: r.data.step2_q4,
          step2_q5: r.data.step2_q5,
          step2_q6: r.data.step2_q6,
          step2_q7: r.data.step2_q7,
          step2_q8: r.data.step2_q8,
          step2_q9: r.data.step2_q9,
          step2_q10: r.data.step2_q10,
          step2_q11: r.data.step2_q11,
          step2_q12: r.data.step2_q12,
          step2_q13: r.data.step2_q13,
          step2_q14: r.data.step2_q14,
          step2_q15: r.data.step2_q15,

        })
      }
    })
    

  },
  // 民族点击事件
  nation(e) {
    this.setData({
      step2_q1: e.detail.value
    })
  },
  //应往届
  freshStudent(e) {
    this.setData({
      step2_q2: e.detail.value
    })
  },
  //政治面貌
  politicsStatus(e) {
    this.setData({
      step2_q3: e.detail.value
    })
  },
  //户口类型
  household(e) {
    this.setData({
      step2_q4: e.detail.value
    })
  },
  //是否独生子女
  onlyChild(e) {
    this.setData({
      step2_q5: e.detail.value
    })
  },
  //是否为班干部
  classLeader(e) {
    this.setData({
      step2_q6: e.detail.value
    })
  },
  //何时获省、市、县级表彰奖励
  rewards(e) {
    this.setData({
      step2_q7: e.detail.value
    })
  },
  //初三班主任姓名
  teacherName(e) {
    this.setData({
      step2_q8: e.detail.value
    })
  },
  //班主任手机号
  teacherPhone(e) {
    console.log(e.detail.value);
    this.setData({
      step2_q9: e.detail.value
    })
  },
  //本人手机号
  myPhone(e) {
    console.log(e.detail.value);
    this.setData({
      step2_q10: e.detail.value
    })
  },
  //父母手机号码1
  parentPhone1(e) {
    console.log(e.detail.value);
    this.setData({
      step2_q11: e.detail.value
    })
  },
  //父母手机号码12
  parentPhone2(e) {
    console.log(e.detail.value);
    this.setData({
      step2_q12: e.detail.value
    })
  },
  //  家长态度
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    const attitude = this.data.attitude
    for (let i = 0, len = attitude.length; i < len; ++i) {
      attitude[i].checked = attitude[i].value === e.detail.value
    }

    this.setData({
      step2_q13: e.detail.value
    })
  },
  //学生报考意愿
  wishChange(e) {
    const wish = this.data.wish
    for (let i = 0, len = wish.length; i < len; ++i) {
      wish[i].checked = wish[i].value === e.detail.value
    }

    this.setData({
      step2_q14: e.detail.value
    })
  },
  //报考动机
  intentionChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    const intention = this.data.intention
    for (let i = 0, len = intention.length; i < len; ++i) {
      intention[i].checked = intention[i].value === e.detail.value
    }

    this.setData({
      step2_q15: e.detail.value
    })
  },

  //上一项
  previousPage() {
    wx.navigateBack({
      delta: 1,
    })
  },
  //提交
  submit() {
    let that = this;
    if(that.data.step2_q1 == '') {
      wx.showToast({
        title: '请填写名族',
        icon:'none'
      })
    }else if(that.data.step2_q2 =='') {
      wx.showToast({
        title: '请填写应往届',
        icon:'none'
      })
    }else if(that.data.step2_q3 =='') {
      wx.showToast({
        title: '请填写政治面貌',
        icon:'none'
      })
    }else if(that.data.step2_q4 =='') {
      wx.showToast({
        title: '请填写户口类型',
        icon:'none'
      })
    }else if(that.data.step2_q5 =='') {
      wx.showToast({
        title: '请填写是否独生子',
        icon:'none'
      })
    }else if(that.data.step2_q6 =='') {
      wx.showToast({
        title: '请填写是否为班干部',
        icon:'none'
      })
    }else if(that.data.step2_q7 =='') {
      wx.showToast({
        title: '请填写何时获省、市、县级表彰奖励',
        icon:'none'
      })
    }else if(that.data.step2_q8 =='') {
      wx.showToast({
        title: '请填写初三班主任姓名',
        icon:'none'
      })
    }else if(that.data.step2_q9 =='') {
      wx.showToast({
        title: '请输入班主任手机号',
        icon: 'none'
      })
    }else if(that.data.step21_q10	=='') {
      wx.showToast({
        title: '请输入本人手机号',
        icon: 'none'
      })
    }else if(that.data.step2_q11 =='') {
      wx.showToast({
        title: '请输入父母手机号1',
        icon: 'none'
      })
    }else if(that.data.step2_q13 =='') {
      wx.showToast({
        title: '请选择家长态度',
        icon: 'none'
      })
    }else if(that.data.step2_q14 =='') {
      wx.showToast({
        title: '请选择学生报考意愿（谨慎填写）',
        icon: 'none'
      })
    }else if(that.data.step2_q15 =='') {
      wx.showToast({
        title: '请选择学习报考动机',
        icon: 'none'
      })
    }else {
      let phone = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/;
      if (!phone.test(this.data.step2_q9)) {
        wx.showToast({
          title: '请输入正确的班主任手机号',
          icon: 'none'
        })
      } else if (!phone.test(this.data.step2_q10)) {
        wx.showToast({
          title: '请输入正确的本人手机号',
          icon: 'none'
        })
      } else if (!phone.test(this.data.step2_q11)) {
        wx.showToast({
          title: '请输入正确父母的手机号1',
          icon: 'none'
        })
      }else if (this.data.step2_q12!='') {
        if(!phone.test(this.data.step2_q12)){
          wx.showToast({
            title: '请输入父母的手机号2',
            icon: 'none'
          })
        }else {
          let url = '/api/middle/stage1'
          let params={
            step1_q1:that.data.information.step1_q1,
            step1_q2:that.data.information.step1_q2,
            step1_q3:that.data.information.step1_q3,
            step1_q4:that.data.information.step1_q4,
            step1_q5:that.data.information.step1_q5,
            step1_q6:that.data.information.step1_q6,
            step1_q7:that.data.information.step1_q7,
            step1_q8:that.data.information.step1_q8,
            step1_q9:that.data.information.step1_q9,
            step1_q10:that.data.information.step1_q10,
            step1_q11:that.data.information.step1_q11,
            step2_q1:that.data.step2_q1,
            step2_q2:that.data.step2_q2,
            step2_q3:that.data.step2_q3,
            step2_q4:that.data.step2_q4,
            step2_q5:that.data.step2_q5,
            step2_q6:that.data.step2_q6,
            step2_q7:that.data.step2_q7,
            step2_q8:that.data.step2_q8,
            step2_q9:that.data.step2_q9,
            step2_q10:that.data.step2_q10,
            step2_q11:that.data.step2_q11,
            step2_q12:that.data.step2_q12,
            step2_q13:that.data.step2_q13,
            step2_q14:that.data.step2_q14,
            step2_q15:that.data.step2_q15,
          }
          app.post(url, params).then(r => {
            console.log(r);
          })
          wx.navigateBack({
            delta: 2,
          })
        }
      }else {
        let url = '/api/middle/stage1'
        let params={
          step1_q1:that.data.information.step1_q1,
          step1_q2:that.data.information.step1_q2,
          step1_q3:that.data.information.step1_q3,
          step1_q4:that.data.information.step1_q4,
          step1_q5:that.data.information.step1_q5,
          step1_q6:that.data.information.step1_q6,
          step1_q7:that.data.information.step1_q7,
          step1_q8:that.data.information.step1_q8,
          step1_q9:that.data.information.step1_q9,
          step1_q10:that.data.information.step1_q10,
          step1_q11:that.data.information.step1_q11,
          step2_q1:that.data.step2_q1,
          step2_q2:that.data.step2_q2,
          step2_q3:that.data.step2_q3,
          step2_q4:that.data.step2_q4,
          step2_q5:that.data.step2_q5,
          step2_q6:that.data.step2_q6,
          step2_q7:that.data.step2_q7,
          step2_q8:that.data.step2_q8,
          step2_q9:that.data.step2_q9,
          step2_q10:that.data.step2_q10,
          step2_q11:that.data.step2_q11,
          step2_q12:that.data.step2_q12,
          step2_q13:that.data.step2_q13,
          step2_q14:that.data.step2_q14,
          step2_q15:that.data.step2_q15,
        }
        app.post(url, params).then(r => {
          console.log(r);
        })
        wx.navigateBack({
          delta: 2,
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