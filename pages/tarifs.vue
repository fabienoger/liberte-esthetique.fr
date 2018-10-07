<template>
  <main role="main">
		<h1 role="heading" aria-level="1" class="text-center page-header">
      Tarifs
    </h1>
    <div class="container">
			<div class="tables-wrapper">
				<tarifs></tarifs>
				<cures></cures>
			</div>
			<div>
				<Alert show-icon>
					Offre DUO
					<Icon type="md-information-circle" slot="icon"></Icon>
					<template slot="desc">Réduction de 50% pour les conjoints et accompagnant(e)s pour toute cure ou cryopolyse prise le même jour.</template>
				</Alert>
			</div>
    </div>
	</main>
</template>

<script>
import tarifs from '~/components/tarifs.vue'
import cures from '~/components/cures.vue'

export default {
  components: {
		tarifs,
		cures
  }
}
</script>

<style lang="scss" scoped>
main {
  padding-bottom: 100px;
}

.tables-wrapper {
	margin-bottom: 30px;
}
</style>
