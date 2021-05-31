<template>
  <div>
    <v-panel
      v-model="open"
      title="位置正中"
      @hide="panelHide"
      inline
      placement="right"
    >
      <div>
        <component :is="componentId" @subInfo="subInfo"></component>
      </div>
    </v-panel>
  </div>
</template>
<script>
import TestPanel from './testPanel.vue'
export default {
  components: {
    TestPanel
  },
  data() {
    return {
      open: false,
      componentId: null
    }
  },
  methods: {
    panelHide() {
      this.open = false
    //   this.componentId = null
    },
    show() {
      this.open = true
      this.componentId = 'TestPanel'
    },
    subInfo(val) {
      console.log('传递第一层！！！', val)
      this.$emit('subVal', val)
    }
  }
}
</script>
<style scoped>
</style>