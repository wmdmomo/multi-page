<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <test-cl></test-cl>
    <QDPCanvas :nodes="nodes" @createNode="onCreatedNode">
      <template slot="header">
        <QDPHeader name="wmdhhh"></QDPHeader>
      </template>
    </QDPCanvas>
    <button v-perm>测试哈哈哈哈</button>
    <div @click="gg">
      <div data-id="666">111</div>
      <div>222</div>
      <div>333</div>
    </div>
    <!-- <dragarea>
      <drag-item></drag-item>
    </dragarea> -->
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

  methods: {
    gg(e){
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
