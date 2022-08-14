import { createStore } from 'vuex';
import { http } from '@/services/http';

export default createStore({
  state: {
    todos: [],
    loading: false
  },
  getters: {
    $getTodos(state) {
      return state.todos;
    },
    $getLoading(state) {
      return state.loading;
    }
  },
  mutations: {
    SET_TODOS(state, payload) {
      state.todos = payload;
    },
    SET_TODO(state, payload) {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      if (index >= 0) {
        state.todos.splice(index, 1, payload);
      } else {
        state.todos.unshift(payload);
      }
    },
    DELETE_TODO(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index >= 0) {
        state.todos.splice(index, 1);
      }
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    updateLoading({ commit }, payload) {
      commit('SET_LOADING', payload);
    },
    async getTodos({ commit, dispatch }) {
      dispatch('updateLoading', true);
      try {
        const { data } = await http.get('todos');

        commit('SET_TODOS', data);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          dispatch('updateLoading', false);
        }, 500);
      }
    },
    async addTodo({ commit }, payload) {
      const { data } = await http.post('todos', payload);
      commit('SET_TODO', data);
    },
    async updateTodo({ commit }, payload) {
      const { data } = await http.put(`todos/${payload.id}`, payload.data);
      commit('SET_TODO', data);
    },
    async deleteTodo({ commit }, id) {
      await http.delete(`todos/${id}`);
      commit('DELETE_TODO', id);
    }
  },

  modules: {}
});
