<template>
  <div class="todo">
    <input
      v-model="inputVal"
      type="text"
      placeholder="请输入内容..."
      />
    <button @click="addTodo">Add</button>

    <ul>
      <TodoItem
        v-for="(item, index) in todos"
        :key="item.id"
        :todo="item.name"
        :id="item.id"
        :index="index"
        @abc="delTodo"
        />
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  data () {
    return {
      inputVal: '',
      todos: []
    }
  },

  components: {
    TodoItem
  },

  methods: {
    addTodo () {
      let obj = {
        name: this.inputVal
      }

      this.$http.post('/todos', obj)
        .then(res => {
          this.todos.push(res);
        })
        .catch(error => {
          alert('新增失败', error.message);
        })
      // this.todos.push({
      //   name: this.inputVal,
      //   id: 1
      // });
    },

    /**
     * 删除todo
     * @param {Number} index 当前todo的下标
     * @param {Number} id 当前todo的id
     */
    delTodo (index, id) {
      // this.todos.splice(index, 1);
      this.$http.delete(`/todos/${id}`)
        .then(res => {
          this.todos.splice(index, 1);
        })
        .catch(error => {
          alert('删除失败', error.message);
        })
    }
  },

  created () {
    this.$http.get('/todos')
      .then(res => {
        console.log(res);
        this.todos = res;
      })
      .catch(error => {
        console.log(error.message);
        alert('网络异常，请稍后重试');
      })
  }
}
</script>

<style lang="less">

</style>
