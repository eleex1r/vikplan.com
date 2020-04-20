import _ from 'lodash';
import * as constants from './db/constants';
import db from './db/research_list';

const tierBase = {
  1: 100,
  2: 169,
  3: 235,
  4: 300,
  5: 366,
  6: 433,
  7: 501
};

export default {
  namespaced: true,
  state: {
    research: 'current',
    troops: constants.MELEE,
    tier: constants.TIER_6
  },
  getters: {
    getResearch: (state, getters, rootState, rootGetters) => {
      return rootGetters['research/getResearch'](state.research);
    },
    filterDb: state => {
      // filter by troops type and tier
      return _.filter(db, tech => {
        return (
          tech.war &&
          (!tech.war.troops ||
            tech.war.troops == state.troops ||
            tech.war.troops === constants.ALL_TROOPS) &&
          (!tech.war.tier || tech.war.tier == state.tier)
        );
      });
    },
    getBonusAttack: (state, getters) => {
      const techs = getters.getResearch;
      const actualDb = getters.filterDb;

      let dbByEffect = _.groupBy(actualDb, 'war.effect'),
        results = {},
        totals,
        level;
      //console.log( dbByEffect)

      _.forOwn(dbByEffect, (items, effect) => {
        if (
          effect == constants.ATTACK ||
          effect == constants.DEFENSE ||
          effect == constants.HEALTH
        ) {
          totals = {
            att: 0, // в атаке
            def: 0, // в обороне
            attPOP: 0, // при захвате места силы
            defPOP: 0 // при обороне места силы
          };

          _.forEach(items, item => {
            level = techs[item.slug];
            if (level === 0) return;
            let war = item.war,
              value = parseFloat(item.effect_values[level - 1]);

            if (
              war.area == constants.AREA_POP &&
              war.action == constants.ACTION_ATTACK
            ) {
              totals.attPOP += value;
            } else if (
              war.area == constants.AREA_POP &&
              war.action == constants.ACTION_DEFENSE
            ) {
              totals.defPOP += value;
            }

            if (!war.action || war.action == constants.ACTION_ATTACK) {
              totals.att += value;
              totals.attPOP += value;
            }
            if (!war.action || war.action == constants.ACTION_DEFENSE) {
              totals.def += value;
              totals.defPOP += value;
            }
          });
        } else {
          totals = 0;
          _.forEach(items, item => {
            level = techs[item.slug];
            if (level > 0) {
              totals += parseFloat(item.effect_values[level - 1]);
            }
          });
        }

        results[effect] = totals;
      });

      //console.log(results);
      return results;
    }
  },
  mutations: {
    updateParam(state, params) {
      if (state[params.key]) {
        state[params.key] = params.value;
      }
    }
  }
};
