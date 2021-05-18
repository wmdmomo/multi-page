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
    <v-collapse v-model="values1" accordion>
      <v-collapse-item :value="1">
        <div slot="header">
          test
          <v-icon name="arr"> </v-icon>
        </div>
        <div slot="content">what</div>
      </v-collapse-item>
      <v-collapse-item :value="2">
        <div slot="header">test222</div>
        <div slot="content">what333</div>
      </v-collapse-item>
    </v-collapse>
    <v-button @click="testA">点击 ajax</v-button>
    <v-button @click="flag = true">点击出现</v-button>
    <v-dialog
      v-model="flag"
      title="删除退款记录?"
      kind="confirm"
      status="warning"
      @confirm="confirmNow"
    >
    </v-dialog>
  </div>
</template>
<script>
import { Icon } from 'vhtml-ui'
const req = require.context('../../assets', false, /[^.]+\.svg$/)
Icon.addSprites(req)
export default {
  data() {
    return {
      currentStep: 1,
      open: false,
      values1: [1, 2],
      menu: [
        {
          text: '线索属性',
          list: [{ text: '性别' }, { text: '年龄' }]
        }
      ],
      flag: false
    }
  },
  computed: {
    testhh() {
      return this.currentStep
    }
  },
  methods: {
    testA() {
      this.$ajax.get('/page1/getList').then((res) => console.log(res))
    },
    handleNext() {
      this.currentStep++
    },
    confirmNow(e) {
      console.log('yyyyyyyyyyy')
      if (this.currentStep === 2) {
        this.flag = false
      } else {
        e.preventDefault()
      }
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
    &-title,
    &-con {
      width: 40px;
      height: 40px;
      background-color: aquamarine;
    }
    &-con {
      background-color: red;
    }
  }
}
</style>