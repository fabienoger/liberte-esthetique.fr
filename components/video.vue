<template>
  <div class="video">
    <video width="400" controls>
      <source :src="sources[0].src" :type="sources[0].type">
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
</style>
