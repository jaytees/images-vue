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
  async fetchImages({ rootState }) {
    const { token } = rootState.auth;
    const response = await api.fetchImagesApi(token);

    console.log(response);
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
