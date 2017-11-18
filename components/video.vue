<template>
  <div class="video">
    <video controls>
      <source v-for="source in sources" :src="source.src" :type="source.type">
        Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    sources: {
      type: Array,
      required: true
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
