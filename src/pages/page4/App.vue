<template>
  <div>
    <!-- <div key="1"> -->
      <div
        v-for="(item, index) in content.phone"
        :test="'phone' + index"
        :key="'phone' + index"
      >
        <button @click="test('phone', index)">测试</button>
        <span v-if="content.phone[index].error">11111</span>
        <span v-else>2222</span>
      </div>
      <!-- <div @click="add('phone')">添加phone</div> -->
      <!-- <div>****************************************************</div>
      <div v-for="(item, index) in content.qq" :key="'qq' + index">
        <button @click="test('qq', index)">测试</button>
        <span v-if="content.qq[index].error">11111</span>
        <span v-else>2222</span>
      </div>
      <div @click="add('qq')">添加qq</div> -->
    <!-- </div> -->
    <div>{{ ttt.a && ttt.a.b }}</div>
    <div @click="B">
      {{ BBB }}
    </div>
    <button @click="flag=!flag">dianji切换</button>
    <div v-show="flag">hhhhhhhhhhhhhh</div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      content: {
        qq: [],
        phone: []
      },
      BBB: 2,
      ttt: {},
      flag:false
    }
  },
  mounted() {
    this.ttt.a = {};
    this.ttt.a.b = 1;
  },
  methods: {
    test(type, index) {
      // this.$set(this.content[type][index], 'error', 1)

      this.content[type][index].error = 1
      // this.BBB = this.BBB + 1
      // this.$forceUpdate();
      this.$nextTick(() => {
        console.log('-111---', this.content);
      })
    },
    add(type) {
      this.content[type].push({ value: '', type: 'create' })
    },
    B() {
      this.BBB++;
      console.log('----', this.content);
    }
  }
}
</script>
