<template>
  <div>
    <v-button>hh</v-button>
    <v-steps :index="currentStep"></v-steps>
    <span>现在点击的值{{ testhh }}</span>
    <v-button @click="handleNext">下一步</v-button>
    <!-- 折叠面板的使用 -->
    <!-- pannel面板的使用 -->
    <v-panel v-model="open" :mask-closable="false" title="位置正中"> </v-panel>
    <div class="wrap-1">
      <span>111</span>
      <div class="wrap-2">
        <span>2222</span>
        <div class="wrap-3"></div>
        <div class="wrap-4">666</div>
      </div>
    </div>
    <div class="demo">
      <div class="demo-title"></div>
      <div class="demo-con"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentStep: 1,
      open: true
    }
  },
  computed: {
    testhh() {
      return this.currentStep
    }
  },
  methods: {
    handleNext() {
      this.currentStep++
    }
  }
}
</script>
<style lang="less" scoped>
@color: #999;
.wrap-1 .wrap-2 {
  .wrap-3 {
    width: 20px;
    height: 20px;
    background-color: @color;
  }
  .wrap-4 {
    color: yellow;
  }
  & {
    color: red;
  }
}
.demo {
  .demo {
    &-title ,&-con{
      width: 40px;
      height: 40px;
      background-color: aquamarine;
    }
    &-con{
      background-color: red;
    }
  }
}
</style>