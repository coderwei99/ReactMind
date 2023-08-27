## 项目中学习笔记
1. offsetLeft?
  offsetLeft是距离最近的具有定位的父元素(即position设置为relative|position|fixed),如果一直找不到就一直往上找
  todo: 其余几个位置属性?

2. event中属性currentTarget和target的区别
 currentTarget是实际绑定处理事件的元素 他是始终不变的 无论是不是子组件事件冒泡触发的他的事件  
 target则是实际触发事件的元素 比如说div嵌套div 我们通过事件冒泡 给外层div绑定点击事件 点击内层的那么这个事件拿到的event对象的target是内层(点击的那个div) 而如果我们点击外层的div target则是外层的div元素 在这个过程中
 currentTarget始终是绑定事件的那个元素 不受点击目标的影响.