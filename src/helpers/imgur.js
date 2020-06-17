const client_id = process.env.VUE_APP_CLIENT_ID;
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: process.env.VUE_APP_CLIENT_ID,
      response_type: 'token',
    };
  },
};
