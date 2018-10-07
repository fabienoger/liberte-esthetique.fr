<template>
  <main role="main">
    <div>
      <presentation></presentation>
      <home-carousel></home-carousel>
      <Row>
        <Col :lg="{ span: 8, offset: 8 }" :xs="{ offset: 6, span: 12 }">
          <div class="alert-wrapper">
            <Alert show-icon>
              Bon à savoir
              <Icon type="md-information-circle" slot="icon"></Icon>
              <template slot="desc">Liberté Esthetique intervient aussi dans les entreprises.</template>
            </Alert>
          </div>
        </Col>
      </Row>
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

.alert-wrapper {
  padding: 50px 0;
  .ivu-alert {
    font-size: 1.6em;
  }
}
</style>
