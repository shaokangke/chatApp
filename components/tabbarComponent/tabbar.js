const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    "color": "#868686",
    "selectedColor": "#6bba00",
    "backgroundColor": "#FFFFFF",
    "list": [
      {
        "pagePath": "/pages/work/work",
        "iconPath": "/imgs/work.png",
        "selectedIconPath": "/imgs/select-work.png",
        "text": "工作"
      },
      {
        "pagePath": "/pages/assistant/assistant",
        "iconPath": "/imgs/assistant.png",
        "selectedIconPath": "/imgs/select-assistant.png",
        "text": "助手"
      },{
        "pagePath": "/pages/common/common",
        "iconPath": "/imgs/add.png",
        bulge:true,
        "selectedIconPath": "/imgs/select-add.png",
        "text": "常用"
      },{
        "pagePath": "/pages/analyse/analyse",
        "iconPath": "/imgs/analyse.png",
        "selectedIconPath": "/imgs/select-analyse.png",
        "text": "分析"
      },{
        "pagePath": "/pages/mine/mine",
        "iconPath": "/imgs/mine.png",
        "selectedIconPath": "/imgs/select-mine.png",
        "text": "我"
      }
    ]
  },
  ready: function() {
    this.setData({
      selected: app.globalData.selected
    },()=>{
      console.log(this.data.selected);
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      console.log(e);
      const data = e.currentTarget.dataset;
      const url = data.path;
      app.globalData.selected = data.index;
      wx.switchTab({url})
    }
  }
})