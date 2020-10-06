import Vue from "vue";
import Vuex from "vuex";
import vacancy from './modules/vacancies'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isTriangleVisible: true,
    isSearchBoardOpen: true,
  },
  getters: {
    getIsTriangleVisible (state) {
      return state.isTriangleVisible
    },

    getIsSearchBoard (state) {
      return state.isSearchBoardOpen
    }
  },
  mutations: {
    setTriangleVisibleState (state, isTriangle) {
      state.isTriangleVisible = isTriangle
    },

    setSearchBoardVisibleState (state, isSearchBoard) {
      state.isSearchBoardOpen = isSearchBoard
    }
  },
  actions: {},
  modules: {
    vacancy,
  }
});
