<template>
  <main role="main">
    <div class="container">
      <presentation></presentation>
      <Row>
          <Col span="12" offset="6">
            <home-carousel></home-carousel>
          </Col>
      </Row>
      <h1 role="heading" aria-level="1" class="text-center products-title">
        Produits
      </h1>
      <product-home-list></product-home-list>
    </div>
  </main>
</template>

<script>
import ProductHomeList from '~/components/product/home-list.vue'
import Presentation from '~/components/presentation.vue'
import HomeCarousel from '~/components/home-carousel.vue'

export default {
  components: {
    ProductHomeList,
    Presentation,
    HomeCarousel
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.products-title {
  margin-top: 30px;
  color: $primary-color;
  font-size: 3em;
}
</style>
