<template>
  <div class="informations">
    <Card>
      <p slot="title">Coordonnées</p>
      <div>
        <div class="row">
          <div class="ivu-tag ivu-tag-checked">
            <Icon type="md-mail"></Icon>
            Email
          </div>
          <a href="mailto:liberte.esthetique@gmail.com" class="inline">
            liberte.esthetique@gmail.com
          </a>
        </div>
        <div class="row">
          <div class="ivu-tag ivu-tag-checked">
            <Icon type="md-phone-portrait"></Icon>
            Téléphone
          </div>
          <a target="_blank" href="tel:0177015158" class="inline">01 77 01 51 58</a>
        </div>
        <div class="row">
          <div class="ivu-tag ivu-tag-checked">
            <Icon type="md-locate"></Icon>
            Adresse
          </div>
          <span>30 Ter Rue de la Liberté</span> 94300 Vincennes, France
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.informations {
  margin: 0 15px 15px 15px;
  .row {
    margin-bottom: 10px;
  }
}
</style>
