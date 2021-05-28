// import qidianDA11 from './i'
var qidianDA11 = window.qidianDA11
console.log("**** ",qidianDA11)
export default {
    inserted: function (el) {
        function clickHandler() {
            qidianDA11('track', 'testclick', {}, function () {
                console.log('testclick success');
            });
            // 这里面上报 这个按钮的各种属性
            console.log("#### ", el)
        }
        el.addEventListener('click', clickHandler)
    }
}