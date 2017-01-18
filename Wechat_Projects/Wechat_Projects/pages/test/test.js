
//index.js
//获取应用实例

Page({
  data: {
    // list: [],
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false
  },

  onLoad: function () {
    var that = this
    wx.request({
      url: 'http://app.foodallianceonline.com/',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
         that.setData({
          //  banner: res.data.top,
           list: res.data.top
         })
      }
    })


    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
    
  }
})
