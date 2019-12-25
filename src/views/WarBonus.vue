<template>
  <base-layout>
    <template slot="title">Бонусы знаний</template>

    <div class="field is-grouped is-grouped-multiline">
      <div class="field is-vertical">
        <span class="label">Вид войск:</span>
        <p class="control">
          <span class="select">
            <select v-model.number="troopsType" aria-label="Вид войск">
              <option value="1">Пехота</option>
              <option value="2">Стрелки</option>
              <option value="3">Кавалерия</option>
              <option value="4">Осада</option>
              <option value="5">Убийцы</option>
              <option value="6">Шпионы</option>
            </select>
          </span>
        </p>
      </div>
      <div class="field is-vertical">
        <span class="label">Тир:</span>
        <p class="control">
          <span class="select">
            <select v-model.number="tier" aria-label="Скин">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </span>
        </p>
      </div>
      <div class="field is-vertical">
        <span class="label">МС:</span>
        <p class="control">
          <span class="select">
            <select v-model.number="pop" aria-label="Буст">
              <option value="0">нет</option>
              <option value="1">да</option>
            </select>
          </span>
        </p>
      </div>
    </div>

    <table class="table is-bordered is-narrow ">
      <tr>
        <th></th>
        <th>Нападение</th>
        <th>Оборона</th>
      </tr>
      <tr>
        <th>Атака</th>
        <td class="has-text-right">{{ pop ? bonus[1].attPOP : bonus[1].att }}</td>
        <td class="has-text-right">{{ pop ? bonus[1].defPOP : bonus[1].def }}</td>
      </tr>
      <tr>
        <th>Защита</th>
        <td class="has-text-right">{{ pop ? bonus[2].attPOP : bonus[2].att }}</td>
        <td class="has-text-right">{{ pop ? bonus[2].defPOP : bonus[2].def }}</td>
      </tr>
      <tr>
        <th>Здоровье</th>
        <td class="has-text-right">{{ pop ? bonus[3].attPOP : bonus[3].att }}</td>
        <td class="has-text-right">{{ pop ? bonus[3].defPOP : bonus[3].def }}</td>
      </tr>
    </table>

  </base-layout>
</template>

<script>
import BaseLayout from "../partials/BaseLayout.vue";
import * as constants from "../store/db/constants";

export default {
  data: function() {
    return {
      troopsType: constants.MELEE,
      tier: constants.TIER_6,
      pop: 0,
    };
  },
  components: {
    BaseLayout
  },
  computed: {
    bonus() {
      return this.$store.getters["war/getBonusAttack"];
    },
    isMobile() {
      return this.$store.state.isMobile;
    }
  },
  metaInfo() {
    return {
      title: 'Боевка - бонусы знаний',
      meta: [
        { name: 'description', content: '' },
        { property: 'og:title', content: 'Боевка - бонусы знаний | Vikings Planner'},
        { property: 'og:url', content: this.$baseUrl + '/war/bonus'}
      ]
    };
  },
  methods: {
    openEditor: function(id) {
      this.$router.push({ path: `/prod/${id}` });
    },
    addProd: function() {
      this.$store.commit("prod/addBonus", this.newProdType);
    }
  },
  mounted() {
    gtag('config', this.$gtag, {'page_path': '/war/bonus'});
  }
};
</script>

<style lang="scss">
</style>
