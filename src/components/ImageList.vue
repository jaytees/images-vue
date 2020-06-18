<template lang="html">
  <div>
    <img
      v-for="images in allImages"
      :key="images.id"
      :src="images.link"
      alt=""
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  methods: mapActions(['fetchImages']),
  computed: mapGetters(['allImages']),
  created() {
    this.fetchImages();
  },
};
</script>

<style lang="css" scoped></style>
