import Vuex from 'vuex';
import Vue from 'vue';

// create the connection between the two libraries
Vue.use(Vuex);

// collection of all the modules
// allowing access from vue
export default new Vuex.Store({
  modules: {},
});
