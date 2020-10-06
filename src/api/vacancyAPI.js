const axios = require("axios");

export default {
    api: 'https://api.hh.ru',
    getVacancies(query = {}) {
        const url = `${this.api}/vacancies?area=160&per_page=100`;
        return axios.get(url, {
            params: {
                text: query.text,
                area: query.area,
            }
        })
    },

    getSearchVacancies(query = {}) {
        const url = `${this.api}/vacancies?area=160&per_page=100`;
        return axios.get(url, {
            params: {
                text: query.text,
                area: query.area,
            }
        })
    },

    getDetailVacancies(id) {
        const url = `${this.api}/vacancies/${id}`;
        return axios.get(url);
    },
}
