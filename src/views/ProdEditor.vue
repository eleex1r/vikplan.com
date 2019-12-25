<template>
  <section class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link to="/">ВикПлан</router-link></li>
        <li><router-link to="/prod">Выработка ресурсов</router-link></li>
        <li class="is-active"><a href="#" aria-current="page">{{ prodNames[bonus.type] }}</a></li>
      </ul>
    </nav>

    <h1 class="title" :class="{'is-2': !isMobile, 'is-4': isMobile}">Выработка ресурса - {{ prodNames[bonus.type] }}</h1>

    <table class="table is-bordered is-narrow table-total">
      <tbody>
        <tr>
          <th>Примечание:</th>
          <td-editable colspan="3" :value="bonus.note" @updated="updateBonus($event, 'note')"></td-editable>
        </tr>
        <tr>
          <th>Добыча в час:</th>
          <td>{{ production | formatNumber }}</td>
          <th>Бонус:</th>
          <td>{{ bonusTotal | formatNumber }}</td>
        </tr>
        <tr>
          <th>Вместимость:</th>
          <td>{{ capacity | formatNumber }}</td>
          <th>Заполн:</th>
          <td>{{ capacity / production | time }}</td>
        </tr>
      </tbody>
    </table>
    <table class="table is-bordered is-narrow">
      <tbody>
        <tr>
          <th></th>
          <th>21</th>
          <th>22</th>
          <th>23</th>
          <th>24</th>
          <th>25</th>
          <th>26</th>
          <th>27</th>
          <th>28</th>
          <th>29</th>
          <th>30</th>
          <th>31</th>
        </tr>
        <tr>
          <th>Шахты</th>
          <td-editable :value="bonus.mine21" @updated="updateBonus($event, 'mine21')"></td-editable>
          <td-editable :value="bonus.mine22" @updated="updateBonus($event, 'mine22')"></td-editable>
          <td-editable :value="bonus.mine23" @updated="updateBonus($event, 'mine23')"></td-editable>
          <td-editable :value="bonus.mine24" @updated="updateBonus($event, 'mine24')"></td-editable>
          <td-editable :value="bonus.mine25" @updated="updateBonus($event, 'mine25')"></td-editable>
          <td-editable :value="bonus.mine26" @updated="updateBonus($event, 'mine26')"></td-editable>
          <td-editable :value="bonus.mine27" @updated="updateBonus($event, 'mine27')"></td-editable>
          <td-editable :value="bonus.mine28" @updated="updateBonus($event, 'mine28')"></td-editable>
          <td-editable :value="bonus.mine29" @updated="updateBonus($event, 'mine29')"></td-editable>
          <td-editable :value="bonus.mine30" @updated="updateBonus($event, 'mine30')"></td-editable>
          <td-editable :value="bonus.mine31" @updated="updateBonus($event, 'mine31')"></td-editable>
        </tr>
        <tr>
          <th colspan="8">Вместимость: Запасы {{ prodNames2[bonus.type] }} I</th>
          <td colspan="4">
            <div class="select is-small">
              <select v-model.number="bonus.capacity1">
                <option value="0">0</option>
                <option
                  v-for="(value, index) in optCapacity1[bonus.type]"
                  :value="value"
                >ур {{ index + 1 }} - {{ value }}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <th colspan="8">Вместимость: Запасы {{ prodNames2[bonus.type] }} II</th>
          <td colspan="4">
            <div class="select is-small">
              <select v-model.number="bonus.capacity2">
                <option value="0">0</option>
                <option
                  v-for="(value, index) in optCapacity2[bonus.type]"
                  :value="value"
                >ур {{ index + 1 }} - {{ value }}</option>
              </select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table is-bordered is-narrow">
      <tbody>
        <tr>
          <th rowspan="2">Вип</th>
          <th rowspan="2">Скин</th>
          <th rowspan="2">Долина</th>
          <th colspan="2">Бусты</th>
        </tr>
        <tr>
          <th>общ</th>
          <th>перс</th>
        </tr>
        <tr>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.vip">
                <option value="0">0</option>
                <option value="11">вип 8 - 11</option>
                <option value="13">вип 9 - 13</option>
                <option value="15">вип 10 - 15</option>
                <option value="17">вип 11 - 17</option>
                <option value="19">вип 12 - 19</option>
                <option value="21">вип 13 - 21</option>
                <option value="23">вип 14 - 24</option>
                <option value="25">вип 15 - 25</option>
                <option value="27">вип 16 - 27</option>
                <option value="29">вип 17 - 29</option>
                <option value="31">вип 18 - 31</option>
                <option value="33">вип 19 - 33</option>
                <option value="35">вип 20 - 35</option>
                <option value="37">вип 21 - 37</option>
                <option value="39">вип 22 - 39</option>
                <option value="41">вип 23 - 41</option>
                <option value="43">вип 24 - 43</option>
                <option value="45">вип 25 - 45</option>
                <option value="47">вип 26 - 47</option>
                <option value="49">вип 27 - 49</option>
                <option value="51">вип 28 - 51</option>
                <option value="55">вип 29 - 55</option>
                <option value="60">вип 30 - 60</option>
              </select>
            </div>
          </td>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.skin">
                <option>0</option>
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
          </td>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.citadel">
                <option value="0">0</option>
                <option value="20">цита 1 - 20</option>
                <option value="30">цита 2 - 30</option>
                <option value="40">цита 3 - 40</option>
              </select>
            </div>
          </td>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.boostAll">
                <option>0</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>
          </td>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.boostProd">
                <option>0</option>
                <option>50</option>
                <option>100</option>
                <option v-if="bonus.type == 'food'">150</option>
              </select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table is-bordered is-narrow">
      <tbody>
        <tr>
          <th>Шмот</th>
          <th>Шлем</th>
          <th>Оружие</th>
          <th>Броня</th>
          <th>Обувь</th>
          <th colspan="2">Амулеты</th>
        </tr>
        <tr>
          <th>Герой</th>
          <td-editable :value="bonus.equipHeroHelm" @updated="updateBonus($event, 'equipHeroHelm')"></td-editable>
          <td-editable :value="bonus.equipHeroWeapon" @updated="updateBonus($event, 'equipHeroWeapon')"></td-editable>
          <td-editable :value="bonus.equipHeroArmor" @updated="updateBonus($event, 'equipHeroArmor')"></td-editable>
          <td-editable :value="bonus.equipHeroBoot" @updated="updateBonus($event, 'equipHeroBoot')"></td-editable>
          <td-editable :value="bonus.equipHeroAmulet1" @updated="updateBonus($event, 'equipHeroAmulet1')"></td-editable>
          <td-editable :value="bonus.equipHeroAmulet2" @updated="updateBonus($event, 'equipHeroAmulet2')"></td-editable>
        </tr>
        <tr>
          <th>Шаман</th>
          <td-editable :value="bonus.equipShamanHelm" @updated="updateBonus($event, 'equipShamanHelm')"></td-editable>
          <td-editable :value="bonus.equipShamanWeapon" @updated="updateBonus($event, 'equipShamanWeapon')"></td-editable>
          <td-editable :value="bonus.equipShamanArmor" @updated="updateBonus($event, 'equipShamanArmor')"></td-editable>
          <td-editable :value="bonus.equipShamanBoot" @updated="updateBonus($event, 'equipShamanBoot')"></td-editable>
          <td-editable :value="bonus.equipShamanAmulet1" @updated="updateBonus($event, 'equipShamanAmulet1')"></td-editable>
          <td-editable :value="bonus.equipShamanAmulet2" @updated="updateBonus($event, 'equipShamanAmulet2')"></td-editable>
        </tr>
      </tbody>
    </table>
    <table class="table is-bordered is-narrow">
      <tbody>
        <tr>
          <th>
            Навыки героя
            <a class="button is-small is-pulled-right" @click="toggleTables('openHero')">
              <span class="icon">
                <i class="fa" :class="{ 'fa-angle-up': ui.openHero, 'fa-angle-down': !ui.openHero }"></i>
              </span>
            </a>
          </th>
          <td>{{bonusHeroTotal}}</td>
        </tr>
        <tr v-show="ui.openHero">
          <td>Производство {{ prodNames2[bonus.type] }} I</td>
          <td-editable :value="bonus.heroProd1" @updated="updateBonus($event, 'heroProd1')"></td-editable>
        </tr>
        <tr v-show="ui.openHero">
          <td>Производство {{ prodNames2[bonus.type] }} II</td>
          <td-editable :value="bonus.heroProd2" @updated="updateBonus($event, 'heroProd2')"></td-editable>
        </tr>
        <tr v-show="ui.openHero">
          <td>Производство {{ prodNames2[bonus.type] }} III</td>
          <td-editable :value="bonus.heroProd3" @updated="updateBonus($event, 'heroProd3')"></td-editable>
        </tr>
        <tr v-show="ui.openHero">
          <td>Производство ресурсов I</td>
          <td-editable :value="bonus.heroAllProd1" @updated="updateBonus($event, 'heroAllProd1')"></td-editable>
        </tr>
        <tr v-show="ui.openHero">
          <td>Производство ресурсов II</td>
          <td-editable :value="bonus.heroAllProd2" @updated="updateBonus($event, 'heroAllProd2')"></td-editable>
        </tr>
        <tr>
          <th>
            Навыки шамана
            <a class="button is-small is-pulled-right" @click="toggleTables('openShaman')">
              <span class="icon">
                <i class="fa" :class="{'fa-angle-up': ui.openShaman, 'fa-angle-down': !ui.openShaman}"></i>
              </span>
            </a>
          </th>
          <td>{{bonusShamanTotal}}</td>
        </tr>
        <tr v-show="ui.openShaman">
          <td>Производство ресурсов</td>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.shamanAllProd">
                <option value="0">0</option>
                <option
                  v-for="(value, index) in optShamanLevels['all']"
                  :value="value"
                  v-once
                >{{ index + 1 }} ступень - {{ value }}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr v-show="ui.openShaman && (bonus.type == 'food' || bonus.type == 'silver')">
          <td>Производство {{ prodNames2[bonus.type] }}</td>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.shamanProd">
                <option value="0">0</option>
                <option
                  v-for="(value, index) in optShamanLevels[bonus.type]"
                  :value="value"
                  v-once
                >{{ index + 1 }} ступень - {{ value }}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr v-show="ui.openShaman">
          <td>Производство {{ prodNames2[bonus.type] }} I</td>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.shamanProd1">
                <option>0</option>
                <option>{{ optShamanSkills[bonus.type][0] }}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr v-show="ui.openShaman">
          <td>Производство {{ prodNames2[bonus.type] }} II</td>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.shamanProd2">
                <option>0</option>
                <option>{{ optShamanSkills[bonus.type][1] }}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr v-show="ui.openShaman">
          <td>Производство {{ prodNames2[bonus.type] }} III</td>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.shamanProd3">
                <option>0</option>
                <option>{{ optShamanSkills[bonus.type][2] }}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr v-show="ui.openShaman">
          <td>Производство ресурсов I</td>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.shamanAllProd1">
                <option>0</option>
                <option>5</option>
              </select>
            </div>
          </td>
        </tr>
        <tr v-show="ui.openShaman">
          <td>Производство ресурсов II</td>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.shamanAllProd2">
                <option>0</option>
                <option>15</option>
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <th>
            Знания
            <a class="button is-small is-pulled-right" @click="toggleTables('openKnowledge')">
              <span class="icon">
                <i class="fa" :class="{'fa-angle-up': ui.openKnowledge, 'fa-angle-down': !ui.openKnowledge}"></i>
              </span>
            </a>
          </th>
          <td>{{bonusKnowTotal}}</td>
        </tr>
        <tr v-show="ui.openKnowledge">
          <td>Производство ресурсов</td>
          <!-- <td-editable :value="bonus.knowAllProd" @updated="updateBonus($event, 'knowAllProd')"></td-editable> -->
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.knowAllProd">
                <option value="0">0</option>
                <option value="0.5">ур 1 - 0.5</option>
                <option value="1">ур 2 - 1</option>
                <option value="1.5">ур 3 - 1.5</option>
                <option value="2">ур 4 - 2</option>
                <option value="2.5">ур 5 - 2.5</option>
                <option value="3.5">ур 6 - 3.5</option>
                <option value="4.5">ур 7 - 4.5</option>
                <option value="5.5">ур 8 - 5.5</option>
                <option value="6.5">ур 9 - 6.5</option>
                <option value="10">ур 10 - 10</option>
              </select>
            </div>
          </td>
        </tr>
        <tr v-show="ui.openKnowledge">
          <td>{{ knowNames[bonus.type] }} I</td>
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.knowProd1">
                <option value="0">0</option>
                <option
                  v-for="(value, index) in optKnowledge1[bonus.type]"
                  :value="value"
                  v-once
                >ур {{ index + 1 }} - {{ value }}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr v-show="ui.openKnowledge">
          <td>{{ knowNames[bonus.type] }} II</td>
          <!-- <td-editable :value="bonus.knowProd2" @updated="updateBonus($event, 'knowProd2')"></td-editable> -->
          <td>
            <div class="select is-small">
              <select v-model.number="bonus.knowProd2">
                <option value="0">0</option>
                <option v-for="(value, index) in optKnowledge2" :value="value" v-once>ур {{ index + 1 }} - {{ value }}</option>
              </select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import TdEditable from '../components/TdEditable.vue';
