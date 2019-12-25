<template>
  <div class="tile is-ancestor equip-planner">
    <div class="tile is-vertical is-parent" style="max-width:350px;">
      <div class="box">
        <div class="field">
          <div class="control">
            <type-ahead :items="allNames" limit="6" @select="onSelectItem" ref="itemSearch"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <a class="button is-info is-fullwidth" @click="addItem">Добавить вещь</a>
          </div>
        </div>
      </div>
      <div class="tile is-child box">
        <div v-for="(item, index) in items">
          <div class="buttons has-addons is-fullwidth is-item">
            <span
              class="button is-selected is-expanded"
              :class="{'is-success': item.isReady}"
              @click="toggleItemExpand([index])"
            >
              <span class="icon">
                <i
                  class="fa"
                  :class="{'fa-plus-square-o': !item.isExpand,
                          'fa-minus-square-o': item.isExpand}"
                ></i>
              </span>
              &nbsp;
              {{ item.name }}
            </span>
            <span class="button" @click="toggleItemReady([index])">Есть</span>
            <span class="button" @click="removeItem(index)">
              <span class="icon">
                <i class="fa fa-close"></i>
              </span>
            </span>
          </div>
          <div v-show="item.isExpand" v-for="(subItem1, index1) in item.items">
            <div class="buttons has-addons is-fullwidth is-sub-item1">
              <span
                class="button w20"
                :class="{'is-danger': subItem1.grade === 'shaman' || subItem1.grade === 'citadel',
                'is-info': subItem1.grade === 'invader',
                'is-warning': subItem1.grade === 'standard',
                'is-light': subItem1.grade === 'material'}"
              ></span>
              <span
                class="button is-selected is-expanded"
                :class="{'is-success': subItem1.isReady}"
                @click="toggleItemExpand([index, index1])"
              >
                <span class="icon" v-show="subItem1.items.length">
                  <i
                    class="fa"
                    :class="{'fa-plus-square-o': !subItem1.isExpand,
                          'fa-minus-square-o': subItem1.isExpand}"
                  ></i>
                </span>
                <span class="img w20" v-show="!subItem1.items.length"
                  :class="slugs[subItem1.name]"></span>
                &nbsp;
                {{ subItem1.name }}
              </span>
              <span class="button" @click="toggleItemReady([index, index1])">Есть</span>
            </div>
            <div v-show="subItem1.isExpand" v-for="(subItem2, index2) in subItem1.items">
              <div class="buttons has-addons is-fullwidth is-sub-item2">
                <span
                  class="button w20"
                  :class="{'is-danger': subItem2.grade === 'shaman' || subItem2.grade === 'citadel',
                  'is-info': subItem2.grade === 'invader',
                  'is-warning': subItem2.grade === 'standard',
                  'is-light': subItem2.grade === 'material'}"
                ></span>
                <span
                  class="button is-selected is-expanded has-text-right"
                  :class="{'is-success': subItem2.isReady}"
                  @click="toggleItemExpand([index, index1, index2])"
                >
                  <span class="icon" v-show="subItem2.items.length">
                    <i
                      class="fa"
                      :class="{'fa-plus-square-o': !subItem2.isExpand,
                            'fa-minus-square-o': subItem2.isExpand}"
                    ></i>
                  </span>
                  <span class="img w20" v-show="subItem2.grade === 'material'"
                    :class="slugs[subItem2.name]"></span>
                  &nbsp;
                  {{ subItem2.name }}
                </span>
                <span class="button" @click="toggleItemReady([index, index1, index2])">Есть</span>
              </div>

              <!-- level 4 -->
              <div v-show="subItem2.isExpand" v-for="(subItem3, index3) in subItem2.items">
                <div class="buttons has-addons is-fullwidth is-sub-item3">
                  <span
                    class="button w20"
                    :class="{'is-danger': subItem3.grade === 'shaman' || subItem3.grade === 'citadel',
                    'is-info': subItem3.grade === 'invader',
                    'is-warning': subItem3.grade === 'standard',
                    'is-light': subItem3.grade === 'material'}"
                  ></span>
                  <span
                    class="button is-selected is-expanded has-text-right"
                    :class="{'is-success': subItem3.isReady}"
                    @click="toggleItemExpand([index, index1, index2, index3])"
                  >
                    <span class="icon" v-show="subItem3.items.length">
                      <i
                        class="fa"
                        :class="{'fa-plus-square-o': !subItem3.isExpand,
                              'fa-minus-square-o': subItem3.isExpand}"
                      ></i>
                    </span>
                    <span class="img w20" v-show="subItem3.grade === 'material'"
                      :class="slugs[subItem3.name]"></span>
                    &nbsp;
                    {{ subItem3.name }}
                  </span>
                  <span class="button" @click="toggleItemReady([index, index1, index2, index3])">Есть</span>
                </div>

                <!-- level 5 -->
                <div
                  class="buttons has-addons is-fullwidth is-sub-item4"
                  v-show="subItem3.isExpand"
                  v-for="(subItem4, index4) in subItem3.items"
                >
                  <span
                    class="button w20"
                    :class="{'is-danger': subItem4.grade === 'shaman' || subItem4.grade === 'citadel',
                    'is-info': subItem4.grade === 'invader',
                    'is-warning': subItem4.grade === 'standard',
                    'is-light': subItem4.grade === 'material'}"
                  ></span>
                  <span class="button is-selected is-expanded has-text-right" :class="{'is-success': subItem4.isReady}">
                    <span class="img w20" v-show="subItem4.grade === 'material'"
                      :class="slugs[subItem4.name]"></span>
                    &nbsp;
                    {{ subItem4.name }}
                  </span>
                  <span class="button" @click="toggleItemReady([index, index1, index2, index3, index4])">Есть</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tile is-parent" style="max-width:350px;">
      <div class="tile is-child box">
        <p class="title is-4">Рекомендуемые наборы</p>
        <p class="subtitle is-4">Кликните, чтобы добавить</p>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Тип войска:</label>
          </div>
          <div class="control">
            <div class="select">
              <select v-model="troops" aria-label="Выбор типа войска">
                <option value="melee">Пехота</option>
                <option value="cavalry">Кони</option>
                <option value="ranged">Луки</option>
                <option value="siege">Осада</option>
                <option value="killer">Убийцы</option>
                <option value="scout">Шпионы</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field" v-for="(outfit, index) in outfits">
          <div class="control">
            <a class="button is-info is-fullwidth" @click="addOutfit(outfit)">{{ outfit.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeAhead from './TypeAhead.vue';

export default {
  components: {
    TypeAhead
  },
  data: function() {
    return {
      newItem: '',
      troops: 'melee'
    };
  },
  computed: {
    allNames() {
      return this.$store.getters['equip/getAllNames'];
    },
    items() {
      return this.$store.getters['equip/getItems'];
    },
    outfits() {
      let outfits = this.$store.getters['equip/getOutfits'];
      return _.filter(outfits, o => !o.troops || o.troops == this.troops);
    },
    slugs() {
      return this.$store.getters['equip/getSlugsByName'];
    },
  },
  methods: {
    addItem: function() {
      if (this.newItem) {
        this.$store.commit('equip/addItem', this.newItem);
        this.newItem = '';
        this.$refs.itemSearch.clear();
      }
    },
    onSelectItem(item) {
      this.newItem = item;
    },
    removeItem(index) {
      this.$store.commit('equip/removeItem', index);
    },
    toggleItemReady(indexArray) {
      this.$store.commit('equip/toggleItemReady', indexArray);
    },
    toggleItemExpand(indexArray) {
      this.$store.commit('equip/toggleItemExpand', indexArray);
    },
    addOutfit(outfit) {
      this.$store.commit('equip/addOutfit', outfit);
    }
  }
};
</script>

<style lang="scss">
.equip-planner .buttons {
  margin: 0;
}
.equip-planner .is-item {
  margin-bottom: 0;
}
.equip-planner .buttons.is-sub-item1 {
  margin-left: 8px;
}
.equip-planner .buttons.is-sub-item2 {
  margin-left: 16px;
}
.equip-planner .buttons.is-sub-item3 {
  margin-left: 24px;
}
.equip-planner .buttons.is-sub-item4 {
  margin-left: 32px;
}
.equip-planner .buttons .button:nth-of-type(1) {
  padding: 5px;
}
.equip-planner .buttons .button {
  font-size: 0.9em;
}
</style>
