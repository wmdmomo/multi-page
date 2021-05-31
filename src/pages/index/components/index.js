import Dragarea from './dragarea.vue'
import DragItem from './dragitem.vue'

Dragarea.install = function (Vue) {
    Vue.component(DragItem.name, DragItem)
    Vue.component(Dragarea.name, Dragarea)
}
export default Dragarea