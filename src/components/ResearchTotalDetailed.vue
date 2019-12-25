<template>
  <div class="field is-grouped is-grouped-multiline">
    <div class="tags is-hidden-tablet">
      <span class="tag" title="Всего выбрано">
        <span class="img img-research w20"></span>
        &nbsp;
        {{ totals.count }}
      </span>
      <span class="tag" title="Могущество">
        <span class="img img-power w20"></span>
        &nbsp;
        {{ totals.inf | roundNumber }}
      </span>
      <span class="tag" title="Еда">
        <span class="img img-food w20"></span>
        <span v-show="Math.abs(totals.food - totals.lumber) > 1000000">&nbsp;{{ totals.food | roundNumber }}</span>
      </span>
      <span class="tag" title="Дерево">
        <span class="img img-lumber w20"></span>
        <span v-show="Math.abs(totals.iron - totals.lumber) > 1000000">&nbsp;{{ totals.lumber | roundNumber }}</span>
      </span>
      <span class="tag" title="Железо">
        <span class="img img-iron w20"></span>
        <span v-show="Math.abs(totals.iron - totals.stone) > 1000000">&nbsp;{{ totals.iron | roundNumber }}</span>
      </span>
      <span class="tag" title="Камень">
        <span class="img img-stone w20"></span>
        &nbsp;
        {{ totals.stone | roundNumber }}
      </span>
      <span class="tag" v-show="totals.silver > 0" title="Серебро">
        <span class="img img-silver w20"></span>
        &nbsp;
        {{ totals.silver | roundNumber }}
      </span>
      <span class="tag" title="Золото">
        <span class="img img-gold w20"></span>
        &nbsp;
        {{ totals.gold | roundNumber }}
      </span>
      <span class="tag" v-show="totals.scroll > 0" title="Манускрипты / Тотемы">
        <!-- <span v-show="totals.type != 'tier6'" class="img img-scroll w20"></span>
        <span v-show="totals.type == 'tier6'" class="img img-totem w20"></span> -->
        <span class="img w20"
          :class="{'img-scroll': totals.type != 'tier6' && totals.type != 'tier7',
                    'img-totem': totals.type == 'tier6',
                    'img-obsidian': totals.type == 'tier7'
                }"
        ></span>
        &nbsp;
        {{ totals.scroll | formatNumber }}
      </span>
      <span class="tag" v-show="totals.bronze > 0" title="Бронза">
        <span class="img img-bronze w20"></span>
        &nbsp;
        {{ totals.bronze | formatNumber }}
      </span>
      <span class="tag" v-show="totals.bronze2 > 0" title="Самородок">
        <!-- <span class="img img-bronze w20"></span>&nbsp; -->
        Самородок&nbsp;
        {{ totals.bronze2 | formatNumber }}
      </span>
    </div>

    <div class="control">
      <div class="tags has-addons">
        <span class="tag" :class="{'is-success': layer == 0, 'is-info': layer == 1, 'is-danger': layer == 2}">Сэт:</span>
        <span class="tag">{{ totals.time_calc | timeToWeeks }}</span>
        <span class="tag is-paddingless">
          <span class="img img-gold w20"></span>
        </span>
        <span class="tag">{{ totals.time_calc | timeToGold | roundNumber }}</span>
      </div>
    </div>

    <div class="control">
      <div class="tags has-addons">
        <span class="tag" :class="{'is-success': layer == 0, 'is-info': layer == 1, 'is-danger': layer == 2}">Клан:</span>
        <span class="tag">{{ totals.time_hands | timeToWeeks }}</span>
        <span class="tag is-paddingless">
          <span class="img img-gold w20"></span>
        </span>
        <span class="tag">{{ totals.time_hands | timeToGold | roundNumber }}</span>
      </div>
    </div>

    <div class="control is-hidden-mobile" v-show="totals.scroll > 0" title="Манускрипты / Тотемы / Обсидиан">
      <span class="tag">
        <!-- <span v-show="totals.type != 'tier6'" class="img img-scroll w20"></span>
                <span v-show="totals.type == 'tier6'" class="img img-totem w20"></span>
        <span v-show="totals.type == 'tier7'" class="img img-totem w20"></span>-->
        <span
          class="img w20"
          :class="{'img-scroll': totals.type != 'tier6' && totals.type != 'tier7',
                    'img-totem': totals.type == 'tier6',
                    'img-obsidian': totals.type == 'tier7'
                }"
        ></span>
        &nbsp;
        {{ totals.scroll | formatNumber }}
      </span>
    </div>

    <span class="tag is-hidden-mobile" title="Золото">
      <span class="img img-gold w20"></span>
      &nbsp;
      {{ totals.gold | roundNumber }}
    </span>

    <div class="is-hidden-tablet">
      <span class="tag" v-show="totals.oracle > 0">Оракул {{ totals.oracle }}</span>
      <span class="tag">
        <button class="button is-small is-primary" @click="onSave" v-show="layer < 2">Сохранить</button>&nbsp;
        <button class="button is-small is-success" @click="onStudied" v-show="layer == 1">В изученное</button>&nbsp;
        <button class="button is-small" @click="onReset">Сброс</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totals: Object,
    layer: Number
  },
  methods: {
    onSave: function() {
      this.$emit('save');
    },
    onStudied: function() {
        this.$emit('studied');
    },
    onReset: function() {
      this.$emit('reset');
    }
  }
};
</script>

