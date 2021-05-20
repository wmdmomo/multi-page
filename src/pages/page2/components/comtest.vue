<template>
  <div>
    <span>hhh</span>
    <slot :com="com"></slot>
  </div>
</template>
<script>
export default {
  name: 'com-test',
  data() {
    return {
      com: {
        user: 'wmd',
        age: 12
      },
      test: 'wwwwwwwww'
    }
  }
}
</script>