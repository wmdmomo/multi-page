<template>
  <div>
    <div :class="['demo', addcla(skin)]"></div>
    <div v-tip:first>测试</div>
    <v-tip ref="first" placement="left">
      <span>这里是提示内容1</span>
    </v-tip>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skin: 2
    }
  },
  methods: {
    addcla(i) {
      switch (i) {
        case 0:
          return 'skinA'
        case 1:
          return 'skinB'
        case 2:
          return 'skinC'
      }
    }
  }
}
</script>
<style scoped>
.demo {
  height: 100px;
  width: 200px;
}
.skinA {
  background-color: red;
}
.skinB {
  background-color: yellow;
}
.skinC {
  background-color: blue;
}
</style>