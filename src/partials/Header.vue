<template>
  <nav class="navbar navbar-wrapper navbar-fade is-light">
    <!-- <div class="container"> -->
    <!-- Brand -->
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/" aria-label="Home">
        <!-- <img class="light-logo" src="../assets/logo2.png" alt=""> -->
        <span class="img img-logo"></span>
      </router-link>
      <!-- Sidebar Trigger -->
      <a
        id="navigation-trigger"
        class="navbar-item hamburger-btn"
        href="javascript:void(0);"
        @click="openSideNav()"
        :class="{'is-right': isMobile}"
        aria-label="Navigation"
      >
        <span class="menu-toggle">
          <span class="icon-box-toggle" :class="{'active': isSideNav}">
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </a>
      <!-- Responsive toggle -->
      <!-- <div class="custom-burger" :class="{'is-active': isMenu}">
          <a class="responsive-btn" href="javascript:void(0);" @click="toggleMenu()">
            <span class="menu-toggle">
              <span class="icon-box-toggle" :class="{'active': isMenu}">
                <span class="rotate">
                  <i class="icon-line-top"></i>
                  <i class="icon-line-center"></i>
                  <i class="icon-line-bottom"></i>
                </span>
              </span>
            </span>
          </a>
      </div>-->
      <!-- /Responsive toggle -->
      <back-button v-show="$route.path != '/'"/>
      <!-- Navbar menu -->
      <!-- <div class="navbar-menu" :class="{'is-active': isMenu}">
        <div class="navbar-start">
          <router-link class="navbar-item is-slide" to="/">Home</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <a class="button secondary-btn button-signup btn-outlined is-bold btn-align rounded raised">Sign up</a>
          </div>
        </div>
      </div>-->
      <!-- </div> -->
    </div>
  </nav>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  components: {
    BackButton
  },
  data: function() {
    return {
      isActive: false
    };
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
    isSideNav() {
      return this.$store.state.nav.isSideNav;
    },
    isMenu() {
      return this.$store.state.nav.isMenu;
    }
  },
  methods: {
    openSideNav: function() {
      this.$store.commit('nav/toggleSideNav', true);
    },
    toggleMenu: function() {
      this.$store.commit('nav/toggleMenu');
    }
  }
};
</script>

<style lang="scss">
.navbar-item.is-right {
  position: absolute;
  left: auto;
  right: 0;
}
.img.img-logo {
  width: 61px;
  height: 25px;
}
</style>
