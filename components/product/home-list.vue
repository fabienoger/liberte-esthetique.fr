<template>
  <div class="product-home-list">
    <h1 role="heading" aria-level="1" class="text-center page-header">Produits</h1>
    <Row role="row">
      <template v-for="product in products">
        <Col span="8" role="gridcell">
          <home-item :product="product"></home-item>
        </Col>
      </template>
    </Row>
  </div>
</template>

<script>
import HomeItem from '~/components/product/home-item.vue'
import { products } from '~/lib/data.js'

export default {
  components: {
    HomeItem
  },
  data() {
    return {
      products
    }
  }
}
</script>

<style lang="scss" scoped>
.product-home-list {
}
</style>
