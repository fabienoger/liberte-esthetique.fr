<template>
  <header class="nav-header">
    <div class="layout">
      <div class="layout-title">
        Liberté Esthetique
      </div>
        <Menu mode="horizontal" theme="light" active-name="1">
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="home"></Icon>
                    Accueil
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="email"></Icon>
                    Contact
                </MenuItem>
            </div>
        </Menu>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;

  .layout-title {
    background-color: $primary-color;
    color: $primary-color-inverse;
    padding: 15px 0;
    text-align: center;
    font-size: 2em;
  }
  .layout-nav {
    width: 220px;
    margin: 0 auto;
  }
}
</style>
