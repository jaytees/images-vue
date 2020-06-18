import qs from 'qs';
import axios from 'axios';

const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: process.env.VUE_APP_CLIENT_ID,
      response_type: 'token',
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  },
  fetchImagesApi(token) {
    // if (!localStorage.getItem('access_token')) return 'Please Login';
    // const token = localStorage.getItem('access_token');

    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
