import Vue from 'vue';

const mines = {
  iron: {
    mine21: {
      capacity: 451500,
      prod: 6300
    },
    mine22: {
      capacity: 532500,
      prod: 7050
    },
    mine23: {
      capacity: 631500,
      prod: 7950
    },
    mine24: {
      capacity: 748500,
      prod: 9000
    },
    mine25: {
      capacity: 883500,
      prod: 10200
    },
    mine26: {
      capacity: 1036500,
      prod: 11700
    },
    mine27: {
      capacity: 1207500,
      prod: 13350
    },
    mine28: {
      capacity: 1396500,
      prod: 15225
    },
    mine29: {
      capacity: 1603500,
      prod: 17325
    },
    mine30: {
      capacity: 1828500,
      prod: 19650
    },
    mine31: {
      capacity: 2071500,
      prod: 22200
    }
  },
  food: {
    mine21: {
      capacity: 752500,
      prod: 10500
    },
    mine22: {
      capacity: 887500,
      prod: 11750
    },
    mine23: {
      capacity: 1052500,
      prod: 13250
    },
    mine24: {
      capacity: 1247500,
      prod: 15000
    },
    mine25: {
      capacity: 1472500,
      prod: 17000
    },
    mine26: {
      capacity: 1727500,
      prod: 19500
    },
    mine27: {
      capacity: 2012500,
      prod: 22250
    },
    mine28: {
      capacity: 2327500,
      prod: 25375
    },
    mine29: {
      capacity: 2672500,
      prod: 28875
    },
    mine30: {
      capacity: 3047500,
      prod: 32750
    },
    mine31: {
      capacity: 3452500,
      prod: 37000
    }
  },
  silver: {
    mine21: {
      capacity: 301000,
      prod: 4200
    },
    mine22: {
      capacity: 355000,
      prod: 4700
    },
    mine23: {
      capacity: 421000,
      prod: 5300
    },
    mine24: {
      capacity: 499000,
      prod: 6000
    },
    mine25: {
      capacity: 589000,
      prod: 6800
    },
    mine26: {
      capacity: 691000,
      prod: 7800
    },
    mine27: {
      capacity: 805000,
      prod: 8900
    },
    mine28: {
      capacity: 931000,
      prod: 10150
    },
    mine29: {
      capacity: 1069000,
      prod: 11550
    },
    mine30: {
      capacity: 1219000,
      prod: 13100
    },
    mine31: {
      capacity: 1381000,
      prod: 14800
    }
  },
  lumber: {
    mine21: {
      capacity: 602000,
      prod: 8400
    },
    mine22: {
      capacity: 710000,
      prod: 9400
    },
    mine23: {
      capacity: 842000,
      prod: 10600
    },
    mine24: {
      capacity: 998000,
      prod: 12000
    },
    mine25: {
      capacity: 1178000,
      prod: 13600
    },
    mine26: {
      capacity: 1382000,
      prod: 15600
    },
    mine27: {
      capacity: 1610000,
      prod: 17800
    },
    mine28: {
      capacity: 1862000,
      prod: 20300
    },
    mine29: {
      capacity: 2138000,
      prod: 23100
    },
    mine30: {
      capacity: 2438000,
      prod: 26200
    },
    mine31: {
      capacity: 2762000,
      prod: 29600
    }
  },
  stone: {
    mine21: {
      capacity: 602000,
      prod: 8400
    },
    mine22: {
      capacity: 710000,
      prod: 9400
    },
    mine23: {
      capacity: 842000,
      prod: 10600
    },
    mine24: {
      capacity: 998000,
      prod: 12000
    },
    mine25: {
      capacity: 1178000,
      prod: 13600
    },
    mine26: {
      capacity: 1382000,
      prod: 15600
    },
    mine27: {
      capacity: 1610000,
      prod: 17800
    },
    mine28: {
      capacity: 1862000,
      prod: 20300
    },
    mine29: {
      capacity: 2138000,
      prod: 23100
    },
    mine30: {
      capacity: 2438000,
      prod: 26200
    },
    mine31: {
      capacity: 2762000,
      prod: 29600
    }
  }
};

