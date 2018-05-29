<template>
  <div class="product-home-item" @click="redirect()">
    <div class="product-logo-wrapper">
      <img :src="product.images.logo" v-if="product.images.logo" class="product-logo" />
    </div>
    <div class="product-head" v-html="product.head"></div>
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
      this.$router.push({ path: `/product/${this.product.id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.product-home-item {
  cursor: pointer;
  padding: 15px;
  margin: 30px;
  border: 1px solid $primary-color;
  box-shadow: 1px 1px 1px $primary-color;

  .product-logo-wrapper {
    height: 250px;
    .product-logo {
      width: 100%;
      max-width: 800px;
      margin-bottom: 30px;
    }
  }

  .product-head {
    font-size: 1.5em;
    padding: 30px;
  }
}
</style>
