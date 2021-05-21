<template>
  <div>
    <div><span>2222</span></div>
    <v-input
      v-model="keywords"
      name="search"
      kind="search"
      placeholder="姓名/公司/手机/QQ/邮箱等"
      @search="keywordsSearch"
    />
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
      keywords:''
    }
  },
  computed: {
    nameCom() {
      console.log(comMap[this.keyss])
      return comMap[this.keyss]
    }
  },
  methods: {
    keywordsSearch(){
      console.log('被点击了',this.keywords)

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