export default {
  namespaced: true,
  state: {
    productions: ["lumber1", "silver1", "iron1"],
    bonuses: {
      iron1: {
        id: "iron1",
        note: "твин железо",
        type: "iron",

        heroProd1: 40,
        heroProd2: 65,
        heroProd3: 350,
        heroAllProd1: 20,
        heroAllProd2: 30,
        shamanAllProd: 10,
        shamanProd: 0,
        shamanProd1: 50,
        shamanProd2: 80,
        shamanProd3: 120,
        shamanAllProd1: 5,
        shamanAllProd2: 15,
        knowAllProd: 10,
        knowProd1: 78,
        knowProd2: 34.5,

        equipHeroHelm: 85.9,
        equipHeroWeapon: 70,
        equipHeroArmor: 70,
        equipHeroBoot: 10,
        equipHeroAmulet1: 77.5,
        equipHeroAmulet2: 77.5,
        equipShamanHelm: 0,
        equipShamanWeapon: 0,
        equipShamanArmor: 0,
        equipShamanBoot: 22,
        equipShamanAmulet1: 10,
        equipShamanAmulet2: 0,

        vip: 35,
        skin: 0,
        citadel: 40,
        boostAll: 50,
        boostProd: 100,

        mine21: 0,
        mine22: 0,
        mine23: 0,
        mine24: 0,
        mine25: 0,
        mine26: 0,
        mine27: 21,
        mine28: 1,
        mine29: 0,
        mine30: 0,
        mine31: 0,

        capacity1: 34.5,
        capacity2: 50
      },
      lumber1: {
        id: "lumber1",
        note: "основа дерево",
        type: "lumber",

        heroProd1: 40,
        heroProd2: 65,
        heroProd3: 350,
        heroAllProd1: 20,
        heroAllProd2: 30,
        shamanAllProd: 10,
        shamanProd: 0,
        shamanProd1: 50,
        shamanProd2: 80,
        shamanProd3: 120,
        shamanAllProd1: 5,
        shamanAllProd2: 15,
        knowAllProd: 10,
        knowProd1: 78,
        knowProd2: 47,

        equipHeroHelm: 10,
        equipHeroWeapon: 64,
        equipHeroArmor: 64,
        equipHeroBoot: 64,
        equipHeroAmulet1: 10,
        equipHeroAmulet2: 10,
        equipShamanHelm: 16,
        equipShamanWeapon: 85,
        equipShamanArmor: 0,
        equipShamanBoot: 0,
        equipShamanAmulet1: 10,
        equipShamanAmulet2: 10,

        vip: 45,
        skin: 10,
        citadel: 40,
        boostAll: 100,
        boostProd: 100,

        mine21: 0,
        mine22: 0,
        mine23: 0,
        mine24: 0,
        mine25: 0,
        mine26: 15,
        mine27: 6,
        mine28: 0,
        mine29: 1,
        mine30: 0,
        mine31: 0,

        capacity1: 47,
        capacity2: 69
      },
      silver1: {
        id: "silver1",
        note: "основа серебро",
        type: "silver",

        heroProd1: 40,
        heroProd2: 65,
        heroProd3: 350,
        heroAllProd1: 20,
        heroAllProd2: 30,
        shamanAllProd: 10,
        shamanProd: 60,
        shamanProd1: 40,
        shamanProd2: 60,
        shamanProd3: 90,
        shamanAllProd1: 5,
        shamanAllProd2: 15,
        knowAllProd: 10,
        knowProd1: 29.5,
        knowProd2: 15.5,

        equipHeroHelm: 190,
        equipHeroWeapon: 10,
        equipHeroArmor: 80,
        equipHeroBoot: 175,
        equipHeroAmulet1: 220,
        equipHeroAmulet2: 220,
        equipShamanHelm: 6,
        equipShamanWeapon: 10,
        equipShamanArmor: 0,
        equipShamanBoot: 0,
        equipShamanAmulet1: 10,
        equipShamanAmulet2: 10,

        vip: 45,
        skin: 10,
        citadel: 40,
        boostAll: 100,
        boostProd: 100,

        mine21: 0,
        mine22: 0,
        mine23: 0,
        mine24: 0,
        mine25: 0,
        mine26: 0,
        mine27: 0,
        mine28: 0,
        mine29: 13,
        mine30: 0,
        mine31: 0,

        capacity1: 69,
        capacity2: 122
      }
    }
  },
  getters: {
    getBonus: state => id => {
      return state.bonuses[id];
    },
    getProdBonusHeroTotal: state => id => {
      const bonus = state.bonuses[id];
      return (
        bonus.heroProd1 +
        bonus.heroProd2 +
        bonus.heroProd3 +
        bonus.heroAllProd1 +
        bonus.heroAllProd2
      );
    },
    getProdBonusShamanTotal: state => id => {
      const bonus = state.bonuses[id];
      return (
        bonus.shamanAllProd +
        bonus.shamanProd +
        bonus.shamanProd1 +
        bonus.shamanProd2 +
        bonus.shamanProd3 +
        bonus.shamanAllProd1 +
        bonus.shamanAllProd2
      );
    },
    getProdBonusKnowTotal: state => id => {
      const bonus = state.bonuses[id];
      return bonus.knowAllProd + bonus.knowProd1 + bonus.knowProd2;
    },
    getProdBonusEquipTotal: state => id => {
      const bonus = state.bonuses[id];
      return (
        bonus.equipHeroHelm +
        bonus.equipHeroWeapon +
        bonus.equipHeroArmor +
        bonus.equipHeroBoot +
        bonus.equipHeroAmulet1 +
        bonus.equipHeroAmulet2 +
        bonus.equipShamanHelm +
        bonus.equipShamanWeapon +
        bonus.equipShamanArmor +
        bonus.equipShamanBoot +
        bonus.equipShamanAmulet1 +
        bonus.equipShamanAmulet2
      );
    },
    getBonusTotal: (state, getters) => id => {
      const bonus = state.bonuses[id];
      return (
        getters.getProdBonusHeroTotal(id) +
        getters.getProdBonusShamanTotal(id) +
        getters.getProdBonusKnowTotal(id) +
        getters.getProdBonusEquipTotal(id) +
        parseInt(bonus.vip) +
        parseInt(bonus.skin) +
        parseInt(bonus.citadel) +
        parseInt(bonus.boostAll) +
        parseInt(bonus.boostProd)
      );
    },
    getProdCapacity: (state, getters) => id => {
      const bonus = state.bonuses[id];
      let baseCapacity = 0,
        capacity1 = parseFloat(bonus.capacity1),
        capacity2 = parseFloat(bonus.capacity2);

      for (let i = 21; i <= 31; i++) {
        let mineCount = bonus["mine" + i] || 0;
        let mine = mines[bonus.type]["mine" + i];
        baseCapacity += mineCount * mine.capacity;
      }
      return Math.round(
        (10000 + baseCapacity) * (1 + (capacity1 + capacity2) / 100)
      );
    },
    getProduction: (state, getters) => id => {
      const bonus = state.bonuses[id];
      let baseProd = 0,
        bonus1 =
          getters.getProdBonusHeroTotal(id) +
          getters.getProdBonusShamanTotal(id) +
          getters.getProdBonusKnowTotal(id) +
          getters.getProdBonusEquipTotal(id),
        bonus2 =
          parseInt(bonus.vip) +
          parseInt(bonus.skin) +
          parseInt(bonus.citadel) +
          parseInt(bonus.boostAll) +
          parseInt(bonus.boostProd);

      for (let i = 21; i <= 31; i++) {
        let mineCount = bonus["mine" + i] || 0;
        let mine = mines[bonus.type]["mine" + i];
        baseProd += mineCount * mine.prod;
      }

      let prod = baseProd * (1 + bonus1 / 100);
      return Math.floor(prod * (1 + bonus2 / 100));
    },
    getProdList: (state, getters) => {
      return state.productions.map(id => {
        const bonus = state.bonuses[id];
        return {
          id: id,
          type: bonus.type,
          note: bonus.note,
          prod: getters.getProduction(id)
        };
      });
    }
  },
  mutations: {
    updateBonus(state, payload) {
      if (payload.param.indexOf("mine") === 0 && payload.value > 12) {
        for (let i = 21; i <= 31; i++) {
          state.bonuses[payload.id]["mine" + i] = 0;
        }
      }
      state.bonuses[payload.id][payload.param] = payload.value;
    },
    addBonus(state, prodType) {
      let bonus = {
        note: "",
        type: prodType,

        heroProd1: prodType == "food" ? 80 : 40,
        heroProd2: prodType == "food" ? 130 : 65,
        heroProd3: prodType == "food" ? 700 : 350,
        heroAllProd1: 20,
        heroAllProd2: 30,
        shamanAllProd: 0,
        shamanProd: 0,
        shamanProd1: 0,
        shamanProd2: 0,
        shamanProd3: 0,
        shamanAllProd1: 0,
        shamanAllProd2: 0,
        knowAllProd: 0,
        knowProd1: 0,
        knowProd2: 0,

        equipHeroHelm: 0,
        equipHeroWeapon: 0,
        equipHeroArmor: 0,
        equipHeroBoot: 0,
        equipHeroAmulet1: 0,
        equipHeroAmulet2: 0,
        equipShamanHelm: 0,
        equipShamanWeapon: 0,
        equipShamanArmor: 0,
        equipShamanBoot: 0,
        equipShamanAmulet1: 0,
        equipShamanAmulet2: 0,

        vip: 21,
        skin: 0,
        citadel: 20,
        boostAll: 50,
        boostProd: 50,

        mine21: 0,
        mine22: 0,
        mine23: 0,
        mine24: 0,
        mine25: 0,
        mine26: 0,
        mine27: 0,
        mine28: 0,
        mine29: 0,
        mine30: 0,
        mine31: 0,

        capacity1: 0,
        capacity2: 0
      };

      let i = 1;
      while (state.productions.indexOf(prodType + i) !== -1) {
        i++;
      }
      bonus.id = prodType + i;
      Vue.set(state.bonuses, bonus.id, bonus);
      state.productions.unshift(bonus.id);
    }
  }
};
