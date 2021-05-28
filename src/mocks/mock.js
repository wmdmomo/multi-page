// 首先引入Mock
const Mock = require('mockjs')
let url = require('url')
let path = require('path')
module.exports = function(req, res, next) {
    let regTest = /^\/dev\/(page1|page2)\//
    let pathname = url.parse(req.url).pathname
    function response(data) {
        try {
            res.json(data)
        } catch (e) {
            console.log(e)
            return
        }
    }
    // /page1它是没有找的
    //  /page1/info 我是只想让他显示页面内容 但是他想去调接口
    // 所以接口名字还是不要和页面一样了
    console.log(pathname,"##############")
    if (regTest.test(pathname)) {
        console.log(pathname)
        let filePath = path.normalize('../mocks/page' + pathname)
        let data = require(filePath)
        Mock.mock(pathname, req.method, data)
        setTimeout(function() {
            response(data)
        }, 300)
    } else {
        next()
    }
}
