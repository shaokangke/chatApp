// pages/common/common.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    name:'',
    list:[
      {name:'功能1'},
      {name:'功能2'},
      {name:'功能3'},
      {name:'功能4'},
      {name:'功能5'}
    ],
    listBox:[
      {name:'功能1'},
      {name:'功能2'},
      {name:'功能3'},
      {name:'功能4'},
      {name:'功能5'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarRightButton({hide: true})
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000000',
    })
    var listBox = [];
    for (var i = 0; i < 12; i++) {
      var letter = String.fromCharCode(65 + i);
      var person = { name: "功能 " + letter};
      listBox.push(person);
    }
this.setData({
  listBox
},()=>{
  const listBox = this.data.listBox;
    listBox[listBox.length - 1].isLast = true;
    listBox[listBox.length - 2].isLast = true;
    this.setData({ listBox });
})
  
  },

  onClickShow(e) {
    const name = e.currentTarget.dataset.type.name
    this.setData({ show: true,name });
  },

  onClickHide(e) {
    console.log(e);
    if (e.target.dataset.target !== 'content') {
      this.setData({
        show: false
      });
    }
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

  }
})