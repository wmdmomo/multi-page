const glob = require('glob')
let mock = require('./src/mocks/mock')
function getEntry(url) {
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
        // var uu=`${urlArr[0]}/${urlArr[1]?urlArr[1]+'/':''}`
        entrys[`${urlArr.join('/')}`] = {
            entry: item,
            template: './src/pages/index/index.html',
            // 刚才试出来这个是只有build才会运行啊
        }
    })
    return entrys
}
let pages = getEntry('./src/pages/**/main.js')
console.log(pages)
module.exports = {
    pages,
    chainWebpack: (config) => {
        config.resolve.set('fallback', { path: require.resolve('path-browserify') })
    },
    devServer: {
        before(app) {
            // 这个app就是一个express
            // 加载本地数据文件
            app.use(mock)
        }
    }
}
