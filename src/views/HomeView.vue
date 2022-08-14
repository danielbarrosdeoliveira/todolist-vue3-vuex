<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoLoading v-if="isLoading" />
      <template v-else>
        <TodoForm />
        <TodoItems :todos="allTodos" v-if="allTodos.length" />
        <TodoEmpty v-else />
      </template>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TodoLoading from '@/components/TodoLoading.vue';
import TodoForm from '@/components/TodoForm.vue';
import TodoItems from '@/components/TodoItems.vue';
import TodoEmpty from '@/components/TodoEmpty.vue';

export default {
  name: 'HomeView',
  components: { TodoLoading, TodoForm, TodoItems, TodoEmpty },
  setup() {
    const store = useStore();

    store.dispatch('getTodos');

    const allTodos = computed(() => {
      return store.getters.$getTodos;
    });

    const isLoading = computed(() => {
      return store.getters.$getLoading;
    });

    return {
      allTodos,
      isLoading
    };
  }
};
</script>
