//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    iconType1: '',
    password: true,
    inputValue1: '',
    inputValue2: '',
    idclass: 'idicon_h',
    is_login: 'lgbtn_no',
    src: '../../image/hide_pass.png'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //账户输入框输入内容
  bindKeyInput: function (e) {
    var that = this
    if (e.detail.value !== '') {
      //显示清空帐号内容的按钮
      that.setData({
        idclass: "idicon_s",
        inputValue1: e.detail.value
      })
    } else {
      that.setData({
        idclass: "idicon_h",
        inputValue1: e.detail.value
      })
    }
    var inputValue1 = that.data.inputValue1;
    var inputValue2 = that.data.inputValue2;
    if (inputValue1 && inputValue2 != '') {
      //  帐号密码都不为空可以登录
      that.setData({
        is_login: 'lgbtn'
      })
    } else {
      that.setData({
        is_login: 'lgbtn_no'
      })
    }

  },

  //密码输入框输入内容
  bindKeyInput2: function (e) {
    var that = this
    if (e.detail.value !== '') {
      that.setData({
        inputValue2: e.detail.value
      })
    }
    var inputValue1 = that.data.inputValue1;
    var inputValue2 = e.detail.value;
    if (inputValue1 && inputValue2 != '') {
      //帐号密码都不为空可以登录
      that.setData({
        is_login: 'lgbtn'
      })
    } else {
      that.setData({
        is_login: 'lgbtn_no'
      })
    }
  },
  //查看密码按钮
  viewpass: function () {
    var that = this;
    if (that.data.src == '../../image/viewpass.png') {
      that.setData({
        src: '../../image/hide_pass.png',
        password: true,
      })
      console.log(that.data.src)
    } else {
      that.setData({
        src: '../../image/viewpass.png',
        password: false,
      })
      console.log(that.data.src)
    }

  },
  // 清空账号的内容
  cleanid: function () {
    var that = this
    that.setData({
      inputValue1: '',
      idclass: "idicon_h",
      is_login: 'lgbtn_no'
    })
    console.log(that.data.inputValue1)
  },
  // 注册按钮,跳转到注册页面findpass
  registe: function () {
    wx.navigateTo({
      url: '../registered/registered'
    })
  },

  // 登录事件
  loginbtn: function () {
   
    //判断用户名密码正确就跳转
    
 
   if(this.data.is_login=='lgbtn_no'){
         console.log("不可登录");
   }else{
       wx.navigateTo({
       url: '../home/home'
      
    })
       // 设置用户全局信息
      app.globalData.userinfo = {inputValue1:this.data.inputValue1,inputValue2:this.data.inputValue2}
       console.log("登录ing,用户信息"+app.globalData.userinfo);
   }
    
  },
    // 找回密码
  findpass: function () {
    wx.navigateTo({
      url: '../findpass/findpass'
    })
  },
  //快捷登录事件

  onLoad: function () {
    console.log('onLoad');
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //      userInfo: userInfo
    //   })
    //      console.log(that.data.userInfo)
    // })
  }
})
