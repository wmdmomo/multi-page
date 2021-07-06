<template>
  <div>
    <slot-test @postFa="postFa">
      <div slot="slotA">3333</div>
      <template #slotB="props">{{props.item}}</template>
    </slot-test>
    <v-button @click="addPara2">点击</v-button>
    <v-button @click="change">改变</v-button>
    <span v-dire>***{{ para }}</span>
    <dire-test></dire-test>
  </div>
</template>
<script>
import slotTest from '../../components/slotTest.vue'
import DireTest from './components/direTest/direTest.vue'
export default {
  components: {
    slotTest,
    DireTest
  },
  data() {
    return {
      importParams: [55],
      testData: {
        name: 'www'
      }
    }
  },
  computed: {
    para() {
      console.log('hhhhh')
      return this.importParams[0] || '空'
    }
  },
  methods: {
    addPara2() {
      this.importParams.school = 'wssss'
    },
    postFa(res) {
      const { id } = res.origin.data
      this.importParams[0] = id
      console.log(this.importParams)
    },
    change() {
      this.importParams[0]++
      console.log('%%%%', this.importParams)
      console.log('***', this.para)
    }
  }
}
</script>