// pages/work/work.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
 //tabbar
 tabbar: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
   //定义配置参数
 globalData: {
  isIphoneX: false,
  tabBar: {
    "backgroundColor": "#ffffff",
    "color": "#979795",
    "selectedColor": "#1c1c1b",
    "list": [
        {
          "pagePath": "pages/work/work",
          "iconPath": "imgs/work.png",
          "selectedIconPath": "imgs/select-work.png",
          "text": "工作"
        },
        {
          "pagePath": "pages/assistant/assistant",
          "iconPath": "imgs/assistant.png",
          "selectedIconPath": "imgs/select-assistant.png",
          "text": "助手"
        },{
          "pagePath": "pages/common/common",
          "iconPath": "imgs/add.png",
          "selectedIconPath": "imgs/select-add.png",
          "text": "常用"
        },{
          "pagePath": "pages/analyse/analyse",
          "iconPath": "imgs/analyse.png",
          "selectedIconPath": "imgs/select-analyse.png",
          "text": "分析"
        },{
          "pagePath": "pages/mine/mine",
          "iconPath": "imgs/mine.png",
          "selectedIconPath": "imgs/select-mine.png",
          "text": "我"
        }
      ]
  }
}
})