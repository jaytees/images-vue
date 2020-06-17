<template lang="html">
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>

    <div class="right menu">
      <div v-if="isLoggedIn">
        Buttons
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  methods: mapActions(['login']),
  computed: mapGetters(['isLoggedIn']),
};
</script>

<style lang="css" scoped></style>
