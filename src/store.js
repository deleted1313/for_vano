import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    numbers: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
    ],
    procedures: [
      '+', '-', '*', '/',
    ],
    num: [],
    op: '',
    totals: null,
  },
  getters: {
    COUNT: state => state.count,
    NUMBERS: state => state.numbers,
    PROCEDURES: state => state.procedures,
    CURRENT_PROCEDURE: state => state.op,
    CURRENT_NUM: state => state.num,
    TOTALS: state => state.totals,
  },
  mutations: {
    CURRENT_NUMBER: (state, payload) => {
      state.num = Array.from(state.num);
      const newStateNum = [...state.num, payload].join('');
      window.newStateNum = newStateNum;
      return state.num = newStateNum;
    },
    CURRENT_PROCEDURE: (state, payload) => state.op = payload,
    CALC: (state, payload) => {
      switch (state.op) {
        case '+':
          if (state.totals || state.totals === 0) {
            state.totals += payload;
            if (state.totals === Infinity || state.totals === -Infinity) { return state.totals = 0; }
            return state.totals;
          }
          state.totals = +state.num + payload;
          if (state.totals === Infinity || state.totals === -Infinity) { return state.totals = 0; }
          return state.totals;

        case '-':
          if (state.totals || state.totals === 0) {
            state.totals -= payload;
            if (state.totals === Infinity || state.totals === -Infinity) { return state.totals = 0; }
            return state.totals;
          }
          state.totals = +state.num - payload;
          if (state.totals === Infinity || state.totals === -Infinity) { return state.totals = 0; }
          return state.totals;


        case '*':
          if (state.totals || state.totals === 0) {
            state.totals *= payload;
            if (state.totals === Infinity || state.totals === -Infinity) { return state.totals = 0; }
            return state.totals;
          }
          state.totals = +state.num * payload;
          if (state.totals === Infinity || state.totals === -Infinity) { return state.totals = 0; }
          return state.totals;


        case '/':
          if (state.totals || state.totals === 0) {
            state.totals /= payload;
            if (state.totals === Infinity || state.totals === -Infinity) { return state.totals = 0; }
            return state.totals;
          }
          state.totals = +state.num / payload;
          if (state.totals === Infinity || state.totals === -Infinity) { return state.totals = 0; }
          return state.totals;


        default:
          return state;
      }
    },
  },
  actions: {
    SET_CURRENT_NUBMER: (context, payload) => {
      context.commit('CURRENT_NUMBER', payload);
    },
    SET_CURRENT_PROCEDURE: (context, payload) => {
      context.commit('CURRENT_PROCEDURE', payload);
    },
    CALC: (context, payload) => {
      context.commit('CALC', payload);
    },
  },
});
