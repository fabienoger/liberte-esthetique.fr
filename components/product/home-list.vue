<template>
  <div class="product-home-list">
    <Row role="row">
      <template v-for="product in products">
        <Col role="gridcell" :xs="24" :md="8">
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
  div.ivu-row {
    margin-top: 50px;
    div.ivu-col {
      margin: 15px 0;
    }
  }
}
</style>
