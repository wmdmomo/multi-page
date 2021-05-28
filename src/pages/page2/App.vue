<template>
  <div>
    <v-switch v-model="flag" @input="clickSwitch"></v-switch>
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
    <component :is="nameCom"></component>
    <!-- <com-test-1></com-test-1> -->
    <!-- <com-meg></com-meg> -->
  </div>
</template>
<script>
// import ComMeg from './components/ComMeg.vue'
import side from './components/index.js'
// import comtest from './components/comtest.vue'
// import ComTest1 from './components/ComTest1.vue'
// console.log(ComMeg)
const comMap = {
  COMTEST1: 'com-meg',
  COMTEST2: 'com-mg',
  COMTEST3: 'com-msg'
}
export default {
  components: { ...side },
  data() {
    return {
      keyss: 'COMTEST1',
      flag: false
    }
  },
  computed: {
    nameCom() {
      console.log(comMap[this.keyss])
      return comMap[this.keyss]
    }
  },
  methods: {
    clickSwitch() {
      console.log(this.flag)
    },
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