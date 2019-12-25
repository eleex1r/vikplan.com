<template>
    <base-layout>
        <template slot="title">
            Новый сет на знания
        </template>

        <table class="table is-bordered is-narrow table-total">
            <tbody>
                <tr>
                    <th>Примечание:</th>
                    <td-editable colspan="3" :value="bonus.note" @updated="updateBonus($event, 'note')"></td-editable>
                </tr>
                <tr>
                    <th>Бонус базовый:</th>
                    <td>{{ bonusBase | formatNumber }}</td>
                    <th>Бонус общий:</th>
                    <td>{{ bonusTotal | formatNumber }}</td>
                </tr>
            </tbody>
        </table>

        <table class="table is-bordered is-narrow">
            <tbody>
                <tr>
                    <th>Оракул</th>
                    <th>Скин</th>
                    <th>Бонус</th>
                    <th>Буст</th>
                    <th>Титул</th>
                </tr>
                <tr>
                    <td>
                        <div class="select is-small">
                            <select v-model.number="bonus.oracle">
                                <option value="15">ур 15 - 15</option>
                                <option value="16">ур 16 - 16</option>
                                <option value="17">ур 17 - 17</option>
                                <option value="18">ур 18 - 18</option>
                                <option value="19">ур 19 - 19</option>
                                <option value="20">ур 20 - 20</option>
                                <option value="25">ур 21 - 25</option>
                                <option value="30">ур 22 - 30</option>
                                <option value="35">ур 23 - 35</option>
                                <option value="40">ур 24 - 40</option>
                                <option value="45">ур 25 - 45</option>
                                <option value="50">ур 26 - 50</option>
                                <option value="52">ур 27 - 52</option>
                                <option value="54">ур 28 - 54</option>
                                <option value="56">ур 29 - 56</option>
                                <option value="58">ур 30 - 58</option>
                                <option value="65">ур 31 - 65</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div class="select is-small">
                            <select v-model.number="bonus.skin">
                                <option>0</option>
                                <option>2</option>
                                <option>5</option>
                                <option>10</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div class="select is-small">
                            <select v-model.number="bonus.event">
                                <option value="0">0</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div class="select is-small">
                            <select v-model.number="bonus.boost">
                                <option>0</option>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>35</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div class="select is-small">
                            <select v-model.number="bonus.repute">
                                <option>0</option>
                                <option>25</option>
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
                    <th>Навыки героя
                        <a class="button is-small is-pulled-right" @click="toggleTables('openHero')">
                            <span class="icon">
                                <i class="fa" :class="{ 'fa-angle-up': ui.openHero, 'fa-angle-down': !ui.openHero }"></i>
                            </span>
                        </a>
                    </th>
                    <td>{{ bonus.heroBonus1 + bonus.heroBonus2 }}</td>
                </tr>
                <tr v-show="ui.openHero">
                    <td>Скорость изучения знаний I</td>
                    <td-editable :value="bonus.heroBonus1" @updated="updateBonus($event, 'heroBonus1')"></td-editable>
                </tr>
                <tr v-show="ui.openHero">
                    <td>Скорость изучения знаний II</td>
                    <td-editable :value="bonus.heroBonus2" @updated="updateBonus($event, 'heroBonus2')"></td-editable>
                </tr>
                <tr>
                    <th>Навыки шамана
                        <a class="button is-small is-pulled-right" @click="toggleTables('openShaman')">
                            <span class="icon">
                                <i class="fa" :class="{'fa-angle-up': ui.openShaman, 'fa-angle-down': !ui.openShaman}"></i>
                            </span>
                        </a>
                    </th>
                    <td>{{ bonus.shamanBonus + bonus.shamanBonus1 + bonus.shamanBonus2}}</td>
                </tr>
                <tr v-show="ui.openShaman">
                    <td>Скорость изучения знаний</td>
                    <td>
                        <div class="select is-small">
                            <select v-model.number="bonus.shamanBonus">
                                <option value="0">0</option>
                                <option v-for="(value, index) in optShamanLevels['research']"
                                        :value="value" v-once>{{ index + 1 }} ступень - {{ value }}</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr v-show="ui.openShaman">
                    <td>Скорость изучения знаний I</td>
                    <td>
                        <div class="select is-small">
                            <select v-model.number="bonus.shamanBonus1">
                                <option>0</option>
                                <option>20</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr v-show="ui.openShaman">
                    <td>Скорость изучения знаний II</td>
                    <td>
                        <div class="select is-small">
                            <select v-model.number="bonus.shamanBonus2">
                                <option>0</option>
                                <option>35</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>Стоимость знаний
                        <a class="button is-small is-pulled-right" @click="toggleTables('openCost')">
                            <span class="icon">
                                <i class="fa" :class="{ 'fa-angle-up': ui.openCost, 'fa-angle-down': !ui.openCost }"></i>
                            </span>
                        </a>
                    </th>
                    <td>-{{ bonus.costHero + bonus.costShaman1 + bonus.costShaman2 }}%</td>
                </tr>
                <tr v-show="ui.openCost">
                    <th>Навыки героя:</th>
                    <td>
                        <div class="select is-small">
                            <select v-model.number="bonus.costHero">
                                <option>0</option>
                                <option>10</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr v-show="ui.openCost">
                    <th>Ступень шамана:</th>
                    <td>
                        <div class="select is-small">
                            <select v-model.number="bonus.costShaman1">
                                <option value="0">0</option>
                                <option v-for="(value, index) in optShamanLevels['cost']"
                                        :value="value">ур {{ index + 1 }} - {{ value }}</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr v-show="ui.openCost">
                    <th>Навыки шамана:</th>
                    <td>
                        <div class="select is-small">
                            <select v-model.number="bonus.costShaman2">
                                <option>0</option>
                                <option>5</option>
                            </select>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </base-layout>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

import BaseLayout from '../partials/BaseLayout.vue'
import TdEditable from '../components/TdEditable.vue'
import BackButton from '../components/BackButton.vue'

export default {
    components: {
        BaseLayout,
        TdEditable,
        BackButton
    },
    data: function() {
        return {
            ui: {
                openHero: false,
                openShaman: false,
                openCost: false
            },
            optShamanLevels: {
                research: [1,4,8,14,21,30],
                cost:     [0.5, 1, 1.5, 2, 3, 5]
            },

        }
    },
    computed: {
        id () {
            return 'research' + this.$route.params.id;
        },
        isMobile () {
            return this.$store.state.isMobile;
        },
        bonus () {
            return this.$store.getters['research/getBonus'](this.id);
        },
        bonusBase () {
            return this.$store.getters['research/getBonusBase'](this.id);
        },
        bonusTotal () {
            return this.$store.getters['research/getBonusTotal'](this.id);
        },
    },
    methods: {
        toggleTables: function(tableType) {
            this.ui[tableType] = !this.ui[tableType];
        },
        updateBonus: function(value, bonusType) {
            this.$store.commit('research/updateBonus', {
                id: this.id,
                param: bonusType,
                value
            });
        }
    }
}

</script>

<style lang="scss">

.table-total td, .table-total th {
    white-space: nowrap;
}

</style>
