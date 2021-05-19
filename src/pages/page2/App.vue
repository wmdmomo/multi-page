<template>
  <div>
    <div><span>2222</span></div>
    <v-button @click="getFood">点击拿到page2下的数据</v-button>
    <v-form @submit="handleSub">
      <v-form-item label="姓名">
        <!-- <template slot="label">
         
        </template> -->
      </v-form-item>
      <v-form-item>
        <v-button type="submit"> 进入 </v-button>
      </v-form-item>
    </v-form>
    <!-- <comtest>
      <template slot-scope="tt">{{ tt.com.user }}</template>
    </comtest>

    <comtest v-slot="tt">
      {{ tt.com.age }}
    </comtest> -->
    <component :is="keyss"></component>
    <!-- <com-test-1></com-test-1> -->
  </div>
</template>
<script>
import side from './components/index'
// import comtest from './components/comtest.vue'
// import ComTest1 from './components/ComTest1.vue'

// console.log(side)
// const comMap = {
//   COMTEST1: 'com-test-1',
//   COMTEST2: 'com-test-2',
//   COMTEST3: 'com-test-3'
// }
export default {
  components: { ...side },
  data() {
    return {
      keyss: 'com-test-2'
    }
  },
  // computed: {
  //   nameCom() {
  //     console.log(comMap[this.keyss])
  //     return comMap[this.keyss]
  //   }
  // },
  methods: {
    getFood() {
      this.$ajax.get('/page2/getFood').then(() => console.log('hhhhhhhhh'))
    },
    handleSub(e) {
      e.preventDefault()
      console.log(`object`, 'eeeeeeeeeeee')
    }
  }
}
</script>
<style scoped>
</style>