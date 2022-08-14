<template>
  <div class="space-y-2">
    <TodoItem v-for="todo in allTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoItems',
  props: ['todos'],
  components: { TodoItem },
  setup(props) {
    const allTodos = ref(props.todos);

    return {
      allTodos
    };
  }
};
</script>
