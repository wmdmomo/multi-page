var artTemplate = require('art-template')
// html = render(viewPath, data, withLocalVhtml);

// let whiteList = [
//     '/ea/crowd/package/createCustom',
//     '/call/ivr',
//     '/call/customreport/configurator',
//     '/ea/customreport/configurator',
//     '/call/payment/midashi',
//     '/call/guide',
//     '/call/callqq',
//     '/ea/workflow',
//     '/ea/workbench',
//     '/ea/UI2.0'
// ]
// var fs = require('fs')
// var path = require('path')
// var req = '/ea/workflow/activity/test?id=3'
// var viewPath = path.join(__dirname, './src/mocks')
// var locals = JSON.parse(fs.readFileSync(path.join(viewPath, 'locals.json')).toString())
// Object.assign
// 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
// locals = Object.assign({}, locals.common, locals.local)
// console.log(locals)
// var tpl = fs.readFileSync(path.join(viewPath, '/page/page1/getList.js'), 'utf-8')
// tpl是把这个文件里面的数据得到
// html = render(viewPath, data, withLocalVhtml);
// 懂了懂了 就是 TPL是一个模板的index.html 然后里面要用到locals 和data的数据
// 把locals和data的数据进行传进去！！！

// var html = artTemplate.render(tpl, { locals, data })
var html = artTemplate.render('hi, <%=value%>,<%=data.key%>,<%=data.code%>.', {
    value: 'aui',
    data: { key: 134, code: 345 }
})
// console.log(html)
var htmlTemplate = `!!raw-loader!./static/page.html`
console.log(htmlTemplate)
// console.log(tpl)
// console.log(req.split('/'))
// var realReqUrl = req.replace(/\?.+/g, '')
// console.log(realReqUrl)
// let matchedPrefix = whiteList.filter((prefix) => {
//     return realReqUrl.search(prefix) === 0
// })
// console.log(matchedPrefix)
