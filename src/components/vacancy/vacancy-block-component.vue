<template>
    <div class="block_wrapper">
        <div class="vacancy_block" :class="[item.premium ? 'vacancy_block-premium' : 'vacancy_block-standart']" v-for="item in vacancies.items" :key="item.id" v-if="vacancies || Object.values(vacancies).length > 1">
            <div class="vacancy_title">
                <router-link :to="{path: routeTemplate + item.id}" target='_blank' class="vacancy_links">
                    {{ item.name }}
                </router-link>
                <h4 v-if="item.salary">от {{item.salary.from }} {{ item.salary.currency }}</h4>
                <h4 v-else>з/п не указана</h4>
            </div>
            <div class="vacancy_employer">
                <span>{{item.employer.name}}</span>
            </div>
            <div class="vacancy_location">
                <span>{{item.area.name}}</span>
            </div>
            <div class="vacancy_description">
                <div v-if="item.snippet.responsibility && item.snippet.requirement" class="description">
                    <p>
                        {{item.snippet.responsibility}}<br>
                        {{item.snippet.requirement}}
                    </p>
                </div>
                <img v-if="item.employer.logo_urls" :src="item.employer.logo_urls[90]" alt="">
            </div>
            <div class="action_wrapper">
                <div class="vacancy_actions">
                    <div class="action_links">
                        <ul>
                            <li><a>Откликнуться</a></li>
                            <li><a>Не показывать</a></li>
                            <li><a>В избранное</a></li>
                        </ul>
                    </div>
                    <div class="vacancy_datetime">
                        <span>{{item.published_at}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "vacancy-block-component",
        props: {
            selectedSort: {
                type: Number,
                required: true,
            },
            firstSort: {
                type: Array,
                required: true,
            }
        },
        data () {
            return {
                routeTemplate: '/search/vacancy/'
            }
        },
        mounted() {
            this.$store.dispatch('vacancy/getVacancies');
        },
        computed: {
            ...mapState({
                vacancies: state => state.vacancy.list,
            })
        }
    }
</script>

<style lang="scss" scoped>

    .block_wrapper {
        margin-top: 25px;

        &:last-child {
            border-bottom: 1px solid #b7b7b7;
        }
    }

    .vacancy_block-standart {
        border: 1px solid #b7b7b7;
    }

    .vacancy_block-premium {
        border: 2px solid #f1c846;
        border-bottom: 2px solid #f1c846 !important;
    }

    .vacancy_block {
        position: relative;
        font-family: Arial, sans-serif;
        height: auto;
        border-bottom: none;
        padding: 20px;

        .vacancy_title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;
            cursor: pointer;

            .vacancy_links {
                text-decoration: none;
                font-size: 18px;
                font-weight: lighter;
                color: #0099FF;

                &:hover {
                    color: #c00;
                }
            }

            h4 {
                font-size: 18px;
                color: #333333;
            }
        }

        .vacancy_employer {
            span {
                font-size: 12px;
                color: #999999;
                cursor: pointer;

                &:hover {
                    color: #c00;
                }
            }
        }

        .vacancy_location {
            span {
                font-size: 12px;
                color: #999999;
            }

            margin-bottom: 10px;
        }

        .vacancy_description {
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
                font-size: 14px;
                line-height: 24px;
            }
        }

        .action_wrapper {
            width: 100%;
        }

        .vacancy_actions {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .action_links {
                ul {
                    height: 35px;
                    display: flex;
                    align-items: center;

                    li {
                        margin-right: 15px;

                        &:last-child {
                            margin-right: 0;
                        }
                        a {
                            font-size: 14px;
                            color: #609FCF;
                            cursor: pointer;

                            &:hover {
                                color: #c00;
                            }
                        }
                    }
                }
            }
        }
    }
</style>