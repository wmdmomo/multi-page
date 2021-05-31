<template>
  <div>
    <v-input @change="subInfo" v-model="tip"></v-input>
    <button @click="subInfo">点击传递上一层</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ceshi: 'wmd',
      tip: 'www'
    }
  },
  methods: {
    delay() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.ceshi = 'qwe'
          resolve(0)
        }, 1000)
      }).then((res) => {
        console.log(res)
      })
    },
    subInfo() {
      this.delay().then(() => {
        console.log('why why why')
        this.$emit('subInfo', this.ceshi)
        console.log('how how how')
      })
    }
  }
}
</script>
<style scoped>
</style>