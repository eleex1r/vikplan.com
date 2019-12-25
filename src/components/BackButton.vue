<template>
  <a class="navbar-item button is-light" @click="back()" v-if="isMobile" aria-label="Back">
    <span class="icon is-small">
      <i class="fa fa-chevron-left"></i>
    </span>
    <span>Вернуться</span>
  </a>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    }
  },
  methods: {
    back: function(event) {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.back-button {
  margin-left: 1.5rem;
}
</style>

