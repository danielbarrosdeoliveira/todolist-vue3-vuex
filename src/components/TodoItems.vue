<template>
  <div class="space-y-2">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoItems',
  components: { TodoItem },
  props: {
    todos: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
