<template>
  <main role="main">
    <h1 role="heading" aria-level="1" class="text-center page-header">
      Produits
    </h1>
    <div class="container">
      <product-home-list></product-home-list>
    </div>
  </main>
</template>

<script>
import ProductHomeList from '~/components/product/home-list.vue'

export default {
  components: {
    ProductHomeList
  }
}
</script>
