// 首先引入Mock
const Mock = require('mockjs');
let url = require('url')
let path = require('path')

module.exports = function (req, res, next) {
    let regTest = /^\/(page1|page2)\//
    let pathname = url.parse(req.url).pathname
    console.log('tttttttttt')
    function response(data, body) {
        // console.log(data);
        try {
            res.status(data.statusCode).set({
                'Content-Length': Buffer.byteLength(body),
                'Content-Type': 'application/json'
            })
            // res.setHeader(''+data.statusCode, {
            //     'Content-Length': Buffer.byteLength(body),
            //     'Content-Type': 'application/json'
            // });
            res.end(body);
        } catch (e) {
            console.log(e);
            return;
        }
    }

    if (regTest.test(pathname)) {
        console.log('eeeeeeeeeeeeee')
        let filePath = path.normalize('../mock/page' + pathname)
        console.log(filePath)
        let data = require(filePath)
        data = Mock.mock(data)
       
        let body = JSON.stringify(data.body);
        setTimeout(function () {
            response(data, body);
        }, 300);

    } else {
        next()
    }

}

