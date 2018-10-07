<template>
  <header class="nav-header">
    <div class="header">
      <div class="header-title">
        Liberté Esthétique
        <div @click="showVerticalMenu = !showVerticalMenu">
          <Icon v-if="windowWidth <= 500" class="nav-button" type="md-menu" size="50"></Icon>
        </div>
      </div>
      <nav-menu v-if="windowWidth > 500"
        :windowWidth="windowWidth"
        :activeName="activeName">
      </nav-menu>
      <Drawer v-else title="Menu" placement="left" v-model="showVerticalMenu">
        <nav-menu v-if="windowWidth > 500"
          :windowWidth="windowWidth"
          mode="vertical"
          :activeName="activeName">
        </nav-menu>
      </Drawer>
    </div>
  </header>
</template>

<script>
import navMenu from '~/components/nav-menu.vue'

export default {
  components: {
    navMenu
  },
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
      left: 0;
      top: 0;
      cursor: pointer;
    }
    .nav-button:hover {
      background-color: $primary-color-inverse;
      color: $primary-color;
    }
  }
}
</style>
