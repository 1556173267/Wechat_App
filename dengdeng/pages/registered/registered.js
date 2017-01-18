// pages/registered/registered.js
Page({
  data:{
      sendcode:"codetext",
      inputValue1:"",
       inputValue2:"",
       password:true,
       code:"",
       is_login:"lgbtn_no",
       src: '../../image/hide_pass.png'
  },

   //账户输入框输入内容
   bindKeyInput: function(e) {
     var that = this
     if (e.detail.value.length==11) {
      //显示清空帐号输入的按钮
        that.setData({
        sendcode:"send_code",
         inputValue1: e.detail.value
      })
       
    }else{
         that.setData({
         sendcode:"codetext",
         inputValue1: e.detail.value
      })
    
    }
   
  },

   //密码输入框输入内容
   bindKeyInput2: function(e) {
     var that = this
     if (e.detail.value.length>=6) {
      //显示清空帐号输入的按钮
        that.setData({
      
         inputValue2: e.detail.value
      })
       
    }else{
        // 密码小于六位
    
    
    }
   
  },
   //查看密码按钮
  viewpass: function() {
      var that = this;
      if(that.data.src=='../../image/viewpass.png'){
          that.setData({
           src: '../../image/hide_pass.png',
            password:true
          })
          console.log(that.data.src)
      }else{
          that.setData({
             src: '../../image/viewpass.png',
              password:false
          })
          console.log(that.data.src)
      }
      
  },
   //验证码输入内容
   bindKeyInput3: function(e) {
     var that = this;
    //  var inputValue1=that.data.inputValue1;
    //  var inputValue2=that.data.inputValue2;
     if (e.detail.value.length>=4) {
      //验证码位数正确就验证
        that.setData({
        // 改变立即注册按钮样式
         is_login:"lgbtn",
         code: e.detail.value
      })
       
    }else{
        // 请输入四位验证码
        that.setData({
        // 改变立即注册按钮样式
         is_login:"lgbtn_no",
         code: e.detail.value
      })
    
    }
   
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})