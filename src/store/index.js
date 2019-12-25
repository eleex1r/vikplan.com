import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

import nav from "./nav";
import equip from "./equip";
import research from "./research";
import buildings from "./buildings";
import prod from "./prod";
import war from "./war";
import firestore from "./firestore";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isMobile: true
  },
  mutations: {
    checkMobile(state) {
      state.isMobile = /Mobile/i.test(navigator.userAgent);
    }
  },
  modules: {
    nav,
    equip,
    research,
    buildings,
    war,
    prod,
    firestore
  },
  plugins: [createPersistedState({
    key: 'vikplan',

  })]
});
