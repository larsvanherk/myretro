/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

import flatMap from 'lodash/flatMap';

import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    retro: {
      listener: null,
      data: []
    }
  },

  getters: {
    getCardCategory: state => category => state.retro.data.filter(entry => entry.type === category)
  },

  mutations: {
    setRetroListener(state, listener) {
      state.retro.listener = listener;
    },
    clearRetroListener(state) {
      state.retro.listener = null;
    },
    updateRetro(state, retro) {
      state.retro.data = retro;
    }
  },

  actions: {
    bindRetroListener({ commit }) {
      const listener = api.registerListener((res) => {
        const updated = flatMap(
          Object.entries(res.val() || {}),
          cardGroup => Object.entries(cardGroup[1])
            .map(card => ({
              id: card[0],
              type: cardGroup[0],
              ...card[1]
            }))
        );

        commit('updateRetro', updated);
      });
      commit('setRetroListener', listener);
    },
    detachRetroListener({ commit, state }) {
      api.detachListener(state.retro.listener);
      commit('clearRetroListener');
    }
  }
});
