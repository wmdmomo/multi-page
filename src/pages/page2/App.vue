<template>
  <div>
    <div><span>2222</span></div>
    <v-button @click="getFood">点击拿到page2下的数据</v-button>
  </div>
</template>
<script>
export default {
  methods: {
    getFood() {
      this.$ajax.get('/page2/getFood').then(() => console.log('hhhhhhhhh'))
    }
  }
}
</script>
<style scoped>
</style>