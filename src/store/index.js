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
      state.todos.unshift(payload);
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
        }, 3000);
      }
    },
    async addTodo({ commit }, payload) {
      const { data } = await http.post('todos', payload);
      commit('SET_TODO', data);
    }
  },

  modules: {}
});
