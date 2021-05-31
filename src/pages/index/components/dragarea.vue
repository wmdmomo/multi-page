<template>
  <div :data-id="areaId">
    <div>drag----eee</div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Dragarea',
  props: {
    areaId: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
</style>