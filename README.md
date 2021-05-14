# learn-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 多页面的配置
有一个global的使用方式
```JS
glob.sync('./src/pages/**/main.js'）
```
关于glob的使用方式 可以看这个链接
[glob正则表达](https://www.npmjs.com/package/glob)
[匹配规则](https://github.com/gcddblue/multi-pages)
这样子的话 pages下文件夹中的文件夹中的``main.js`` 也是会被匹配到的
但是如果加一个``**?``
就是只会匹配到一层文件夹下的main.js
关于vue.config.js中配置多页面的要求看下面的链接
[配置pages](https://cli.vuejs.org/zh/config/#filenamehashing)

#### v-panel 的使用
它的宽度 是在属性width里面 默认是900px
所以 你在class

#### 使用less
- 设置 ``属性值``变量
对一个重复出现的css值
可以用@name:值
在下面的属性里直接用 @name这个值
- ``选择器``变成一个变量 或者``属性变量``
@{}加一个大括号
``` less
这样子的话 设置的pointer只会对wrap2下面的元素生效 因为&:伪类指的就是它的上层父元素
<style lang="less" scoped>
@color:#999;
.wrap-1 .wrap-2 {
  .wrap-3 {
    width: 20px;
    height: 20px;
    background-color: @color;
  }
  .wrap-4 {
    color: yellow;
  }
//   这样的话 也是它的父级下面的color为red
// 相当于 wrap1 wrap2 wrap4 -->color：yellow
// wrap1 wrap2--->color:red
// 所以还是上面的权重值比较高
  &{
    color: red;
  }
}
</style>
```

```less
<div class="demo">
    <div class="demo-title"></div>
</div>

// 样式设置成下面这个样子
// 编译出来的是 demo-title....

.demo {
  &-title {
    width: 40px;
    height: 40px;
    background-color: aquamarine;
  }
}
// 如果改成 & &-title
// 这样子的话编译出来的就是 .demo .demo-title 有嵌套了
```
##### table的使用

##### mock在项目里面的用法 vea项目里面的解析
- path.normalize(path)
它会规范化给定的path 解析``..``和 ``.``片段
##### express的使用
##### 框架模板自动机的使用
