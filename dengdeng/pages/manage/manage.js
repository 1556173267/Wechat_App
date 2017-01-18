// pages/manage/manage.js
var app = getApp()
Page({
  data:{
      modalHidden: true,
      username:'登录/注册',
      phone_b:'手机绑定',
      login_b:'登录'
      
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
        //    wx.setNavigationBarTitle( {
        //     title: this.data.dataList.name
        // })
    console.log(wx)
  },
  // 联系客服
   call_Customer:function(){
       this.setData({
         modalHidden: false
    })

    
  },
    // 拨打电话
   call_number:function(){
       this.setData({
         modalHidden: true
    })
     wx.makePhoneCall({
      phoneNumber: ' 400-9900-635', //此号码并非真实电话号码，仅用于测试
      success:function(){
        console.log("拨打电话成功！")
      },
      fail:function(){
        console.log("拨打电话失败！")
      }
    })

  },
     // 登录与退出登录按钮
     login:function(){
      //  console.log("按钮1111");
      if(app.globalData.userinfo==null){
        console.log("按钮1111");
          wx.navigateTo({
            url: '../login/login',
            })
      }else{
            console.log("按钮2222");
            app.globalData.userinfo =null;
            wx.redirectTo({
            url: '../home/home',
            });
            //退出登录并清空用户全局信息
            // this.setData({username:'登录/注册',phone_b:'绑定手机',login_b:'登录'});
      }
  },
   modalChange: function(e) {
    this.setData({
      modalHidden: true
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    //登录后用户信息不为空的话
      if(app.globalData.userinfo!=null){
             this.setData({username:app.globalData.userinfo.inputValue1,phone_b:'解绑手机',login_b:'退出登录'});
             
     }else{
             this.setData({username:'登录/注册',phone_b:'绑定手机',login_b:'登录'});
     }
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})