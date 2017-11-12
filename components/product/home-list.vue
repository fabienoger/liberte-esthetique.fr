<template>
  <div class="product-home-list">
    <h1 role="heading" aria-level="1" class="text-center page-header">Produits</h1>
    <Row role="row">
      <template v-for="product in products">
        <Col span="8" role="gridcell">
          <home-item :product="product"></home-item>
        </Col>
      </template>
    </Row>
  </div>
</template>

<script>
import HomeItem from '~/components/product/home-item.vue'

export default {
  components: {
    HomeItem
  },
  data() {
    return {
      products: [{
        title: 'JetPeel Esthetic',
        description:
          '<p>Un soin anti-âge révolutionnaire</p>' +
          '<p>Lèvres redessinées - ridules estompées</p>' +
          '<p>Sillons naso-géniens atténués</p>' +
          '<p>Vergetures et cicatrices lissées</p>',
        img: 'jetpeel-esthetic-logo.png'
      }, {
        title: 'Médical Cryo System',
        description:
          '<p>1 à 2 séances seulement</p>' +
          '<p>Élimination définitive des amas graisseux</p>' +
          '<p>Sans douleur, sans anesthésie, sans contrainte</p>',
        img: 'jetpeel-esthetic-logo.png'
      }, {
        title: 'Reju Light',
        description:
          '<p>Rapide et indolore</p>' +
          '<p>Sans effet secondaire</p>' +
          '<p>Pour tout type de peau</p>' +
          '<p>Pour hommes & femmes</p>',
        img: 'jetpeel-esthetic-logo.png'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.product-home-list {
}
</style>
