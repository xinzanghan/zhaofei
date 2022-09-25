// pages/Qualified/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idcard: '', //身份证号
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q8_detail: '',
    q9: '',
    q9_detail: '',
    q10: '',
    q10_detail: '',
    q11: '',
    q12: '',
    q13: '',
    q14: '',
    q15: '',
    q15_detail: '',
    q16: '',
    q16_detail: '',
    q17: '',
    q18: '',
    q19: '',
    q19_detail: '',
    q20: '',
    q21: '',
    q21_detail: '',
    q22: '',
    q22_detail: '',
    q23: '',
    q23_detail: '',
    q24: '',

  },
  InputBianhao(e) {
    this.setData({
      q1: e.detail.value
    })
  },
  InputName(e) {
    this.setData({
      q2: e.detail.value
    })
  },
  InputSchoolName(e) {
    this.setData({
      q3: e.detail.value
    })
  },
  InputLeft: function (e) {
    this.setData({
      q4: e.detail.value
    })
  },
  InputRight: function (e) {
    this.setData({
      q5: e.detail.value
    })
  },
  History(e) {
    this.setData({
      q6: e.detail.value
    })
  },
  operation(e) {
    this.setData({
      q7: e.detail.value
    })
  },
  operationd(e) {
    this.setData({
      q8: e.detail.value
    })
  },
  situation(e) {
    this.setData({
      q8_detail: e.detail.value
    })
  },
  wound(e) {
    this.setData({
      q9: e.detail.value
    })
  },
  situation2(e) {
    this.setData({
      q9_detail: e.detail.value
    })
  },
  stone(e) {
    this.setData({
      q10: e.detail.value
    })
  },
  situation3(e) {
    this.setData({
      q10_detail: e.detail.value
    })
  },
  tuberculosis(e) {
    this.setData({
      q11: e.detail.value
    })
  },
  nephritis(e) {
    this.setData({
      q12: e.detail.value
    })
  },
  bronchus(e) {
    this.setData({
      q13: e.detail.value
    })
  },
  digestive(e) {
    this.setData({
      q14: e.detail.value
    })
  },
  hepatitis(e) {
    this.setData({
      q15: e.detail.value
    })
  },
  situation4(e) {
    this.setData({
      q15_detail: e.detail.value
    })
  },
  faint(e) {
    this.setData({
      q16: e.detail.value
    })
  },
  situation5(e) {
    this.setData({
      q16_detail: e.detail.value
    })
  },
  rhinitis(e) {
    this.setData({
      q17: e.detail.value
    })
  },
  pelagism(e) {
    this.setData({
      q18: e.detail.value
    })
  },
  psychosis(e) {
    this.setData({
      q19: e.detail.value
    })
  },
  situation6(e) {
    this.setData({
      q19_detail: e.detail.value
    })
  },
  situation7(e) {
    this.setData({
      q20: e.detail.value
    })
  },
  family(e) {
    this.setData({
      q21: e.detail.value
    })
  },
  situation8(e) {
    this.setData({
      q21_detail: e.detail.value
    })
  },
  crime(e) {
    this.setData({
      q22: e.detail.value
    })
  },
  situation9(e) {
    this.setData({
      q22_detail: e.detail.value
    })
  },
  learn(e) {
    this.setData({
      q23: e.detail.value
    })
  },
  situation10(e) {
    this.setData({
      q23_detail: e.detail.value
    })
  },
  situation11(e) {
    this.setData({
      q24: e.detail.value
    })
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    let url = '/api/middle/stage2View';
    let params = wx.getStorageSync('student_token');
    app.post(url, params).then(r => {
      console.log(r)
      if (r.data != null) {
        this.setData({
          q1: r.data.q1,
          q2: r.data.q2,
          q3: r.data.q3,
          q4: r.data.q4,
          q5: r.data.q5,
          q6: r.data.q6,
          q7: r.data.q7,
          q8: r.data.q8,
          q8_detail: r.data.q8_detail,
          q9: r.data.q9,
          q9_detail: r.data.q9_detail,
          q10: r.data.q10,
          q10_detail: r.data.q10_detail,
          q11: r.data.q11,
          q12: r.data.q12,
          q13: r.data.q13,
          q14: r.data.q14,
          q15: r.data.q15,
          q15_detail: r.data.q15_detail,
          q16: r.data.q16,
          q16_detail: r.data.q16_detail,
          q17: r.data.q17,
          q18: r.data.q18,
          q19: r.data.q19,
          q19_detail: r.data.q19_detail,
          q20: r.data.q20,
          q21: r.data.q21,
          q21_detail: r.data.q21_detail,
          q22: r.data.q22,
          q22_detail: r.data.q22_detail,
          q23: r.data.q23,
          q23_detail: r.data.q23_detail,
          q14: r.data.q14,
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
    let that = this;
    let url = '/api/index/stage1Header';
    let params = {
      idcard: that.data.idcard,

    }
    app.post(url, params).then(r => {
      that.setData({
        idcard: r.data.idcard,

      })
    })
  },
  // pan(){
  //   let that=this;
  //   if (that.data.q8 == 1 && that.data.q8_detail == '') {
  //     wx.showToast({
  //       title: '请填入手术史的具体情况',
  //       icon: 'none'
  //     })
  //   } else if (that.data.q9 == 1 && that.data.q9_detail == '') {
  //     wx.showToast({
  //       title: '请描述骨折史、关节脱臼史、头颅摔伤史的具体情况',
  //       icon: 'none'
  //     })
  //   } else if (that.data.q10 == 1 && that.data.q10_detail == '') {
  //     wx.showToast({
  //       title: '请描述结石病史的具体情况',
  //       icon: 'none'
  //     })
  //   }else if (that.data.q15 == 1 && that.data.q15_detail == '') {
  //     wx.showToast({
  //       title: '请描述肝炎病史的具体情况',
  //       icon: 'none'
  //     })
  //   }else if (that.data.q16 == 1 && that.data.q16_detail == '') {
  //     wx.showToast({
  //       title: '请描述晕厥或昏迷史的具体情况',
  //       icon: 'none'
  //     })
  //   }else if (that.data.q19 == 1 && that.data.q19_detail == '') {
  //     wx.showToast({
  //       title: '请描述本人及父系、母系三代亲属精神病史的具体情况',
  //       icon: 'none'
  //     })
  //   }else if (that.data.q21 == 1 && that.data.q21_detail == '') {
  //     wx.showToast({
  //       title: '请填入父母、祖父母、外祖父母以及他们的子女有失踪失联、收养领养或送人抱养的具体情况',
  //       icon: 'none'
  //     })
  //   }else if (that.data.q22 == 1 && that.data.q22_detail == '') {
  //     wx.showToast({
  //       title: '请填入父母、祖父母、外祖父母以及他们所生育的子女有违法犯罪的具体情况',
  //       icon: 'none'
  //     })
  //   }else if (that.data.q23 == 1 && that.data.q23_detail == '') {
  //     wx.showToast({
  //       title: '请填入父母在国外工作或居住过的具体情况',
  //       icon: 'none'
  //     })
  //   }else{
  //     that.C()
  //   }
  // },
  // 提交
  submit() {
    let that = this;
    if (that.data.q1 == '') {
      wx.showToast({
        title: '请输入初选合格证编号',
        icon: 'none'
      })
    } else if (that.data.q2 == '') {
      wx.showToast({
        title: '请输入学生姓名',
        icon: 'none'
      })
    } else if (that.data.q3 == '') {
      wx.showToast({
        title: '请输入就读学校名称',
        icon: 'none'
      })
    } else if (that.data.q4 == '') {
      wx.showToast({
        title: '请输入左眼C字表视力',
        icon: 'none'
      })
    } else if (that.data.q5 == '') {
      wx.showToast({
        title: '请输入右眼C字表视力',
        icon: 'none'
      })
    } else if (that.data.q6 == '') {
      wx.showToast({
        title: '请选择是否有角膜塑形镜（OK镜）佩戴史',
        icon: 'none'
      })
    } else if (that.data.q7 == '') {
      wx.showToast({
        title: '请选择是否有角膜屈光矫正手术史',
        icon: 'none'
      })
    } else if (that.data.q8 == '') {
      wx.showToast({
        title: '请选择是否有手术史',
        icon: 'none'
      })
    } else if (that.data.q8_detail == '') {
      wx.showToast({
        title: '请填入手术史的具体情况',
        icon: 'none'
      })
    } else if (that.data.q9 == '') {
      wx.showToast({
        title: '请选择是否有骨折史、关节脱臼史、头颅摔伤史',
        icon: 'none'
      })
    } else if (that.data.q9_detail == '') {
      wx.showToast({
        title: '请填入骨折史、关节脱臼史、头颅摔伤史的具体情况',
        icon: 'none'
      })
    } else if (that.data.q10 == '') {
      wx.showToast({
        title: '请选择是否有结石病史',
        icon: 'none'
      })
    } else if (that.data.q10_detail == '') {
      wx.showToast({
        title: '请填入结石病史的具体情况',
        icon: 'none'
      })
    } else if (that.data.q11 == '') {
      wx.showToast({
        title: '请选择是否有结核病史（肺结核、肠结核、淋巴结核等）',
        icon: 'none'
      })
    } else if (that.data.q12 == '') {
      wx.showToast({
        title: '请选择是否有肾炎、肾病病史',
        icon: 'none'
      })
    } else if (that.data.q13 == '') {
      wx.showToast({
        title: '请选择是否有支气管哮喘病史',
        icon: 'none'
      })
    } else if (that.data.q14 == '') {
      wx.showToast({
        title: '请选择是否有消化系统溃疡病史况',
        icon: 'none'
      })
    } else if (that.data.q15 == '') {
      wx.showToast({
        title: '请选择是否有肝炎病史',
        icon: 'none'
      })
    } else if (that.data.q15_detail == '') {
      wx.showToast({
        title: '请填入肝炎病史的具体情况',
        icon: 'none'
      })
    } else if (that.data.q16 == '') {
      wx.showToast({
        title: '请选择是否有晕厥或昏迷史',
        icon: 'none'
      })
    } else if (that.data.q16_detail == '') {
      wx.showToast({
        title: '请填入晕厥或昏迷史的具体情况',
        icon: 'none'
      })
    } else if (that.data.q17 == '') {
      wx.showToast({
        title: '请选择是否有过敏性鼻炎病史',
        icon: 'none'
      })
    } else if (that.data.q18 == '') {
      wx.showToast({
        title: '请选择是否有晕车、晕船史',
        icon: 'none'
      })
    } else if (that.data.q19 == '') {
      wx.showToast({
        title: '请选择有本人及父系、母系三代亲属是否有精神病史',
        icon: 'none'
      })
    } else if (that.data.q19_detail == '') {
      wx.showToast({
        title: '请填入本人及父系、母系三代亲属有精神病史的具体情况',
        icon: 'none'
      })
    } else if (that.data.q21 == '') {
      wx.showToast({
        title: '请填入父母、祖父母、外祖父母以及他们的子女有无失踪失联、收养领养或送人抱养的情况',
        icon: 'none'
      })
    } else if (that.data.q21_detail == '') {
      wx.showToast({
        title: '请填入父母、祖父母、外祖父母以及他们的子女有失踪失联、收养领养或送人抱养的具体情况',
        icon: 'none'
      })
    } else if (that.data.q22 == '') {
      wx.showToast({
        title: '请填入父母、祖父母、外祖父母以及他们所生育的子女有无违法犯罪的情况',
        icon: 'none'
      })
    } else if (that.data.q22_detail == '') {
      wx.showToast({
        title: '请填入父母、祖父母、外祖父母以及他们所生育的子女有违法犯罪的具体情况',
        icon: 'none'
      })
    }
    else if (that.data.q23 == '') {
      wx.showToast({
        title: '请填入父母是否在国外工作或居住过',
        icon: 'none'
      })
    } else if (that.data.q23_detail == '') {
      wx.showToast({
        title: '请填入父母在国外工作或居住过的具体情况',
        icon: 'none'
      })
    }else {
      that.C();
      // that.pan()
      // if(that.data.q8 ==1){
      //     if (that.data.q8_detail == '') {
      //       wx.showToast({
      //         title: '请填入手术史的具体情况',
      //         icon: 'none'
      //       })
      //   }else{
      //     if(that.data.q9 ==1){
      //       if (that.data.q9_detail == '') {
      //         wx.showToast({
      //           title: '请填入骨折史、关节脱臼史、头颅摔伤史的具体情况',
      //           icon: 'none'
      //         })
      //       }else{
      //         if(that.data.q10==1){
      //           if (that.data.q10_detail == '') {
      //             wx.showToast({
      //               title: '请填入结石病史的具体情况',
      //               icon: 'none'
      //             })
      //           }else{
      //             if(that.data.q15 ==1){
      //               if (that.data.q15_detail == '') {
      //                 wx.showToast({
      //                   title: '请填入肝炎病史的具体情况',
      //                   icon: 'none'
      //                 })
      //               }else{
      //                 if(that.data.q16 == 1){
      //                   if (that.data.q16_detail == '') {
      //                     wx.showToast({
      //                       title: '请填入晕厥或昏迷史的具体情况',
      //                       icon: 'none'
      //                     })
      //                   }else{
      //                     if(that.data.q19 ==1){
      //                       if (that.data.q19_detail == '') {
      //                         wx.showToast({
      //                           title: '请填入本人及父系、母系三代亲属有精神病史的具体情况',
      //                           icon: 'none'
      //                         })
      //                       }else{
      //                         if(that.data.q21 ==1){
      //                           if (that.data.q21_detail == '') {
      //                             wx.showToast({
      //                               title: '请填入父母、祖父母、外祖父母以及他们的子女有失踪失联、收养领养或送人抱养的具体情况',
      //                               icon: 'none'
      //                             })
      //                           }else{
      //                             if(that.data.q22 ==1){
      //                               if (that.data.q22_detail == '') {
      //                                 wx.showToast({
      //                                   title: '请填入父母、祖父母、外祖父母以及他们所生育的子女有违法犯罪的具体情况',
      //                                   icon: 'none'
      //                                 })
      //                               }else{
      //                                 if(that.data.q23 ==1){
      //                                   if (that.data.q23_detail == '') {
      //                                     wx.showToast({
      //                                       title: '请填入父母在国外工作或居住过的具体情况',
      //                                       icon: 'none'
      //                                     })
      //                                   }else{
      //                                     this.C();
      //                                   }
      //                                 }
      //                               }
      //                             }
      //                           }
      //                         }
      //                       }
      //                     }
      //                   }
      //                 }
      //               }
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
    }
  },
  C() {
    let url = '/api/middle/stage2'
    let that = this;
    let params = {
      q1: that.data.q1,
      q2: that.data.q2,
      q3: that.data.q3,
      q4: that.data.q4,
      q5: that.data.q5,
      q6: that.data.q6,
      q7: that.data.q7,
      q8: that.data.q8,
      q8_detail: that.data.q8_detail,
      q9: that.data.q9,
      q9_detail: that.data.q9_detail,
      q10: that.data.q10,
      q10_detail: that.data.q10_detail,
      q11: that.data.q11,
      q12: that.data.q12,
      q13: that.data.q13,
      q14: that.data.q14,
      q15: that.data.q15,
      q15_detail: that.data.q15_detail,
      q16: that.data.q16,
      q16_detail: that.data.q16_detail,
      q17: that.data.q17,
      q18: that.data.q18,
      q19: that.data.q19,
      q19_detail: that.data.q19_detail,
      q20: that.data.q20,
      q21: that.data.q21,
      q21_detail: that.data.q21_detail,
      q22: that.data.q22,
      q22_detail: that.data.q22_detail,
      q23: that.data.q23,
      q23_detail: that.data.q23_detail,
      q24: that.data.q24,
    }
    app.post(url, params).then(r => {
      let that = this;
      console.log(r);
    })
    wx.navigateBack({
      delta: 1,
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