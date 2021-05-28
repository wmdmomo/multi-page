import Vue from 'vue'
import App from './App.vue'
import vhtml from 'vhtml-ui'
import 'vhtml-ui/lib/vhtml.css'
import '../../utils/ajax'
// import '../../mocks/mock'
Vue.config.productionTip = false
vhtml.install(Vue)



new Vue({
  render: h => h(App),
}).$mount('#app')
