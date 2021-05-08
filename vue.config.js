const glob = require('glob')

function getEntry(url) {
    // console.log(process.argv)
    let entrys = {}
    glob.sync(url).forEach(item => {
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
console.log(pages)
module.exports = {
    pages
}