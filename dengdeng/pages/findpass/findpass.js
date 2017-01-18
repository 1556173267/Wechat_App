// pages/findpass/findpass.js
Page({
  data: {
    audioAction: {

    },
    movies:''
  },
  // 接口apiapi:http://json.bmbstack.com/playingList
  getnew: function () {
   var that = this
    wx.request({
      url: 'http://json.bmbstack.com/playingList', //接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data);
        that.setData({
           movies:res.data
        })
         console.log(that.data.movies);
      }
    })
  
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})