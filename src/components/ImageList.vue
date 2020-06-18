<template lang="html">
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img
        v-for="images in allImages"
        :key="images.id"
        :src="images.link"
        alt=""
      />
    </div>
    <h2 v-else>Please Log In</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  methods: mapActions(['fetchImages']),
  computed: mapGetters(['allImages', 'isLoggedIn']),
  created() {
    this.fetchImages();
  },
};
</script>

<style lang="css" scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
</style>
