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
import axios from 'axios';
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

      axios.post('http://localhost:3000/todos', obj)
        .then(response => {
          console.log('新增成功');
          let res = response.data;
          console.log(res);
          this.todos.push(res);
        })
        .catch(error => {
          alert('新增失败');
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
      axios.delete(`http://localhost:3000/todos/${id}`)
        .then(response => {
          console.log(response.data);
          this.todos.splice(index, 1);
        })
        .catch(error => {
          alert('删除失败');
        })
    }
  },

  created () {
    axios.get('http://localhost:3000/todos')
      .then(response => {
        let res = response.data;
        console.log(res);
        this.todos = res;
      })
  }
}
</script>

<style lang="less">

</style>
