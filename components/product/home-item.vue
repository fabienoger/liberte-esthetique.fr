<template>
  <div class="product-home-item" @click="redirect()">
    <Card>
      <p slot="title">
        {{ product.title }}
      </p>
      <div v-html="product.description"></div>
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
.product-home-item {
  cursor: pointer;
  padding: 0 15px;
}
</style>
