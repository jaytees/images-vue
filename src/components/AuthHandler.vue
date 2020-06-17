<template lang="html">
  <div>
    Please Wait...
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthHandler',
  methods: mapActions(['finaliseLogin']),
  created() {
    // call the action in auth module
  },
};
</script>

<style lang="css" scoped></style>
