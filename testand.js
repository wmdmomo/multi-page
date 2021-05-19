var check = false
var arr = [1, 2, 3]
arr.forEach(item => {
    item > 5 && (check = true)
})
console.log(check)
var route = []
route.push({
    path: '/customer/contacter',
    name: 'contacterRoute',
    meta: {
        title: '联系人 - 腾讯企点'
    },
    // component: r => require.ensure([], () => r(require('../../partner/contacter/route.vue')), 'contacter'),
    children: [{
        path: 'customer',
        name: 'fieldsCustomer',
        meta: {
            title: '联系人字段 - 腾讯企点'
        },
        // component: r => require.ensure([], () => {
        //     r(require('../../partner/contacter/fieldsCustomer.vue'));
        // }, 'contacter')
    }, {
        path: 'system',
        name: 'fieldsSystem',
        meta: {
            title: '联系人字段 - 腾讯企点'
        },
        // component: r => require.ensure([], () => {
        //     r(require('../../partner/contacter/fieldsSystem.vue'));
        // }, 'contacter')
    }, {
        path: 'uniq',
        name: 'uniqRule',
        meta: {
            title: '联系人字段 - 腾讯企点'
        },
        // component: r => require.ensure([], () => {
        //     r(require('../../partner/contacter/fieldsUniqRule.vue'));
        // }, 'contacter')
    }]
});
route.push({
    path: '/test',
    name: 'hhh'
})

// 这个函数 就是 你在这是route的时候 children的时候是直接写一个路径的 所以他就是在前面父亲的路径下直接进行的拼接
var getList = function (pre, arr) {
    return arr.map(url => {
        if (url.children && url.children.length) {
            return getList((pre ? pre + '/' : pre) + url.path, url.children);
        }
        else {
            return (pre ? pre + '/' : pre) + url.path;
        }
    })
};
// 还要有一个flat的函数
var flat = function (arr) {
    var arr1 = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            arr1 = arr1.concat(item)
        } else {
            arr1.push(item)
        }
    })
    return arr1

}
// console.log(flat(getList("", route)))
// 这个意思就是 在U2里面设置的route 进行一个数组的形式
// 然后我现在请求的这个路径 如果是在U2路径里面的 就把我的
// checkUI2的标志置为true
flat(getList('', route)).forEach(url => {
    url = url.split(':')[0];
    console.log(url)
    // realReqUrl.indexOf(url) > -1 && (checkUI2 = true);
});

