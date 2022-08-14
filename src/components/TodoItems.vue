<template>
  <div class="space-y-2">
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoItems',
  components: { TodoItem }
};
</script>
