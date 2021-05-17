const glob = require('glob')
const express = require('express')
// var path = require('path')
const app = express()
// const webpackConfig = require("@vue/cli-service/webpack.config.js");
// const webpack = require('webpack')
let mock = require('./src/mocks/mock')
app.use(mock)
console.log(app)
// var opn = require('opn')

// var devPath = path.resolve(__dirname, './src/mocks')
// console.log(devPath)

function getEntry(url) {
    // console.log(process.argv)
    let entrys = {}
    glob.sync(url).forEach((item) => {
        let urlArr
        for (let i = 3; i < 9; i++) {
            urlArr = item.split('/').splice(-i)
            if (urlArr[0] === 'pages') {
                urlArr = item.split('/').splice(-(i - 1))
                break
            }
        }
        urlArr.pop()
        console.log(item)
        entrys[`${urlArr.join('/')}`] = {
            entry: item
        }
    })
    return entrys
}
// var server = require('http').createServer(app);
let pages = getEntry('./src/pages/**/main.js')

module.exports = {
    pages,
    chainWebpack: (config) => {
        // console.log(config)
        config.resolve.set('fallback', { path: require.resolve('path-browserify') })
        // config.resolve.fallback.set('path', require.resolve('path-browserify'))
    },
    // devServer:{
    //     before(app) {
    //         app.get(/^\/api\/(page1|page2)/, function(req, res) {
    //             console.log('url:' + req.url)
    //             var mockPath = path.join(devPath, 'page', '/' + req.url.replace(/\?.+/g, ''))
    //             console.log('$###',mockPath)
    //             // var defaultMockPath = path.join(devPath, 'page', 'default.js');
    //             var data
    //             try {
    //                 // delete require.cache[require.resolve(defaultMockPath)];
    //                 delete require.cache[require.resolve(mockPath)]
    //                 data = require(mockPath)
    //             } catch (e) {
    //                 console.log('yyyyyyyyyy')
    //                 // console.log(mockPath);
    //                 // data = require(defaultMockPath);
    //             }
    //             res.json(data)
    //         })
    //     }
    }

// webpackConfig.pages=pages
// const compiler = webpack(webpackConfig,{pages});
// const devMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
// app.use(devMiddleware(compiler, {
// pages,
// devServer: {
//     open: true,
//     host: 'localhost',
//     port: 8081
// }
// }));
