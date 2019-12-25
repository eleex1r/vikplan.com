<template>
  <div id="app">
    <app-header></app-header>
    <main id="main-content">
      <transition mode="out-in" name="fade">
        <router-view></router-view>
      </transition>
      <app-footer></app-footer>
    </main>
    <side-navigation></side-navigation>
    <back-to-top></back-to-top>
  </div>
</template>

<script>
import AppHeader from "./partials/Header.vue";
import SideNavigation from "./components/SideNavigation.vue";
import BackToTop from "./components/BackToTop.vue";
import AppFooter from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    SideNavigation,
    AppHeader,
    BackToTop,
    AppFooter
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: '',
    // all titles will be injected into this template
    titleTemplate: '%s | Vikings Planner'
  },
  created: function() {
    let setStore = this.$store.commit;

    window.addEventListener("resize", function() {
      setStore("checkMobile");
    });

    setStore("checkMobile");
  }
};
</script>

<style lang="scss">
// https://bulma.io/documentation/overview/customize/
@import "../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "../node_modules/bulma/sass/utilities/functions.sass";

// Theme Variables
@import "./scss/theme";

// Transitions
@import "./scss/transitions";

// Import the rest of Bulma
@import "../node_modules/bulma/bulma.sass";

// bulkit by css ninja
@import "./scss/bulkit.scss";

// Font Awesome
@import "../node_modules/font-awesome/css/font-awesome.css";

// App
@import "./scss/app.scss";

// app images
@import "./scss/images.scss"
</style>
