<template>
  <div class="c-war-bonus">
    <h3 class="title is-5">Бонусы знаний</h3>

    <div class="field has-addons">
      <p class="control has-icons-left">
        <span class="select">
          <select v-model="research" disabled>
            <option value="current">Изученные</option>
            <option value="future">План 1</option>
            <option value="future2">План 2</option>
          </select>
        </span>
        <span class="icon is-small is-left">
          <i class="fa fa-flask"></i>
        </span>
      </p>
      <p class="control">
        <button class="button" :class="{'is-success': research == 'current'}">
            {{ totalInf | roundNumber }}
        </button>
      </p>
    </div>
    <!-- <div class="field is-grouped">
      <p class="control has-icons-left">
        <span class="select">
          <select v-model="research" disabled>
            <option value="current">Изученные</option>
            <option value="future">План 1</option>
            <option value="future2">План 2</option>
          </select>
        </span>
        <span class="icon is-small is-left">
          <i class="fa fa-flask"></i>
        </span>
      </p>
      <p class="control is-pulled-right">
        <span class="tag" :class="{'is-success': research == 'current'}">
            {{ totalInf | roundNumber }}
          </span>
      </p>
    </div> -->

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
            <select v-model.number="tier" aria-label="Тир">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
          </span>
        </p>
      </div>
      <div class="field is-vertical">
        <span class="label">МС:</span>
        <p class="control">
          <span class="select">
            <select v-model.number="pop" aria-label="Крепость">
              <option value="0">нет</option>
              <option value="1">да</option>
            </select>
          </span>
        </p>
      </div>
    </div>

    <table class="table is-bordered is-narrow is-fullwidth">
      <tr>
        <th></th>
        <th>Нападение</th>
        <th>Оборона</th>
      </tr>
      <tr>
        <th>Урон</th>
        <td class="has-text-right">{{ pop ? bonus[1].attPOP : bonus[1].att }}%</td>
        <td class="has-text-right">{{ pop ? bonus[1].defPOP : bonus[1].def }}%</td>
      </tr>
      <tr>
        <th>Защита</th>
        <td class="has-text-right">{{ pop ? bonus[2].attPOP : bonus[2].att }}%</td>
        <td class="has-text-right">{{ pop ? bonus[2].defPOP : bonus[2].def }}%</td>
      </tr>
      <tr>
        <th>Здоровье</th>
        <td class="has-text-right">{{ pop ? bonus[3].attPOP : bonus[3].att }}%</td>
        <td class="has-text-right">{{ pop ? bonus[3].defPOP : bonus[3].def }}%</td>
      </tr>
    </table>

    <table class="table is-bordered is-narrow is-fullwidth">
      <tr>
        <th>Минус враж. урону</th>
        <td class="has-text-right">{{ bonus[4] }}%</td>
      </tr>
      <tr>
        <th>Минус враж. защите</th>
        <td class="has-text-right">{{ bonus[5] }}%</td>
      </tr>
      <tr>
        <th>Минус враж. здоровью</th>
        <td class="has-text-right">{{ bonus[6] }}%</td>
      </tr>
      <tr>
        <th>Размер похода</th>
        <td class="has-text-right">{{ bonus[7] }}%</td>
      </tr>
    </table>

    <table class="table is-bordered is-narrow is-fullwidth">
      <tr>
        <th>Урон пехоте</th>
        <td class="has-text-right">{{ bonus[8] }}%</td>
      </tr>
      <tr>
        <th>Урон стрелкам</th>
        <td class="has-text-right">{{ bonus[9] }}%</td>
      </tr>
      <tr>
        <th>Урон кавалерии</th>
        <td class="has-text-right">{{ bonus[10] }}%</td>
      </tr>
      <tr>
        <th>Урон убийцам</th>
        <td class="has-text-right">{{ bonus[11] }}%</td>
      </tr>
      <tr>
        <th>Урон осаде</th>
        <td class="has-text-right">{{ bonus[12] }}%</td>
      </tr>
      <!--<tr>
        <th>Урон I тиру</th>
        <td class="has-text-right">{{ tier == 7 ? bonus[13] : 0 }}%</td>
      </tr>
      <tr>
        <th>Урон II тиру</th>
        <td class="has-text-right">{{ tier == 7 ? bonus[14] : 0 }}%</td>
      </tr>
      <tr>
        <th>Урон III тиру</th>
        <td class="has-text-right">{{ tier == 7 ? bonus[15] : 0 }}%</td>
      </tr>-->
    </table>

  </div>
</template>

<script>
import * as constants from "../store/db/constants";
import { store } from '../store/index';

function getComp(param) {
  return function() {
    return store.state.war[param];
  };
}

function setComp(param) {
  return function(value) {
    store.commit('war/updateParam', {
      key: param,
      value: value
    });
  };
}

export default {
  data: function() {
    return {
      //troopsType: constants.MELEE,
      //tier: constants.TIER_6,
      pop: 0,
    };
  },
  computed: {
    research: {
      get: getComp('research'),
      set: setComp('research')
    },
    troopsType: {
      get: getComp('troops'),
      set: setComp('troops')
    },
    tier: {
      get: getComp('tier'),
      set: setComp('tier')
    },
    totalInf () {
      return this.$store.getters["research/getTotalInf"](this.research);
    },
    bonus() {
      return this.$store.getters["war/getBonusAttack"];
    },
    isMobile() {
      return this.$store.state.isMobile;
    }
  },
  methods: {
    // onChangeTroops: function() {
    //   this.$store.commit("war/updateParam", {
    //     key: 'troops',
    //     value: this.troopsType
    //   });
    // },
    // onChangeTier: function() {
    //   this.$store.commit("war/updateParam", {
    //     key: 'tier',
    //     value: this.tier
    //   });
    // },
    openEditor: function(id) {
      this.$router.push({ path: `/prod/${id}` });
    },
    addProd: function() {
      this.$store.commit("prod/addBonus", this.newProdType);
    }
  }
};
</script>

<style lang="scss">
.c-war-bonus .table {
  max-width: 280px;
}
</style>
