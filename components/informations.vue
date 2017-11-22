<template>
  <div class="informations">
    <Card>
      <p slot="title">Coordonnées</p>
      <p>
        <div class="ivu-tag ivu-tag-checked">
          <Icon type="email"></Icon>
          Email
        </div>
        <a href="mailto:liberte.esthetique@gmail.com">
          liberte.esthetique@gmail.com
        </a>
      </p>
      <p>
        <div class="ivu-tag ivu-tag-checked">
          <Icon type="location"></Icon>
          Adresse
        </div>
        <span>30 Ter Rue de la Liberté</span> 94300 Vincennes, France
      </p>
      <p>
        <div class="ivu-tag ivu-tag-checked">
          <Icon type="ios-telephone"></Icon>
          Téléphone
        </div>
        <a target="_blank" href="tel:0177015158">01 77 01 51 58</a>
      </p>
    </Card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.informations {
  margin: 0 15px 15px 15px;
}
</style>
