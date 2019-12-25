<template>
  <div class="field is-grouped is-grouped-multiline l-collections" v-show="collections.length">
    <div class="control">
      <div class="tags">
        <span
          class="tag is-medium"
          title="Загрузить"
          :class="{'is-success': currentCollection == 'local'}"
          @click="switchToCollection('local')"
        >Моя прокачка</span>
      </div>
    </div>

    <div class="control" v-for="coll in collections">
      <div class="tags has-addons">
        <span
          class="tag is-medium"
          title="Загрузить"
          :class="{'is-success': coll == currentCollection}"
          @click="switchToCollection(coll)"
        >{{ coll }}</span>
        <span class="tag is-medium is-delete" @click="removeFromStore(coll)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchCollections',
  data() {
    return {};
  },
  computed: {
    collections() {
      return this.$store.state.firestore.collectionsList;
    },
    currentCollection() {
      return this.$store.state.firestore.currentCollection;
    }
  },
  methods: {
    removeFromStore(name) {
      this.$store.commit('firestore/removeCollection', name);
      if (this.collections.length === 0) {
        this.switchToCollection('local');
      }
    },
    switchToCollection(name) {
      this.$store.dispatch('firestore/load', name);
    }
  }
};
</script>

<style lang="scss">
.l-collections .tag {
  cursor: pointer;
}
</style>

