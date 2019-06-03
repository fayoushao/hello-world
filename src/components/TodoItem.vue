<template>
  <li>{{ todo }} - <button @click="delTodo">DelTodo</button></li>
</template>

<script>
export default {
  props: {
    todo: String,
    id: Number,
    index: Number
  },

  methods: {
    delTodo () {
      this.$emit('abc', this.index, this.id);
    }
  }
}
</script>

<style lang="less">

</style>
