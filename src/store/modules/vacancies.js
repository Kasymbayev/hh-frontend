import Vue from "vue";
import Vuex from "vuex";
import vacancies from "../../api/vacancyAPI";

Vue.use(Vuex);

const state = () => ({
    list: [],
    searching: {},
    select: {},
});

const getters = {

    vacancy: state => {
        return state.list;
    },

    search: state => {
        return state.searching;
    },

    detail: state => {
        return state.select;
    }
};

const actions = {
    async getVacancies ({commit}, params = {}) {
        let {
            data
        } = await vacancies.getVacancies(params);
        // Сортировка по дате
        data.items.sort((a,b) => {
           return new Date(b.published_at) - new Date(a.published_at)
        });
        // Изменение формата даты
        for(let key in data.items) {
            let published_date = new Date(data.items[key].published_at).toLocaleString('ru', {
                month: 'long',
                day: 'numeric'
            });
            data.items[key].published_at = published_date;
        }
        commit("setVacancies", data);
    },

    async getSearchingVacancies ({commit}, params = {}) {
        let {
            data
        } = await vacancies.getSearchVacancies(params);
        commit("setVacanciesSearch", data);
    },

    async getDetailVacancy({commit}, id) {
        let {
            data
        } = await vacancies.getDetailVacancies(id);
        data.description.replace(/\"/g, "");
        commit("setDetailVacancies", data);
    },
};

const mutations = {

    setVacancies (state, vacancy) {
        state.list = vacancy
    },

    setVacanciesSearch(state, search) {
        state.searching = search
    },

    setDetailVacancies (state, detail) {
        state.select = detail
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
