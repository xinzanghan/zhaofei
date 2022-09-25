// pages/PrimarySuccessInfoTwo/index.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step2_q1: '',
    step2_q2: '',
    step2_q3: '',
    step2_q3_detail: '',
    step2_q4: '',
    step2_q4_detail: '',
    step2_q5: '',
    step2_q5_detail: '',
    step2_q6: '',
    step2_q7: '',
    step2_q8: '',
    step2_q9: '',
    step2_q10: '',
    step2_q10_detail: '',
    step2_q11: '',
    step2_q11_detail: '',
    step2_q12: '',
    step2_q13: '',
    step2_q14: '',
    step2_q14_detail: '',
    step2_q15: '',
    PrimarySuccessInfo: {},//初选合格提交信息 存储信息的数组
    decide: '2',//判断是否有具体情况 2为没有  1为有
  },
 
  //页面14个单选框的点击事件
  radioChange1(e) {
    this.setData({
      step2_q1: e.detail.value
    })
  },
  radioChange2(e) {
    this.setData({
      step2_q2: e.detail.value
    })
  },
  radioChange3(e) {
    this.setData({
      step2_q3: e.detail.value
    })
    if (e.detail.value == 1) {
      this.setData({
        decide: 1
      })
    }
  },
  InputSpecialCondition1: function (e) {
    this.setData({
      step2_q3_detail: e.detail.value
    })
  },
  radioChange4(e) {
    this.setData({
      step2_q4: e.detail.value
    })
    if (e.detail.value == 1) {
      this.setData({
        decide: 1
      })
    }
  },
  InputSpecialCondition2: function (e) {
    this.setData({
      step2_q4_detail: e.detail.value
    })
  },
  radioChange5(e) {
    this.setData({
      step2_q5: e.detail.value
    })
    if (e.detail.value == 1) {
      this.setData({
        decide: 1
      })
    }
  },
  InputSpecialCondition3: function (e) {
    this.setData({
      step2_q5_detail: e.detail.value
    })
  },
  radioChange6(e) {
    this.setData({
      step2_q6: e.detail.value
    })
  },
  radioChange7(e) {
    this.setData({
      step2_q7: e.detail.value
    })
  },
  radioChange8(e) {
    this.setData({
      step2_q8: e.detail.value
    })
  },
  radioChange9(e) {
    this.setData({
      step2_q9: e.detail.value
    })
  },
  radioChange10(e) {
    this.setData({
      step2_q10: e.detail.value
    })
    if (e.detail.value == 1) {
      this.setData({
        decide: 1
      })
    }
  },
  InputSpecialCondition4: function (e) {
    this.setData({
      step2_q10_detail: e.detail.value
    })
  },
  radioChange11(e) {
    this.setData({
      step2_q11: e.detail.value
    })
    if (e.detail.value == 1) {
      this.setData({
        decide: 1
      })
    }
  },
  InputSpecialCondition5: function (e) {
    this.setData({
      step2_q11_detail: e.detail.value
    })
  },
  radioChange12(e) {
    this.setData({
      step2_q12: e.detail.value
    })
  },
  radioChange13(e) {
    this.setData({
      step2_q13: e.detail.value
    })
  },
  radioChange14(e) {
    this.setData({
      step2_q14: e.detail.value
    })
    if (e.detail.value == 1) {
      this.setData({
        decide: 1
      })
    }
  },
  InputSpecialCondition6: function (e) {
    this.setData({
      step2_q14_detail: e.detail.value
    })
  },
  InputSpecialCondition7: function (e) {
    this.setData({
      step2_q15: e.detail.value
    })
  },
  //上一项按钮
  toBackPage() {
    wx.navigateBack({
      delta: 1,
    })
    // ({
    //   url: '/pages/PrimarySuccessInfo/index',
    // })
  },
  //
  // pan() {
  //   let that = this;
  //   if (that.data.step2_q3 == 1 && that.data.step2_q3_detail == '') {
  //     wx.showToast({
  //       title: '请填写手术史的具体情况',
  //       icon: 'none'
  //     })
  //   } else if (that.data.step2_q4 == 1 && that.data.step2_q4_detail == '') {
  //     wx.showToast({
  //       title: '请描述骨折史、关节脱臼史、头颅摔伤史的具体情况',
  //       icon: 'none'
  //     })
  //   } else if (that.data.step2_q5 == 1 && that.data.step2_q5_detail == '') {
  //     wx.showToast({
  //       title: '请描述结石病史的具体情况',
  //       icon: 'none'
  //     })
  //   }
  //   else if (that.data.step2_q10 == 1 && that.data.step2_q10_detail == '') {
  //     wx.showToast({
  //       title: '请描述肝炎病史的具体情况',
  //       icon: 'none'
  //     })
  //   }
  //   else if (that.data.step2_q11 == 1 && that.data.step2_q11_detail == '') {
  //     wx.showToast({
  //       title: '请描述晕厥或昏迷史的具体情况',
  //       icon: 'none'
  //     })
  //   }
  //   else if (that.data.step2_q14 == 1 && that.data.step2_q14_detail == '') {
  //     wx.showToast({
  //       title: '请描述本人及父系、母系三代亲属精神病史的具体情况',
  //       icon: 'none'
  //     })
  //   }
  //   else{
  //     that.A()
  //   }
  // },
  //下一项按钮
  toNextPage() {
    let that = this;
    if (that.data.step2_q1 == '') {
      wx.showToast({
        title: '请选择是否有角膜塑形镜（OK镜）佩戴史',
        icon: 'none'
      })
    } else if (that.data.step2_q2 == '') {
      wx.showToast({
        title: '请选择是否有角膜屈光矫正手术史',
        icon: 'none'
      })
    } else if (that.data.step2_q3 == '') {
      wx.showToast({
        title: '请选择是否有手术史',
        icon: 'none'
      })
    }  else if (that.data.step2_q3_detail == '') {
      wx.showToast({
        title: '请填写有手术史具体情况',
        icon: 'none'
      })
    } else if (that.data.step2_q4 == '') {
      wx.showToast({
        title: '请选择是否有骨折史、关节脱臼史、头颅摔伤史',
        icon: 'none'
      })
    } else if (that.data.step2_q4_detail == '') {
      wx.showToast({
        title: '请填写是否有骨折史、关节脱臼史、头颅摔伤史具体情况',
        icon: 'none'
      })
    }  else if (that.data.step2_q5 == '') {
      wx.showToast({
        title: '请选择是否有结石病史',
        icon: 'none'
      })
    } else if (that.data.step2_q5_detail == '') {
      wx.showToast({
        title: '请填写结石病史具体情况',
        icon: 'none'
      })
    } else if (that.data.step2_q6 == '') {
      wx.showToast({
        title: '请选择是否有结核病史（肺结核、肠结核、淋巴结核等）',
        icon: 'none'
      })
    } else if (that.data.step2_q7 == '') {
      wx.showToast({
        title: '请选择是否有肾炎、肾病病史',
        icon: 'none'
      })
    } else if (that.data.step2_q8 == '') {
      wx.showToast({
        title: '请选择是否有支气管哮喘病史',
        icon: 'none'
      })
    } else if (that.data.step2_q9 == '') {
      wx.showToast({
        title: '请选择是否有消化系统溃疡病史',
        icon: 'none'
      })
    } else if (that.data.step2_q10 == '') {
      wx.showToast({
        title: '请选择是否有肝炎病史',
        icon: 'none'
      })
    } else if (that.data.step2_q10_detail == '') {
      wx.showToast({
        title: '请填入肝炎具体情况',
        icon: 'none'
      })
    }  else if (that.data.step2_q11 == '') {
      wx.showToast({
        title: '请选择是否有晕厥或昏迷史',
        icon: 'none'
      })
    } else if (that.data.step2_q11_detail == '') {
      wx.showToast({
        title: '请填写昏厥或昏迷史具体情况',
        icon: 'none'
      })
    }  else if (that.data.step2_q12 == '') {
      wx.showToast({
        title: '请选择是否有过敏性鼻炎病史',
        icon: 'none'
      })
    } else if (that.data.step2_q13 == '') {
      wx.showToast({
        title: '请选择是否有晕车、晕船史',
        icon: 'none'
      })
    } else if (that.data.step2_q14 == '') {
      wx.showToast({
        title: '请选择是否有本人及父系、母系三代亲属精神病史',
        icon: 'none'
      })
    } else if (that.data.step2_q14_detail == '') {
      wx.showToast({
        title: '请填写是否有本人及父系、母系三代亲属精神病史具体情况',
        icon: 'none'
      })
    } else {
      that.A()
    }
    // else {
    //   if (that.data.step2_q3 == 1) {
    //     if (that.data.step2_q3_detail == '') {
    //       wx.showToast({
    //         title: '请描述手术史的具体情况',
    //         icon: 'none'
    //       })
    //     } else {
    //       if (that.data.step2_q4 == 1) {
    //         if (that.data.step2_q4_detail == '') {
    //           wx.showToast({
    //             title: '请描述骨折史、关节脱臼史、头颅摔伤史的具体情况',
    //             icon: 'none'
    //           })
    //         } else {
    //           if (that.data.step2_q5 == 1) {
    //             if (that.data.step2_q5_detail == '') {
    //               wx.showToast({
    //                 title: '请描述结石病史的具体情况',
    //                 icon: 'none'
    //               })
    //             } else {
    //               if (that.data.step2_q10 == 1) {
    //                 if (that.data.step2_q10_detail == '') {
    //                   wx.showToast({
    //                     title: '请描述肝炎病史的具体情况',
    //                     icon: 'none'
    //                   })
    //                 } else {
    //                   if (that.data.step2_q11 == 1) {
    //                     if (that.data.step2_q11_detail == '') {
    //                       wx.showToast({
    //                         title: '请描述晕厥或昏迷史的具体情况',
    //                         icon: 'none'
    //                       })
    //                     } else {
    //                       if (that.data.step2_q14 == 1) {
    //                         if (that.data.step2_q14_detail == '') {
    //                           wx.showToast({
    //                             title: '请描述本人及父系、母系三代亲属精神病史的具体情况',
    //                             icon: 'none'
    //                           })
    //                         } else {
    //                           this.A();
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
    //   } else {
    //     if (that.data.step2_q4 == 1) {
    //       if (that.data.step2_q4_detail == '') {
    //         wx.showToast({
    //           title: '请描述骨折史、关节脱臼史、头颅摔伤史的具体情况',
    //           icon: 'none'
    //         })
    //       } else {
    //         if (that.data.step2_q5 == 1) {
    //           if (that.data.step2_q5_detail == '') {
    //             wx.showToast({
    //               title: '请描述结石病史的具体情况',
    //               icon: 'none'
    //             })
    //           } else {
    //             if (that.data.step2_q10 == 1) {
    //               if (that.data.step2_q10_detail == '') {
    //                 wx.showToast({
    //                   title: '请描述肝炎病史的具体情况',
    //                   icon: 'none'
    //                 })
    //               } else {
    //                 if (that.data.step2_q11 == 1) {
    //                   if (that.data.step2_q11_detail == '') {
    //                     wx.showToast({
    //                       title: '请描述晕厥或昏迷史的具体情况',
    //                       icon: 'none'
    //                     })
    //                   } else {
    //                     if (that.data.step2_q14 == 1) {
    //                       if (that.data.step2_q14_detail == '') {
    //                         wx.showToast({
    //                           title: '请描述本人及父系、母系三代亲属精神病史的具体情况',
    //                           icon: 'none'
    //                         })
    //                       } else {
    //                         this.A();
    //                       }
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     } else {
    //       if (that.data.step2_q5 == 1) {
    //         if (that.data.step2_q5_detail == '') {
    //           wx.showToast({
    //             title: '请描述结石病史的具体情况',
    //             icon: 'none'
    //           })
    //         } else {
    //           if (that.data.step2_q10 == 1) {
    //             if (that.data.step2_q10_detail == '') {
    //               wx.showToast({
    //                 title: '请描述肝炎病史的具体情况',
    //                 icon: 'none'
    //               })
    //             } else {
    //               if (that.data.step2_q11 == 1) {
    //                 if (that.data.step2_q11_detail == '') {
    //                   wx.showToast({
    //                     title: '请描述晕厥或昏迷史的具体情况',
    //                     icon: 'none'
    //                   })
    //                 } else {
    //                   if (that.data.step2_q14 == 1) {
    //                     if (that.data.step2_q14_detail == '') {
    //                       wx.showToast({
    //                         title: '请描述本人及父系、母系三代亲属精神病史的具体情况',
    //                         icon: 'none'
    //                       })
    //                     } else {
    //                       this.A();
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       } else {
    //         if (that.data.step2_q10 == 1) {
    //           if (that.data.step2_q10_detail == '') {
    //             wx.showToast({
    //               title: '请描述肝炎病史的具体情况',
    //               icon: 'none'
    //             })
    //           } else {
    //             if (that.data.step2_q11 == 1) {
    //               if (that.data.step2_q11_detail == '') {
    //                 wx.showToast({
    //                   title: '请描述晕厥或昏迷史的具体情况',
    //                   icon: 'none'
    //                 })
    //               } else {
    //                 if (that.data.step2_q14 == 1) {
    //                   if (that.data.step2_q14_detail == '') {
    //                     wx.showToast({
    //                       title: '请描述本人及父系、母系三代亲属精神病史的具体情况',
    //                       icon: 'none'
    //                     })
    //                   } else {
    //                     this.A();
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         } else {
    //           if (that.data.step2_q11 == 1) {
    //             if (that.data.step2_q11_detail == '') {
    //               wx.showToast({
    //                 title: '请描述晕厥或昏迷史的具体情况',
    //                 icon: 'none'
    //               })
    //             } else {
    //               if (that.data.step2_q14 == 1) {
    //                 if (that.data.step2_q14_detail == '') {
    //                   wx.showToast({
    //                     title: '请描述本人及父系、母系三代亲属精神病史的具体情况',
    //                     icon: 'none'
    //                   })
    //                 } else {
    //                   this.A();
    //                 }
    //               } else {
    //                 this.A();
    //               }
    //             }
    //           } else {
    //             if (that.data.step2_q14 == 1) {
    //               if (that.data.step2_q14_detail == '') {
    //                 wx.showToast({
    //                   title: '请描述本人及父系、母系三代亲属精神病史的具体情况',
    //                   icon: 'none'
    //                 })
    //               } else {
    //                 this.A();
    //               }
    //             } else {
    //               this.A();
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }

    // }

  },
  A: function () {
    let that = this;
    let PrimarySuccessInfo = wx.getStorageSync('PrimarySuccessInfo');
    PrimarySuccessInfo.step2_q1 = that.data.step2_q1;
    PrimarySuccessInfo.step2_q2 = that.data.step2_q2;
    PrimarySuccessInfo.step2_q3 = that.data.step2_q3;
    PrimarySuccessInfo.step2_q3_detail = that.data.step2_q3_detail;
    PrimarySuccessInfo.step2_q4 = that.data.step2_q4;
    PrimarySuccessInfo.step2_q4_detail = that.data.step2_q4_detail;
    PrimarySuccessInfo.step2_q5 = that.data.step2_q5;
    PrimarySuccessInfo.step2_q5_detail = that.data.step2_q5_detail;
    PrimarySuccessInfo.step2_q6 = that.data.step2_q6;
    PrimarySuccessInfo.step2_q7 = that.data.step2_q7;
    PrimarySuccessInfo.step2_q8 = that.data.step2_q8;
    PrimarySuccessInfo.step2_q9 = that.data.step2_q9;
    PrimarySuccessInfo.step2_q10 = that.data.step2_q10;
    PrimarySuccessInfo.step2_q10_detail = that.data.step2_q10_detail;
    PrimarySuccessInfo.step2_q11 = that.data.step2_q11;
    PrimarySuccessInfo.step2_q11_detail = that.data.step2_q11_detail;
    PrimarySuccessInfo.step2_q12 = that.data.step2_q9;
    PrimarySuccessInfo.step2_q13 = that.data.step2_q9;
    PrimarySuccessInfo.step2_q14 = that.data.step2_q9;
    PrimarySuccessInfo.step2_q14_detail = that.data.step2_q14_detail;
    PrimarySuccessInfo.step2_q15 = that.data.step2_q9;
    wx.setStorageSync('PrimarySuccessInfo', PrimarySuccessInfo)
    wx.navigateTo({
      url: '/pages/PrimarySuccessInfoThree/index',
    })
  },
  //下一项按钮
  submit() {
    wx.navigateTo({
      url: '../MiddleStudentIndex/index',
    })
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
          step2_q1: r.data.step2_q1,
          step2_q2: r.data.step2_q2,
          step2_q3: r.data.step2_q3,
          step2_q3_detail: r.data.step2_q3_detail,
          step2_q4: r.data.step2_q4,
          step2_q4_detail: r.data.step2_q4_detail,
          step2_q5: r.data.step2_q5,
          step2_q5_detail: r.data.step2_q5_detail,
          step2_q6: r.data.step2_q6,
          step2_q7: r.data.step2_q7,
          step2_q8: r.data.step2_q8,
          step2_q9: r.data.step2_q9,
          step2_q10: r.data.step2_q10,
          step2_q10_detail: r.data.step2_q10_detail,
          step2_q11: r.data.step2_q11,
          step2_q11_detail: r.data.step2_q11_detail,
          step2_q12: r.data.step2_q12,
          step2_q13: r.data.step2_q13,
          step2_q14: r.data.step2_q14,
          step2_q14_detail: r.data.step2_q14_detail,
          step2_q15: r.data.step2_q15,
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
    that.setData({
      PrimarySuccessInfo: wx.getStorageSync('PrimarySuccessInfo')
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