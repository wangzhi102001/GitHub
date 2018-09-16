// pages/posts/posts.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var posts_content = [
      {
        date: "Sep 18 2016",
        title: "张三李四王五",
        post_img: "/images/posts/cat.png",
        author_img: "/images/posts/avatar/1.png",
        content: "ahidahkldjla立即受到了开发老树开花菲利克斯很快乐烦死了烦水利科技发生了纠纷几时放假上来就发生了纠纷生理健康",
        view_num : "112",
        collect_num :"96",
      },
      {
        date: "Sep 12 2016",
        title: "wqeqweqeqeq五",
        post_img: "/images/posts/crab.png",
        author_img: "/images/posts/avatar/2.png",
        content: "asahdasdhjajkdah撒了姐姐啊来了多久啊垃圾生了纠纷几时放假上来就发生了纠纷生理健康",
        view_num :"112",
        collect_num : "96",
      }
    ]
    this.setData({posts_key:posts_content});
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