// pages/Seller/Seller.js
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      // '../../image/tab1.png',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    icon_b: 'bottom_icon',
    icon_r: 'weui-cell__ft_in-access',
    fx_data: 'data_h',
    username: '昵称',
    login_m: '登录'

  },
  // 查看分销数据
  view_fenxiao: function () {
    console.log("2");
    if (this.data.icon_r == "weui-cell__ft_in-access") {
      this.setData({
        icon_r: '',
        icon_b: 'bottom_icon_s',
        fx_data: 'data_s'
      })
    } else {
      this.setData({
        icon_r: 'weui-cell__ft_in-access',
        icon_b: 'bottom_icon',
        fx_data: 'data_h'

      })
    }

  },

  onLoad: function () {
    console.log('onLoad')

  },
  // 登录与退出登录按钮
  login: function () {
     console.log("seller页面,用户信息"+app.globalData.userinfo);
    if (app.globalData.userinfo == null) {
      wx.navigateTo({
        url: '../login/login',
      })
    } else {
      wx.navigateTo({
        url: '../seller/seller',
      });
      //退出登录并清空用户全局信息
      app.globalData.userinfo = null;
    }
  },
  // 页面显示的时候
  onShow: function () {
    if (app.globalData.userinfo!= null) {
      this.setData({ login_m: '退出登录', username: app.globalData.userinfo.inputValue1 });

    } else {
      this.setData({ login_m: '登录', username: '昵称' })
    }
  }

})