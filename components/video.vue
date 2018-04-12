<template>
  <div class="video">
    <video controls :poster="poster">
      <source v-for="(source, index) in video.sources" :src="source.src" :type="source.type" :key="'source' + index">
        Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true
    },
    poster: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      $video: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$video = this.$el.getElementsByTagName('video')[0]
      this.$video.volume = 0.5
    }
  }
}
</script>

<style lang="scss" scoped>
.video {
  video {
    width: 100%;
  }
}
</style>
