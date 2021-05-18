// 首先引入Mock
const Mock = require('mockjs')
let url = require('url')
let path = require('path')
module.exports = function(req, res, next) {
    let regTest = /^\/(page1|page2)\//
    let pathname = url.parse(req.url).pathname
    function response(data) {
        try {
            res.json(data)
        } catch (e) {
            console.log(e)
            return
        }
    }
    if (regTest.test(pathname)) {
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
