<template>
  <div class="product-home-item" @click="redirect()">
    <div class="product-logo-wrapper">
      <img :src="product.images.logo" v-if="product.images.logo" class="product-logo" />
    </div>
    <div class="product-caption">
      <div class="blur"></div>
      <div class="product-head" v-html="product.head"></div>
      <div class="product-footer">
        <div class="text-center">
          <a :href="`/products/${product.id}`">
            <Button icon="md-book" class="custom-btn">
              Détail du produit
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    redirect() {
      this.$router.push({ path: `/products/${this.product.id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.product-home-item {
  // border: 2px solid $primary-color;
  &:hover {
    // background-color: $primary-color-clear;
    // color: $primary-color-inverse;
    .product-logo-wrapper {
      padding: 50px;
    }
    .product-caption {
      opacity: 1;
      transform: translateY(-300px);
      -webkit-transform: translateY(-300px);
      -moz-transform: translateY(-300px);
      -ms-transform: translateY(-300px);
      -o-transform: translateY(-300px);
    }
  }
  cursor: pointer;
  .product-logo-wrapper {
    -webkit-transition: padding 0.5s ease-out;
    -moz-transition: padding 0.5s ease-out;
    -o-transition: padding 0.5s ease-out;
    transition: padding 0.5s ease-out;
    .product-logo {
      width: 100%;
      vertical-align: middle;
    }
  }

  .product-caption {
    cursor: pointer;
    position: absolute;
    opacity: 0;
    left: 0px;
    right: 0px;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    color: #FFF;

    .blur {
      background-color: rgba(0, 0, 0, 0.7);
      height: 300px;
      width: 100%;
      z-index: 5;
      position: absolute;
    }
    .product-head {
      position: absolute;
      z-index: 6;
      font-size: 1.5em;
      padding: 30px;
      height: 195px;
    }
    .product-footer {
      position: absolute;
      z-index: 6;
      width: 100%;
      top: 195px;
      padding: 30px;
    }
  }
}
</style>
