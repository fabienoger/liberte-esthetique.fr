<template>
  <div class="product-home-item text-center" @click="redirect()">
    <Card>
      <h2 slot="title" class="title">
        {{ product.title }}
      </h2>
      <img :src="product.images.logo" v-if="product.images.logo" class="product-logo" />
      <div class="product-description" v-html="product.description"></div>
    </Card>
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
  padding: 0 15px;

  .product-logo {
    width: 100%;
    margin-bottom: 30px;
  }
  .product-description {
    font-size: 1.2em;
  }
}
</style>
