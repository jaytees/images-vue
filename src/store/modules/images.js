import api from '../../helpers/imgur';

const state = {
  images: [],
};

const getters = {
  allImages: state => state.images,
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

const actions = {
  // from api
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    if (!token) return;
    const response = await api.fetchImagesApi(token);

    commit('setImages', response.data.data);
  },
  // to api
  uploadImages() {},
};

export default {
  state,
  getters,
  mutations,
  actions,
};
