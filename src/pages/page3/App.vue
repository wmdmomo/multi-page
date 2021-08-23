<template>
  <div class="wrap">
    <slot-test @postFa="postFa">
      <div slot="slotA">3333</div>
      <template #slotB="props">{{ props.item }}</template>
    </slot-test>
    <v-button @click="addPara2">点击</v-button>
    <v-button @click="change">改变</v-button>
    <span v-dire>***{{ para }}</span>
    <dire-test></dire-test>
    <v-tree
      ref="tree1"
      :options="treeData1"
      :single="false"
      :folder-can-select="true"
      :with-checkbox="true"
      :maps="{ value: 'uin' }"
    >
      <template slot="label" slot-scope="props">{{
        props.options.text + 'tt'
      }}</template>
    </v-tree>
  </div>
</template>
<script>
let treeData1 = [
  {
    text: '腾讯公司',
    uin: 1,
    test: [],
    children: [
      { text: 'MIG', isLeader: true, uin: 11 },
      { text: 'WXG', children: [], uin: 12, expand: false }
    ]
  },
  {
    text: '阿里巴巴',
    uin: 2,
    expand: false,
    children: []
  }
]
let selected1 = []
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
      },
      ids: [],
      treeData1: treeData1,
      selected1: selected1,
      selectedItems1: [],
      maxSelected: '5',
      nodeId: ''
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
<style scoped>
.wrap{
  margin: 20px;
}
</style>