<template>
  <header class="nav-header">
    <div class="header">
      <div class="header-title">
        Liberté Esthetique
      </div>
        <Menu mode="horizontal" theme="light" active-name="1">
            <div class="header-nav">
                <nuxt-link to="/">
                  <MenuItem name="1">
                      <Icon type="home"></Icon>
                      Accueil
                  </MenuItem>
                </nuxt-link>
                <nuxt-link to="/contact">
                  <MenuItem name="2">
                      <Icon type="email"></Icon>
                      Contact
                  </MenuItem>
                </nuxt-link>
            </div>
        </Menu>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.header {
  border: 1px solid #d7dde4;
  background: #f5f7f9;

  .header-title {
    background-color: $primary-color;
    color: $primary-color-inverse;
    padding: 15px 0;
    text-align: center;
    font-size: 2em;
  }
  .header-nav {
    width: 220px;
    margin: 0 auto;
  }
}
</style>
