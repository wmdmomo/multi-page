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
1. ``npm install art-template --save``


先理一下 vea项目里面对模板自动机使用的流程
有一个``render.js`` 返回 ``artTemplate.render()``
在``viewPath``下面将对应的生成的文件放在了下面

在``dev-server``
在 app.get的时候 他是把数据先require到
再渲染到模板里面？？ 还是说直接是Mock.mock拦截了这个请求？
##### .render(source, data, options)
编译并返回渲染结果
```JS
// tpl是把这个文件里面的数据得到
// html = render(viewPath, data, withLocalVhtml);
// 懂了懂了 就是 TPL是一个模板的index.html 这个模板是在views下面的
//  然后里面要用到locals 和data的数据
// 把locals和data的数据进行传进去！！！
var html = artTemplate.render(tpl, { locals, data })
举个例子 下面这个样子
var html = artTemplate.render('hi, <%=value%>,<%=data.key%>,<%=data.code%>.', {
    value: 'aui',
    data: { key: 134, code: 345 }
})
打印出来就是下面这个样子
hi, aui,134,345.
static 下面的是最开始的原始模板
view下面的是生成的模板 这个模板是 在webpack.dev.conf.js的时候生成的

```
在dev-server里面是这么做的
那么 如果是真的把 这个项目进行打包？？
它又是怎么做的 我没有看到在build里面对模板自动框架做处理的代码



```JS
html = render(viewPath, data, withLocalVhtml);
```
##### dialog的使用
对于dialog使用的时候 点击``确定``按钮
要在达到某些条件的时候 才能出发这个确定的函数的执行
```js
if (this.currentStep === 2) {
    this.flag = false
}else{
    e.preventDefault();
}
```
#### mock + express 的使用方法
只是单独用的mock 它的请求是不会出现在Network
vue.config.js里面的.devServer 与webpack.config.js里面的devServer 是一样的
可以理解成他自己就是一个服务器 所以我之前 const app=express() 端口老是会+1
``` JS
module.exports = {
  //...
  devServer: {
    before: function (app, server, compiler) {
      app.get('/some/path', function (req, res) {
        res.json({ custom: 'response' });
      });
    },
  },
};
或者可以使用中间件
我在mock.js 进行了定义 就是按照请求的路径 去对应的文件夹下面找对应的mock数据
在mock.js 定义了一个函数
把这个函数 写在 devServer.before里面
devServer: {
        before(app) {
            // 这个app就是一个express
            // 加载本地数据文件
            app.use(mock)
        }
}
这样子就可以了
```