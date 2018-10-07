<template>
  <main role="main">
    <h1 role="heading" aria-level="1" class="text-center page-header">{{ product.title }}</h1>
    <div class="container">
      <product-detail :product="product"></product-detail>
    </div>
  </main>
</template>

<script>
import ProductDetail from '~/components/product/detail.vue'
import { products } from '~/lib/data.js'

export default {
  components: {
    ProductDetail
  },
  computed: {
    product() {
      return products.find(p => p.id === parseInt(this.$route.params.id))
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  padding-bottom: 100px;
}
</style>
