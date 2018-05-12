<template>
	<div class="cures">
		<h3 role="heading" aria-level="1" class="text-center page-header">
			Les cures
		</h3>
		<Table stripe :columns="columns" :data="data"></Table>
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
