<template>
	<div class="offres">
		<h3 role="heading" aria-level="1" class="text-center page-header">
			Les offres
		</h3>
		<Alert show-icon>
			<Icon type="md-information-circle" slot="icon"></Icon>
			<template slot="desc">Pour une cure nominative de 6 séances, une séance gratuite (hors cryolipolyse).</template>
		</Alert>
		<div class="table-wrapper">
			<Table stripe :columns="columns" :data="data"></Table>
		</div>
		<Alert show-icon>
			<Icon type="md-information-circle" slot="icon"></Icon>
			<template slot="desc">Carte d'abonnement pour 3 ou 12 mois, nous consulter.</template>
		</Alert>
	</div>
</template>

<script>
export default {
	data() {
		return {
			columns: [{
				title: 'Nom',
				key: 'name'
			}, {
				title: 'Séances',
				key: 'meeting'
			}, {
				title: 'Prix',
				key: 'price'
			}],
			data: [{
				name: 'Cyrolopolyse',
				meeting: 'à partir de la 2ème',
				price: '240 € les séances suivantes'
			}, {
				name: 'LED',
				meeting: '6 séances',
				price: '200 €'
			}, {
				name: 'Jet Peel',
				meeting: '6 séances',
				price: '680 €'
			}, {
				name: 'Jep Peel + LED',
				meeting: '6 séances',
				price: '780 €'
			}, {
				name: 'Ondes magnétiques',
				meeting: '6 séances',
				price: '650 €'
			}, {
				name: 'Cellu M6 LPG',
				meeting: '12 séances',
				price: '700 €'
			}]
		}
	}
}
</script>

<style lang="scss">
	.offres {
		.table-wrapper {
			margin: 25px 0;
		}
	}
</style>
