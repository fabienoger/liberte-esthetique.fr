<template>
  <div class="product-detail">
    <div class="video-wrapper">
      <v-video :sources="video.sources"></v-video>
    </div>
    <div class="description-wrapper">
      <div v-html="product.description"></div>
    </div>
  </div>
</template>

<script>
import vVideo from 'vue-video'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    vVideo
  },
  computed: {
    video() {
      return {
        sources: [{
          src: `~/assets/videos/${this.product.video.name}`,
          type: this.product.video.type
        }]
      }
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
