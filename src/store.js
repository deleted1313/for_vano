import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    numbers: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
    ],
    operands: [
      '+', '-', '*', '/',
    ],
    num: '',
    op: '',
    totals: null,
  },
  getters: {
    COUNT: state => state.count,
    NUMBERS: state => state.numbers,
    OPERANDS: state => state.operands,
    CURRENT_OPERAND: state => state.op,
    CURRENT_NUM: state => state.num,
    TOTALS: state => state.totals,
  },
  mutations: {
    CURRENT_NUMBER: (state, payload) => state.num = payload,
    CURRENT_OPERAND: (state, payload) => state.op = payload,
    CALC: (state, payload) => {
      switch (state.op) {
        case '+':
          if (state.totals || state.totals === 0) { return state.totals += payload; }
          return state.totals = state.num + payload;
        case '-':
          if (state.totals || state.totals === 0) { return state.totals -= payload; }
          return state.totals = state.num - payload;
        case '*':
          if (state.totals || state.totals === 0) { return state.totals *= payload; }
          return state.totals = state.num * payload;
        case '/':
          if (state.totals || state.totals === 0) { return state.totals /= payload; }
          return state.totals = state.num / payload;
        default:
          return state;
      }
    },
  },
  actions: {
    SET_CURRENT_NUBMER: (context, payload) => {
      context.commit('CURRENT_NUMBER', payload);
    },
    SET_CURRENT_OPERAND: (context, payload) => {
      context.commit('CURRENT_OPERAND', payload);
    },
    CALC: (context, payload) => {
      context.commit('CALC', payload);
    },
  },
});
