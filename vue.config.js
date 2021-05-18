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
        entrys[`${urlArr.join('/')}`] = {
            entry: item
        }
    })
    return entrys
}
let pages = getEntry('./src/pages/**/main.js')

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
