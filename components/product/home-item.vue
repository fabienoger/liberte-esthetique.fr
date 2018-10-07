<template>
  <div class="product-home-item" @click="redirect()">
    <div class="product-logo-wrapper">
      <img :src="product.images.logo" v-if="product.images.logo" class="product-logo" />
    </div>
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
  }
  cursor: pointer;
  .product-logo-wrapper {
    -webkit-transition: padding 0.5s ease-out;
    -moz-transition: padding 0.5s ease-out;
    -o-transition: padding 0.5s ease-out;
    transition: padding 0.5s ease-out;
    .product-logo {
      width: 100%;
    }
  }

  .product-head {
    font-size: 1.5em;
    padding: 30px;
    height: 195px;
  }
  .product-footer {
    padding: 30px;
  }
}
</style>
