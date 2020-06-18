import api from '../../helpers/imgur';
import { router } from '../../main';

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
  async uploadImages({ rootState }, images) {
    // 1. get the access_token
    const { token } = rootState.auth;
    if (!token) return;
    // 2. call imgur api to do upload
    await api.uploadImagesApi(images, token);
    // 3. redirect user to ImageList component
    router.push('/');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
