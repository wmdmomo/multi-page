### 可拖拽面板的组件记录


```JS
事件有如下事件：
1. dragOutside 拖拽完成且drop在区域外部触发
```
```JS
返回document上 以左窗口为起点 (x,y)坐标轴的最顶层的元素
document.elementFromPoint(x, y);
```

##### mouse事件
```js
拖拽是一个 鼠标 按下--->移动--->到松开的过程
mouseup  鼠标松开的事件
mousedown 鼠标按下的事件
```
``` js
event 事件
给一个元素 data-key="value" key就是设置的属性
会在它的 e.target.datset.key 里面找到
要判断这个key存不存在 可以用 
e.getAttribute('data-key') || '';

判断移动的时候是不是超出了 边框
e.pageX 距离整个文档的X方向的距离
e.pageY ...Y...
```

#### 全局组件的注册
1. Dragarea  里面可以加``slot``
2. DragItem
特别要注意的是 如果你在 组件里面的 ``name:'DragItem'``
那么在引用的时候 它是 ``drag-item``
在 组件下面的 ``index.js`` 文件中进行注册
``` JS
import Dragarea from './dragarea.vue'
import DragItem from './dragitem.vue'

Dragarea.install = function (Vue) {
    Vue.component(DragItem.name, DragItem)
    Vue.component(Dragarea.name, Dragarea)
}
export default Dragarea
```
最后在 ``main.js`` 引用
```JS
import Dragarea from './components/index'

Vue.use(Dragarea)
```