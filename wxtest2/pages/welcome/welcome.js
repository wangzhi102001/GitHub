Page({
  data: {
    motto: 'Hello World',

  },
  //事件处理函数
  bindViewTap: function (event) {
    wx.navigateTo({
      url: '../posts/post'
    });

    // wx.redirectTo({
    //   url: '../posts/post'
    // });

    // wx.navigateTo({
    //   url: 'String',
    //   success: function(res){
    //     // success
    //   },
    //   fail: function() {
    //     // fail
    //   },
    //   complete: function() {
    //     // complete成功失败都执行
    //   }
    // });