/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

import uuid from 'uuid/v4';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    retro: []
  },

  getters: {
    moreCards: state => state.retro
      .filter(entry => entry.type === 'MORE'),
    lessCards: state => state.retro
      .filter(entry => entry.type === 'LESS'),
    startCards: state => state.retro
      .filter(entry => entry.type === 'START'),
    stopCards: state => state.retro
      .filter(entry => entry.type === 'STOP'),
    continueCards: state => state.retro
      .filter(entry => entry.type === 'CONTINUE')
  },

  mutations: {
    addCard(state, { type, message }) {
      state.retro.push({
        id: uuid(),
        type,
        message,
        upvotes: 0
      });
    },
    upvoteCard(state, cardId) {
      state.retro
        .find(card => card.id === cardId).upvotes += 1;
    }
  },

  actions: {
    addCard({ commit }, { type, message }) {
      commit('addCard', { type, message });
    },
    upvoteCard({ commit }, cardId) {
      commit('upvoteCard', cardId);
    }
  }
});
