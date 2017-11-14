<template>
  <div class="product-detail">
    <div class="spin-container" v-if="loading">
      <Spin size="large" fix></Spin>
    </div>
    <div class="video-wrapper" v-show="!loading"
         @play="onPlayerPlay($event)"
         @pause="onPlayerPause($event)"
         @ready="playerReadied"
         @statechanged="playerStateChanged($event)"
         v-video-player:videoPlayer="{ sources: video.sources }">
    </div>
    <div class="description-wrapper">
      <div v-html="product.description"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loading: true
    }
  },
  methods: {
    playerReadied(e) {
      this.loading = false
    }
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
