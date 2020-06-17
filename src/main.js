import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import UploadForm from './components/UploadForm';
import ImageList from './components/ImageList';

Vue.use(VueRouter);

export const router = new VueRouter({
  // tells it to use browserRouter instead of hashRouter
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ImageList,
    },
    {
      path: '/upload',
      component: UploadForm,
    },
    {
      path: '/oauth2/callback',
      component: AuthHandler,
    },
  ],
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
