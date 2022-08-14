<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoLoading />
      <TodoForm />
      <TodoItems />
      <TodoEmpty />
    </div>
  </div>
</template>

<script>
import TodoLoading from '@/components/TodoLoading.vue';
import TodoForm from '@/components/TodoForm.vue';
import TodoItems from '@/components/TodoItems.vue';
import TodoEmpty from '@/components/TodoEmpty.vue';

export default {
  name: 'HomeView',
  components: { TodoLoading, TodoForm, TodoItems, TodoEmpty }
};
</script>
