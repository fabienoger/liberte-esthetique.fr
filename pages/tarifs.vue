<template>
  <main role="main">
		<h1 role="heading" aria-level="1" class="text-center page-header">
      Tarifs
    </h1>
    <div class="container">
			<tarifs></tarifs>
			<offres></offres>
    </div>
	</main>
</template>

<script>
import tarifs from '~/components/tarifs.vue'
import offres from '~/components/offres.vue'

export default {
  components: {
		tarifs,
		offres
  }
}
</script>

<style lang="scss" scoped>
main {
  padding-bottom: 100px;
}
</style>
