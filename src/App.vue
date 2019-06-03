<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  mounted () {
    let obj = {
      name: 'zhangsan',
      age: 18,
    }

    console.log(obj);
  }
}
</script>
