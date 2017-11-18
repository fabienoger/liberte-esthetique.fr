<template>
  <div class="product-detail">
    <div class="spin-container" v-if="loading">
      <Spin size="large" fix></Spin>
    </div>
    <div class="video-wrapper">
      <video-c :sources="video.sources"></video-c>
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
  .video-wrapper {}
  .description-wrapper {
    background-color: $primary-color-inverse;
    color: $primary-color;
    border-bottom: 2px solid $primary-color;
    padding: 30px 0;
    text-align: center;
    font-size: 2em;
  }
}
</style>
