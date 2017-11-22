<template>
  <div class="product-detail">
    <div class="video-wrapper">
      <video-c :video="video"></video-c>
    </div>
    <div class="description-wrapper">
      <div v-html="product.description"></div>
    </div>
  </div>
</template>

<script>
import videoC from '~/components/video.vue'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    videoC
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    video() {
      return this.product.video
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.product-detail {
  .video-wrapper {
    margin: 0 100px;
    max-height: 100%;
  }
  .description-wrapper {
    color: $primary-color;
    padding: 30px 0;
    text-align: center;
    font-size: 2em;
  }
}
</style>
