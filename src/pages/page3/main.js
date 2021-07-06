import Vue from 'vue'
import App from './App.vue'
import vhtml from 'vhtml-ui'
import 'vhtml-ui/lib/vhtml.css'
import '../../utils/ajax'
import direTest from './components/direTest/index'
Vue.config.productionTip = false
vhtml.install(Vue)
Vue.use(direTest)
new Vue({
  render: h => h(App),
}).$mount('#app')
