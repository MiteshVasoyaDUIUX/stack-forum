import { createStore } from 'vuex';
import { isAdmin } from '@/API';

export default createStore({
  state: {
    token: '',
    user: null,
  },
  mutations: {
    setAction(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.user ? true : false;
    }
  },
  actions: {
    login({ commit }, token) {

      if (token) {
        commit('setAction', token);
        localStorage.token = token;
        const base64Url = token.split('.')[1];
        console.log('base64Url : ', base64Url);
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const user = window.atob(base64);
        commit('setUser', user);
      } else {
        commit('setAction', '');
        commit('setUser', null);

      }


    },
    async isAdmin({ commit }) {
      const result = await isAdmin();
      console.log(result);
    }
  },
});
