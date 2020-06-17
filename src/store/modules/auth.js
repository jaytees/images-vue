import qs from 'qs';
import api from '../../helpers/imgur';

const state = {
  token: null,
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
  },
  logout: ({ commit }) => {
    commit('setToken', null);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
