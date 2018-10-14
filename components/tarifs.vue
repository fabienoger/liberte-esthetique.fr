<template>
	<Table stripe :columns="columns" :data="data"></Table>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      columns: [{
          title: "Nom",
          key: "name"
        }, {
          title: "Prix",
          key: "price",
          render(h, params) {
            const price = params.row.price
            if (typeof price === 'object') {
              if (price.list && _.isArray(price.list)) {
                return h('ul', price.list.map(l => {
                  if (typeof l === 'object') {
                    return h('li', [h('span', {}, l.title), h('ul', l.list.map(el => h('li', {}, el)))])
                  }
                  return h('li', {}, l)
                }))
              }
            }
            return h('span', {}, price)
          },
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
          price: {
            list: [
              {
                title: 'Relachement',
                list: [
                  'corps: 80€ / zone',
                  'visage: 90€',
                  'cou: 70€'
                ]
              },
              'Cellulite 150€ / zone'
            ]
          }
        }, {
          name: "Cellu M6 LPG",
          price: "70 €"
        }]
    }
  }
}
</script>

<style lang="scss">
.ivu-table-cell {
  ul:first-child {
    padding-top: 15px;
    li ul {
      margin-left: 20px;
    }
  }
  ul:last-child {
    padding-bottom: 15px;
  }
}
</style>