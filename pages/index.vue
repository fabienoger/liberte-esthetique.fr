<template>
  <main role="main">
    <div>
      <presentation></presentation>
      <home-carousel></home-carousel>
      <Row>
        <Col :lg="{ span: 12, offset: 6 }" :xs="{ offset: 3, span: 16 }">
          <div class="alert-wrapper">
            <Alert show-icon>
              Bon à savoir: Liberté Esthetique intervient aussi dans les entreprises.
              <Icon type="information-circled" slot="icon"></Icon>
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
