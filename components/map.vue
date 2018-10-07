<template>
  <div class="map">
    <v-map :zoom=13 :center="[48.849419, 2.441565]" :options="{ scrollWheelZoom: false }">
      <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
      <v-marker :lat-lng="[48.849419, 2.441565]">
        <v-popup>
          <div class="leaflet-popup-content">
            <h3>Coordonnées</h3>
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
                <Icon type="md-phone-portait"></Icon>
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
        </v-popup>
      </v-marker>
    </v-map>
  </div>
</template>

<style lang="scss">
@import "leaflet/dist/leaflet.css";

.map {
  height: 500px;
  width: 100%;

  .leaflet-popup-content {
    display: none;
    .row {
      margin-bottom: 10px
    }
  }
  .leaflet-pane.leaflet-popup-pane {
    .leaflet-popup-content {
      display: block;
    }
  }
}
</style>
