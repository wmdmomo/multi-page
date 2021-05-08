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