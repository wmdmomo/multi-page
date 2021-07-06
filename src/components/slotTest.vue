<template>
  <!-- 主要测试两个内容 1. slot的使用方法 2. 父组件传递给子组件一个对象的时候 用解构的方法 -->
  <div>
    <!-- <v-button @click="testFun">打印</v-button> -->
    <v-button @click="postFa">传递给父级</v-button>
    <slot name="slotA" v-if="$slots.slotA">
      <span>5555</span>
    </slot>

    <slot name="slotB" v-if="$scopedSlots.slotB" :item="item"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: 777
    }
  },
  methods: {
    postFa() {
      const res = {
        origin: {
          data: {
            id: 34,
            name: 'wmd',
            type: 333
          }
        }
      }
      console.log(this.$slots,'$$$$',this.$scopedSlots)
      this.$emit('postFa', res)
    }
  }
}
</script>