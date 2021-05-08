<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <test-cl></test-cl>
  </div>
</template>

<script>
import TestCl from '../../components/TestCl'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    TestCl
    // HelloWorld
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