import BackButton from '../components/BackButton.vue';

export default {
  components: {
    TdEditable,
    BackButton
  },
  data: function() {
    return {
      ui: {
        openHero: false,
        openShaman: false,
        openKnowledge: false
      },
      prodNames: {
        food: 'Еда',
        lumber: 'Дерево',
        iron: 'Железо',
        stone: 'Камень',
        silver: 'Серебро'
      },
      prodNames2: {
        food: 'еды',
        lumber: 'дерева',
        iron: 'железа',
        stone: 'камня',
        silver: 'серебра'
      },
      knowNames: {
        food: 'Фермерство',
        lumber: 'Деревообработка',
        iron: 'Металлургия',
        stone: 'Горное дело',
        silver: 'Производство Серебра'
      },
      optCapacity1: {
        food: [1.5, 4.5, 9, 15.5, 24, 34.5, 47, 62, 79.5, 100],
        lumber: [1.5, 4.5, 9, 15.5, 24, 34.5, 47, 62, 79.5, 100],
        iron: [1.5, 4.5, 9, 15.5, 24, 34.5, 47, 62, 79.5, 100],
        stone: [1.5, 4.5, 9, 15.5, 24, 34.5, 47, 62, 79.5, 100],
        silver: [2, 6, 12.5, 22, 34.5, 50, 69, 92, 119, 150]
      },
      optCapacity2: {
        food: [2, 6, 12.5, 22, 34.5, 50, 69, 92, 119, 150],
        lumber: [2, 6, 12.5, 22, 34.5, 50, 69, 92, 119, 150],
        iron: [2, 6, 12.5, 22, 34.5, 50, 69, 92, 119, 150],
        stone: [2, 6, 12.5, 22, 34.5, 50, 69, 92, 119, 150],
        silver: [4, 12, 24, 41, 63, 90, 122, 159, 201, 250]
      },
      optKnowledge1: {
        food: [1, 3, 6, 10, 15, 22, 31, 43, 58, 78],
        lumber: [1, 3, 6, 10, 15, 22, 31, 43, 58, 78],
        iron: [1, 3, 6, 10, 15, 22, 31, 43, 58, 78],
        stone: [1, 3, 6, 10, 15, 22, 31, 43, 58, 78],
        silver: [1, 3, 6, 10, 15, 21.5, 29.5, 39.5, 51.5, 66]
      },
      optKnowledge2: [1.5, 4.5, 9, 15.5, 24, 34.5, 47, 62, 79.5, 100],
      optShamanSkills: {
        food: [70, 150, 300],
        lumber: [50, 80, 120],
        iron: [50, 80, 120],
        stone: [50, 80, 120],
        silver: [40, 60, 90]
      },
      optShamanLevels: {
        food: [5, 14, 24, 37, 62, 120],
        lumber: [],
        iron: [],
        stone: [],
        silver: [1, 5, 10, 18, 33, 60],
        all: [1, 1.5, 2, 3, 5, 10]
      },
      description: 'Информация, как влияют уровень шахт и различные бонусы на выработку выбранного ресурса ' +
        'и его вместимость. За какое время заполнятся хранилища.'
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    isMobile() {
      return this.$store.state.isMobile;
    },
    bonus() {
      return this.$store.getters['prod/getBonus'](this.id);
    },
    bonusHeroTotal() {
      return this.$store.getters['prod/getProdBonusHeroTotal'](this.id);
    },
    bonusShamanTotal() {
      return this.$store.getters['prod/getProdBonusShamanTotal'](this.id);
    },
    bonusKnowTotal() {
      return this.$store.getters['prod/getProdBonusKnowTotal'](this.id);
    },
    bonusTotal() {
      return this.$store.getters['prod/getBonusTotal'](this.id);
    },
    capacity() {
      return this.$store.getters['prod/getProdCapacity'](this.id);
    },
    production() {
      return this.$store.getters['prod/getProduction'](this.id);
    }
  },
  metaInfo() {
    return {
      title: 'Выработка ресурса - ' + this.prodNames[this.bonus.type],
      meta: [{ name: 'description', content: this.description }]
    };
  },
  methods: {
    toggleTables: function(tableType) {
      this.ui[tableType] = !this.ui[tableType];
    },
    updateBonus: function(value, bonusType) {
      this.$store.commit('prod/updateBonus', {
        id: this.id,
        param: bonusType,
        value
      });
    }
  },
  filters: {
    time: function(value) {
      if (!isFinite(value)) {
        return '-';
      }
      let hours = Math.floor(value),
        minutes = Math.floor((value - hours) * 60);
      return `${hours} ч ${minutes} мин`;
    }
  },
  mounted() {
    //console.log('mounted', this.id);
    gtag('config', this.$gtag, {'page_path': '/prod/' + this.id});
  }
};
</script>

<style lang="scss">
// table {
//     font-size: 0.75rem;
// }

// table .select select {
//     font-size: 0.7rem;
// }

// .is-mobile table.table {
//     transform: scale(0.75, 0.85);
//     transform-origin: left;
//     margin-bottom: 0;
// }

.table-total td,
.table-total th {
  white-space: nowrap;
}
</style>
