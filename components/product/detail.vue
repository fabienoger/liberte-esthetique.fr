<template>
  <div class="product-detail">
    <div class="video-wrapper">
      <video-c v-if="video" :video="video" :poster="product.images.logo"></video-c>
    </div>
    <Row class="list-images-wrapper" v-if="product.images && product.images.avantApres">
      <list-images :images="product.images.avantApres" title="Résultats"></list-images>
    </Row>
    <hr />
    <Row>
      <Col :lg="{ span: 12, offset: 6 }" :xs="{ span: 24 }">
        <div class="description-wrapper">
          <div class="description" v-html="product.description"></div>
          <div class="text-center">
            <a :href="product.link" target="_blank">
              <Button icon="md-link" class="custom-btn">
                Site internet
              </Button>
            </a>
          </div>
        </div>
      </Col>
    </Row>
    <hr />
    <Row class="list-images-wrapper" v-if="product.images && product.images.application">
      <list-images :images="product.images.application" title="Mise en application"></list-images>
    </Row>
  </div>
</template>

<script>
import videoC from '~/components/video.vue'
import listImages from '~/components/product/list-images.vue'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    videoC,
    listImages
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
  .list-images-wrapper {
    margin-top: 50px;
  }
}
</style>
