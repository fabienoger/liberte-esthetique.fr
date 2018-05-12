<template>
  <div class="product-home-list">
    <h1 role="heading" aria-level="1" class="text-center products-title">
      Nos prestations
    </h1>
    <Row role="row">
      <template v-for="(product, index) in products">
        <Col role="gridcell" :xs="24" :md="8" :key="'product-' + index">
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
@import "~assets/css/variables.scss";

.product-home-list {
  background-color: $primary-color-inverse;
  padding-bottom: 100px;

  .products-title {
    margin-top: 30px;
    color: $primary-color;
    font-size: 4em;
    font-weight: 900;
    padding: 100px 0;
    text-transform: uppercase;
  }

  div.ivu-row {
    div.ivu-col {
      margin: 15px 0;
    }
  }
}
</style>
