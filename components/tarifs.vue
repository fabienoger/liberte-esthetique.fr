<template>
	<Table stripe :columns="columns" :data="data"></Table>
</template>

<script>
export default {
  data() {
    return {
      columns: [{
          title: "Nom",
          key: "name"
        }, {
          title: "Prix",
          key: "price"
			}],
      data: [{
          name: "Cyrolopolyse",
          price: "330 € la séance"
        }, {
          name: "LED",
          price: "40 €"
        }, {
          name: "Jet Peel",
          price: "130 €"
        }, {
          name: "Jep Peel + LED",
          price: "150 €"
        }, {
          name: "Ondes magnétiques",
          price: "130 €"
        }, {
          name: "Cellu M6 LPG",
          price: "70 €"
        }]
    }
  }
}
</script>
