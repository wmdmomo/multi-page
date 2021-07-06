import direTest from './direTest.vue'
direTest.install = function (Vue) {
    Vue.component(direTest.name, direTest)
    Vue.directive('dire', {
        bind: function (el, binding, vnode) {
            console.log('#########')
            console.log(el)
            console.log(binding)
            console.log(vnode)
            console.log('*************')
        }
    })
}
export default direTest