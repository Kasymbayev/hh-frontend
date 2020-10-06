<template>
    <div class="container">
        <div class="vacancy_wrapper">
            <loader v-if="!isDataReady"></loader>
            <div v-if="vacancies" class="title_counted">
                <h3>Найдено {{ vacancies.found }} вакансий</h3>
            </div>
            <div class="vacancy_grid">
                <div class="v-filter">
                    <filter-component />
                </div>
                <div class="v-content">
                    <div class="hot_filters">
                        <filter-buttons />
                    </div>
                    <div class="sort_block">
                        <div class="main_sort">
                            <form>
                                <div class="search_sort">
                                    <div class="sort_type">
                                        <select v-model="first_sort">
                                            <option v-for="item in firstSort" :key="item.id" :value="item.id">{{ item.title }}</option>
                                        </select>
                                        <div class="arrow_icon"></div>
                                    </div>
                                    <div class="sort_time">
                                        <select>
                                            <option selected>за месяц</option>
                                            <option>за неделю</option>
                                            <option>за три дня</option>
                                            <option>за сутки</option>
                                        </select>
                                        <div class="arrow_icon"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="search_additional_sort">
                            <div class="view_type">
                                <ul>
                                    <li :class="[item.id === selectedView ? 'view_active' : '']"
                                        @click="selectView(item)"
                                        v-for="item in viewTypes">
                                        <a>{{ item.title }}</a>
                                    </li>
                                </ul>
                            </div>
                            <button>Изменить запрос</button>
                        </div>
                    </div>
                    <vacancy-block :firstSort="firstSort" :selectedSort="first_sort"></vacancy-block>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import filterComponent from '../components/vacancy/filter-component'
    import filterButtons from '../components/vacancy/filter-buttons-component'
    import vacancyBlock from '../components/vacancy/vacancy-block-component'
    import loader from '../shared/loader'

    export default {
        name: "vacancy-component",
        components: {
            filterComponent,
            filterButtons,
            vacancyBlock,
            loader
        },
        data () {
            return {
                selectedView: 1,
                viewTypes: [
                    {
                        id: 1,
                        title: 'Списком'
                    },
                    {
                        id: 2,
                        title: 'На карте'
                    }
                ],
                firstSort: [
                    {
                        id: 1, title: 'по дате'
                    },
                    {
                        id: 2, title: 'по убыванию зарплаты'
                    },
                    {
                        id: 3, title: 'по возрастанию зарплаты'
                    },
                    {
                        id: 4, title: 'по соответствию'
                    }
                ],
                first_sort: 4,
                isDataReady: false,
            }
        },
        methods: {
          selectView (item) {
              this.selectedView = item.id
          }
        },
        async mounted() {
           await this.$store.dispatch('vacancy/getVacancies');
            this.isDataReady = true;
        },
        computed: {
            ...mapState({
                vacancies: state => state.vacancy.list,
            }),
        }
    }
</script>

<style lang="scss" scoped>

    .vacancy_wrapper {
        position: relative;
        width: 100%;
        .title_counted {
            padding: 0 26px;
            margin: 28px 0;

            h3 {
                font-family: 'Proxima Nova Cn Rg', sans-serif;
                font-weight: 400;
                font-size: 36px;
            }
        }
        .vacancy_grid {
            display: flex;
            padding: 0 26px;
            justify-content: space-between;
        }
        .v-content {
            width: 1030px;

            .search_sort {
                display: flex;
            }

            .sort_block {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .sort_type {
                display: flex;
                align-items: center;
                padding-top: 2px;
                margin-right: 10px;
                select {
                    position: relative;
                    width: 208px;
                    height: 38px;
                    padding-left: 12px;
                    font-size: 14px;
                    border-color: #c3c3c3;
                    appearance: none;
                    -moz-appearance: none;
                    -webkit-appearance: none;
                    cursor: pointer;

                    &:hover {
                        border-color: #acb5ba;
                    }

                    &:focus {
                        border: 1px solid #0f8fee;
                    }
                }

                .arrow_icon {
                    position: absolute;
                    margin-left: 180px;
                    width: 20px;
                    height: 20px;
                    background: url("../assets/icons/chevron-down-icon_min.svg") no-repeat top 1px left -180px;
                    background-size: cover;
                }
            }

            .sort_time {
                display: flex;
                align-items: center;
                padding-top: 2px;
                select {
                    position: relative;
                    width: 107px;
                    height: 38px;
                    padding-left: 12px;
                    font-size: 14px;
                    border-color: #c3c3c3;
                    appearance: none;
                    -moz-appearance: none;
                    -webkit-appearance: none;
                    cursor: pointer;

                    &:hover {
                        border-color: #acb5ba;
                    }

                    &:focus {
                        border: 1px solid #0f8fee;
                    }
                }

                .arrow_icon {
                    position: absolute;
                    margin-left: 82px;
                    width: 20px;
                    height: 20px;
                    background: url("../assets/icons/chevron-down-icon_min.svg") no-repeat top 1px left -180px;
                    background-size: cover;
                }
            }

            .search_additional_sort {
                display: flex;
                align-items: center;
                .view_type {
                    margin-right: 10px;
                    ul {
                        display: flex;

                        li {
                            padding: 10.5px 15px;
                            border: 0.5px solid #c3c3c3;
                            background: #F9F9F9;
                            cursor: pointer;

                            &:first-child {
                                border-right: none;
                            }

                            a {
                                font-size: 14px;
                            }

                            &:hover {
                                border-color: #acb5ba;
                            }
                        }

                        .view_active {
                            box-shadow: inset 0 2px rgba(0,0,0,.2);
                            background: #E5E5E5;
                        }
                    }
                }

                button {
                    width: 143px;
                    font-size: 14px;
                    height: 38px;
                    background: #F9F9F9;
                    border: 0.5px solid #c3c3c3;

                    &:hover {
                        border-color: #acb5ba;
                    }
                }
            }
        }
    }
</style>