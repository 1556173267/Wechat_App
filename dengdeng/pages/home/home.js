//home.js
//获取应用实例
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
    username:'昵称',
    login_m:'登录'
   
  },
  onLoad: function () {
    // 跳转传来的数据
    // console.log(app.globalData.userinfo.inputValue1);
    //  this.setData({username:app.globalData.userinfo.inputValue1})
    //  if(this.data.username!='昵称'){
    //          this.setData({login_m:'退出登录'})
    //  }else{
    //          this.setData({login_m:'登录'})
    //  }
  },

  onShow:function(){
    //  console.log(app.globalData.userinfo.inputValue1);
    
     if(app.globalData.userinfo!=null){
             this.setData({login_m:'退出登录',username:app.globalData.userinfo.inputValue1});
             
     }else{
             this.setData({login_m:'登录', username:'昵称'})
     }
  },
    // 登录与退出登录
  login:function(){
     console.log("home页面,用户信息"+app.globalData.userinfo);
    if(app.globalData.userinfo==null){
         wx.navigateTo({
           url: '../login/login',
          })
    }else{
          wx.navigateTo({
           url: '../home/home',
          });
          //退出登录并清空用户全局信息
           app.globalData.userinfo =null;
    }
  },
})