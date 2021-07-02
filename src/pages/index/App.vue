<template>
  <div id="app">
    <div>111</div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <test-cl></test-cl>
    <QDPCanvas :nodes="nodes" @createNode="onCreatedNode">
      <template slot="header">
        <QDPHeader name="wmdhhh"></QDPHeader>
      </template>
    </QDPCanvas>
    <button v-perm>测试哈哈哈哈</button>
    <v-button status="primary" disabled>确定</v-button>
    <div @click="gg">
      <div data-id="666">111</div>
      <div>222</div>
      <div>333</div>
    </div>
    <v-dragarea class="dnd-demo" :value="options1" use-rawdata>
      <v-drag-item v-for="(item, index) in options1" :key="index" :data="item">
        <span> this is item {{ item.text + '' + item.text }} of options1</span>
      </v-drag-item>
    </v-dragarea>
    <!-- <dragarea>
      <drag-item></drag-item>
    </dragarea> -->
    <div>33333{{res}}</div>
  </div>
</template>

<script>
import TestCl from '../../components/TestCl'
// import HelloWorld from './components/HelloWorld.vue'
import { QDPHeader, QDPCanvas, JSSDK } from '@tencent/qd-process-ui'
let indexMap = {}
indexMap.wait = 0
indexMap.switchNode = 0
indexMap.end = 0
export default {
  name: 'App',
  components: {
    TestCl,
    QDPHeader,
    QDPCanvas
    // HelloWorld
  },
  created() {
    JSSDK.request.bind(this.$ajax)
  },
  computed:{
    res(){
      return this.testList[222]
    }
  },
  methods: {
    gg(e) {
      this.$set(this.testList,222,'wmd')
      // [222]='wmd'
      console.log(e)
    },
    onCreatedNode(currentNode) {
      if (['end', 'start'].indexOf(currentNode.key) === -1) {
        let namesMap = new Set()
        JSSDK.node.getAllNodes().forEach((node) => {
          namesMap.add(node.name)
        })
        /* eslint-disable-next-line */
        while (namesMap.has(currentNode.name + ++indexMap[currentNode.key])) {}
        JSSDK.node.update(currentNode.id, {
          name: currentNode.name + indexMap[currentNode.key]
        })
      }
      JSSDK.node.getAllNodes().forEach((node) => {
        console.log('####', node)
      })
      // console.log('node:', currentNode)
      // this.onNodeCreatedRemoved()
    }
  },
  data() {
    return {
      options1: [
        {
          text: 'qwe1'
        },
        {
          text: 'qwe2'
        },
        {
          text: 'qwe3'
        }
      ],
      testList: {},
      nodes: [
        {
          type: 'base',
          name: '基础节点',
          items: [
            {
              name: '等待',
              key: 'wait',
              bpmnType: 'Task',
              icon: 'icon-qd-bpmn-wait',
              connType: 3,
              actions: ['create', 'connect', 'remove']
            },
            {
              name: '判断分支',
              key: 'switchNode',
              bpmnType: 'Task',
              icon: 'icon-qd-bpmn-branch',
              connType: 0,
              actions: ['create', 'connect', 'remove']
            },
            {
              name: 'hhh',
              bpmnType: 'Task',
              actions: ['create', 'connect', 'remove']
            }
          ]
        },
        {
          type: 'sys',
          name: '结束',
          items: [
            {
              name: '完成',
              key: 'end',
              bpmnType: 'EndEvent',
              icon: 'icon-qd-bpmn-complete',
              actions: ['remove'],
              connType: 4, // 4-单进不出
              editable: false // 可选，节点是否可编辑，无editable字段时默认true
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dnd-demo {
  display: inline-block;
  padding: 20px;
  position: relative;
  background-color: #dadee7;

  .v-drag-item {
    padding: 5px 0;
  }

  .v-drag-item__inner {
    width: 200px;
    padding: 0 10px;
    line-height: 30px;
    background-color: #fff;
  }
}
</style>
