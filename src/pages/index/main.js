import Vue from 'vue'
import App from './App.vue'
import vhtml from 'vhtml-ui'
import 'vhtml-ui/lib/vhtml.css'
import perm from '../../directive/perm'
// import Dragarea from './components/index'


Vue.config.productionTip = false
Vue.directive('perm', perm)
vhtml.install(Vue)
// Vue.use(Dragarea)
new Vue({
  render: h => h(App),
}).$mount('#app')
