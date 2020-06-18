import qs from 'qs';
import api from '../../helpers/imgur';
import { router } from '../../main';

const state = {
  token: localStorage.getItem('imgur_token') || null,
};

const getters = {
  isLoggedIn: state => !!state.token,
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

const actions = {
  login: () => {
    api.login();
  },
  finaliseLogin: ({ commit }, hash) => {
    const { access_token } = qs.parse(hash.replace('#', ''));
    commit('setToken', access_token);
    localStorage.setItem('imgur_token', access_token);

    // redirect
    router.push('/');
  },
  logout: ({ rootState, commit }) => {
    commit('setToken', null);
    localStorage.removeItem('imgur_token');
    rootState.images = [];
    router.push('/');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
