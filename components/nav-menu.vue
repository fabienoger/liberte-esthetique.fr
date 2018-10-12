<template>
  <Menu :mode="mode"
    class="nav-menu"
    theme="light"
    :active-name="activeName">
    <div class="header-nav">
      <MenuItem name="index">
        <nuxt-link to="/" @click.native="$emit('close')">
            <Icon type="md-home"></Icon>
            Accueil
        </nuxt-link>
      </MenuItem>
      <Submenu name="product">
        <template slot="title">
          <Icon type="md-list" />
          Produits
        </template>
        <MenuItem
          class="product-item-menu"
          :name="'product-' + product.id"
          v-for="product in $options.products"
          :key="'/products/' + product.id">
          <nuxt-link :to="'/products/' + product.id" @click.native="$emit('close')">
            {{ product.title }}
          </nuxt-link>
        </MenuItem>
      </Submenu>
      <MenuItem name="tarifs">
        <nuxt-link to="/tarifs" @click.native="$emit('close')">
          <Icon type="md-cash"></Icon>
          Tarifs
        </nuxt-link>
      </MenuItem>
      <MenuItem name="contact">
        <nuxt-link to="/contact" @click.native="$emit('close')">
          <Icon type="md-mail"></Icon>
          Contact
        </nuxt-link>
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
  import { products } from '~/lib/data.js'

  export default {
    props: {
      mode: {
        type: String,
        default: 'horizontal'
      },
      activeName: {
        type: String
      }
    },
    products
  }
</script>

<style lang="scss">
  @import "~assets/css/variables.scss";
  .ivu-menu-vertical {
    .ivu-menu-submenu {
      .ivu-menu-submenu-title {
        padding-left: 0;
        padding-right: 0;
      }
    }
    .ivu-menu-submenu-title, .ivu-menu-submenu-title:hover, .ivu-menu-item a {
      color: $primary-color;
    }
    .ivu-menu-item {
      padding: 0px;
      a {
        display: block;
        padding: 20px 0;
      }
    }
  }
  .ivu-menu-horizontal {
    .header-nav {
      width: 470px;
      height: 60px;
      margin: 0 auto;
    }
    .ivu-select-dropdown {
      top: 55px !important;
    }
    a {
      display: inline-block;
      width: 100%;
    }
    .ivu-menu-item:first-child:not(.product-item-menu) {
      padding: 0 !important;
      a {
        height: 60px;
        padding: 0 20px;
      }
    }
    .ivu-menu-item, .ivu-menu-submenu {
      .ivu-select-dropdown, .ivu-menu-submenu-title, a:first-child {
        color: #515a6e;
      }
      &.ivu-menu-item-active > a:first-child, &:hover .ivu-menu-submenu-title, &:hover > a {
        color: $primary-color;
      }
      &:hover {
        border-color: $primary-color !important;
      }
    }
  }
</style>