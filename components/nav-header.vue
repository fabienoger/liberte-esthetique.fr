<template>
  <header class="nav-header">
    <div class="header">
      <div class="header-title">
        Liberté Esthétique
        <div @click="showVerticalMenu = !showVerticalMenu">
        <Icon v-if="windowWidth <= 500" class="nav-button" type="navicon" size="66" ></Icon>
        </div>
      </div>
      <Menu mode="horizontal" theme="light" :active-name="activeName" v-if="windowWidth > 500">
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
      <div v-else-if="showVerticalMenu" class="header-nav-vertical text-center">
        <nuxt-link to="/">
          <Icon type="home"></Icon>
          Accueil
        </nuxt-link>
        <nuxt-link to="/tarifs">
          <Icon type="cash"></Icon>
          Tarifs
        </nuxt-link>
        <nuxt-link to="/contact">
          <Icon type="email"></Icon>
          Contact
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: document.documentElement.clientWidth,
      showVerticalMenu: false
    }
  },
  computed: {
    activeName() {
      return this.$route.name
    }
  },
  methods: {
		getWindowWidth(event) {
      const windowWidth = document.documentElement.clientWidth
      this.showVerticalMenu = windowWidth <= 500
      this.windowWidth = windowWidth
      return windowWidth
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)
    })
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
    font-size: 3.5em;

    .nav-button {
      position: absolute;
      right: 0;
      top: 0;
      width: 66px;
      height: 66px;
      cursor: pointer;
    }
    .nav-button:hover {
      background-color: $primary-color-inverse;
      color: $primary-color;
    }
  }
  .header-nav {
    width: 320px;
    margin: 0 auto;
  }
  .header-nav-vertical {
    a {
      color: $primary-color;
      background-color: $primary-color-inverse;
      height: 50px;
      line-height: 50px;
      font-size: 1.3em;
      display: block;
      border-bottom: 1px solid $primary-color;
    }
  }
}
</style>
