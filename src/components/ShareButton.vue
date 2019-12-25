<template>
  <div class="share-button">
    <button v-show="!showForm && !showUrl" class="button is-large is-info is-fullwidth" @click="openForm">Поделиться</button>

    <div class="field is-fullwidth" v-show="showUrl">
      <label class="label">Ссылка для копирования:</label>
      <div class="control">
        <input id="research-url" class="input is-success" type="text" placeholder readonly v-model="url">
        <p class="help is-success" v-show="showSuccessCopy">Ссылка скопирована в буфер обмена</p>
      </div>
    </div>

    <div v-show="showForm">
      <div class="field is-fullwidth">
        <label class="label">Название прокачки:</label>
        <div class="control has-icons-right">
          <input class="input" type="text" v-model="name" :class="isValid && 'is-primary' || 'is-danger'">
          <span class="icon is-small is-right" @click="clearName" style="pointer-events:auto;">
            <i class="fa fa-close"></i>
          </span>
        </div>
        <p class="help is-danger" v-show="showError">Название занято. Выберите другое</p>
        <p class="help" v-show="!showError">4-22 символа, цифры и латинские буквы</p>
      </div>
      <div class="field is-grouped is-fullwidth">
        <div class="control">
          <button class="button is-primary" @click="send">Получить ссылку</button>
        </div>
        <div class="control">
          <button class="button is-text" @click="cancel">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';

export default {
  name: 'ShareButton',
  data() {
    return {
      showForm: false,
      showUrl: false,
      name: '',
      showError: false,
      showSuccessCopy: false,
      troopTypes: [
        'melee',
        'ranged',
        'cavalry',
        'siege',
        'killer',
        'scout'
      ]
    };
  },
  computed: {
    isValid() {
      const name = this.name;
      if (name.length < 4 || name.length > 22) return false;
      if (/[^A-Za-z0-9-]/g.test(name)) return false;
      return true;
    },
    url() {
      return (this.isValid && this.$baseUrl + '/r/' + this.name) || '';
    },
    troops() {
      return this.troopTypes[this.$store.state.war.troops - 1].substr(0, 3);
    },
    tier() {
      return this.$store.state.war.tier;
    }
  },
  methods: {
    openForm() {
      let name = this.troops + this.tier + '-';
      const now = new Date();
      //name += now.getUTCFullYear() - 2000;
      name += _.padStart(now.getUTCMonth() + 1, 2, '0');
      name += _.padStart(now.getUTCDate(), 2, '0');
      name += _.padStart(now.getUTCHours(), 2, '0');
      name += _.padStart(now.getUTCMinutes(), 2, '0');
      name += _.padStart(now.getUTCSeconds(), 2, '0');
      this.name = name;
      this.showForm = true;
    },
    cancel() {
      this.showForm = false;
      this.name = '';
    },
    send() {
      this.$store.dispatch('firestore/save', this.name).then(result => {
        if (result) {
          this.showForm = false;
          this.showUrl = true;
          this.copyToClipboard();
          gtag('event', 'share');
        } else {
          this.showError = true;
          setTimeout(() => {
            this.showError = false;
          }, 3000);
        }
      });
    },
    clearName() {
      this.name = '';
    },
    copyToClipboard() {
      Vue.nextTick(() => {
        let el = document.getElementById('research-url');
        el.focus();
        el.select();
        try {
          this.showSuccessCopy = document.execCommand('copy');
        } catch (err) {}
      });
    }
  }
};
</script>

<style lang="scss">
.share-button {
  max-width: 280px;
}
</style>
