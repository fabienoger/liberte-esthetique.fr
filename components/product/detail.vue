<template>
  <div class="product-detail">
    <div class="video-wrapper">
      <video-c v-if="video" :video="video" :poster="product.images.logo"></video-c>
    </div>
    <Row>
      <Col :lg="{ span: 8, offset: 8 }" :xs="{ span: 24 }">
        <div class="description-wrapper">
          <div class="description" v-html="product.description"></div>
          <div class="text-center">
            <a :href="product.link" target="_blank" class="ivu-btn ivu-btn-primary ivu-btn-circle">
              <Icon type="link" size="50"></Icon>
            </a>
          </div>
        </div>
      </Col>
    </Row>
    <hr />
    <Row class="application-wrapper" v-if="product.images && product.images.application">
      <application-images :images="product.images.application"></application-images>
    </Row>
  </div>
</template>

<script>
import videoC from '~/components/video.vue'
import applicationImages from '~/components/product/application-images.vue'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    videoC,
    applicationImages
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    video() {
      return this.product.video
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.product-detail {
  .video-wrapper {
    margin: 0 100px;
    max-height: 100%;
  }
  .description-wrapper {
    background-color: $primary-color-inverse;
    color: $primary-color-dark;
    padding: 30px;
    margin: 30px 0;
    width: auto;
    font-size: 1.5em;
    .description {
      margin-bottom: 30px;
    }
  }
  .application-wrapper {
    margin-top: 50px;
  }
}
</style>
