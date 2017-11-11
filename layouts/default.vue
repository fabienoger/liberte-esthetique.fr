<template>
  <div>
    <nav-header />
    <nuxt />
    <nav-footer />
  </div>
</template>

<script>
import NavHeader from '~/components/nav-header.vue'
import NavFooter from '~/components/nav-footer.vue'

export default {
  components: {
    NavHeader,
    NavFooter
  }
}
</script>
