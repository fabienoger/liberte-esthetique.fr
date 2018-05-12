<template>
  <header class="nav-header">
    <div class="header">
      <div class="header-title">
        Liberté Esthétique
      </div>
      <Menu mode="horizontal" theme="light" :active-name="activeName">
        <div class="header-nav">
          <nuxt-link to="/">
            <MenuItem name="index">
              <Icon type="home"></Icon>
              Accueil
            </MenuItem>
          </nuxt-link>
          <nuxt-link to="/tarifs">
            <MenuItem name="tarifs">
              <Icon type="cash"></Icon>
              Tarifs
            </MenuItem>
          </nuxt-link>
          <nuxt-link to="/contact">
            <MenuItem name="contact">
              <Icon type="email"></Icon>
              Contact
            </MenuItem>
          </nuxt-link>
        </div>
      </Menu>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    activeName() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.header {
  border: 1px solid #d7dde4;
  background: #f5f7f9;

  .header-title {
    background-color: $primary-color;
    color: $primary-color-inverse;
    font-style: italic;
    font-weight: bold;
    padding: 15px 0;
    text-align: center;
    font-size: 2em;
  }
  .header-nav {
    width: 320px;
    margin: 0 auto;
  }
}
</style>
