Page({
  data: {
    items: [], // 长列表数据
    visibleData: [], // 可见区域的数据
  },
  onLoad() {
    this.loadData();
    this.renderVisibleData();
    const Observer = wx.createIntersectionObserver(this)
    Observer.relativeToViewport({
       top: 0,   // 当元素到达顶部触发回调事件
       bottom:0, // 当元素到达底部触发回调事件
    }).observe('.box',(res)=>{ 
        console.log('元素是否在可视范围内',res.intersectionRatio <= 0 ? '否' : '是'   )
    })
  },
  loadData() {
    // 模拟异步获取数据
    setTimeout(() => {
      const newItems = this.generateItems(100);
      this.setData({
        items: newItems,
      });
    }, 1000);
    
  },
  generateItems(count) {
    const newItems = [];
    for (let i = 0; i < count; i++) {
      newItems.push({
        id: i + 1,
        name: `Item ${i + 1}`,
        description: `This is item ${i + 1}`,
      });
    }
    return newItems;
  },
  observeIntersection(entries) {
    const isVisible = entries[0].isIntersecting;
    if (isVisible) {
      this.loadData();
    }
  },
  onReady() {
     // 创建 IntersectionObserver 实例
     const intersectionObserver = wx.createIntersectionObserver(this);

     // 监听列表容器的滚动事件
     intersectionObserver.relativeToViewport({ top: 0, bottom: 0 }).observe('.box', (res) => {
      console.log(res.intersectionRatio);
       if (res.intersectionRatio > 0) {
         // 当列表容器进入视窗时，渲染可见区域的数据
         
         this.renderVisibleData();
       }
     });
     this.data.items.forEach((item,index)=>{
      this.createIntersectionObserver().relativeToViewport.observe(`.box`,res=>{
        console.log(123213);
          if (res.intersectionRatio > 0){
            console.log(res);
          }
      })
  })  
  },
  renderVisibleData() {
    const { items } = this.data;
    // 获取可见区域的起始索引和结束索引
    const { startIndex, endIndex } = this.calculateVisibleRange();
    // 获取可见区域的数据
    const visibleData = items.slice(startIndex, endIndex + 1);
    // 更新数据，渲染可见区域
    this.setData({
      visibleData,
    },()=>{
      console.log(this.data.visibleData);
    });
  },
  calculateVisibleRange() {
    // 计算可见区域的起始索引和结束索引
    // 这里根据你的具体需求来确定可见区域的计算逻辑
    // 返回一个包含 startIndex 和 endIndex 的对象
    // 示例代码：
    const containerHeight = 500; // 列表容器的高度
    const itemHeight = 50; // 每个列表项的高度
    const scrollTop = 100; // 列表容器的滚动距离

    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(startIndex + Math.ceil(containerHeight / itemHeight), this.data.items.length - 1);

    return {
      startIndex,
      endIndex,
    };
  },
});
