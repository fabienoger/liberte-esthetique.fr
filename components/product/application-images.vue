<template>
  <div class="application-images">
    <h2 role="heading" aria-level="2" class="text-center">
      Mise en application
    </h2>
    <Row :gutter="16" role="row">
      <Col v-for="(image, index) in images"
        :key="'application-image-' + index"
        :xs="24" :sm="12" :md="8" :lg="6"
        role="gridcell"
        class="application-image">
        <img :src="image.src" />
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.application-images {
  h2 {
    font-size: 25px;
    color: $primary-color-inverse;
    margin-bottom: 50px;
  }
  .application-image {
    padding-top: 8px;
    padding-bottom: 8px;
    img {
      width: 100%;
    }
  }
}
</style>
