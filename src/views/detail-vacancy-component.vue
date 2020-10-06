<template>
    <div class="detail_wrapper">
    <loader v-if="!isDataReady"></loader>
        <div class="container">
            <div class="detail_elements">
                <div class="main_block" v-if="Object.values(detailVacancy).length">
                    <div class="vacancy_title">
                        <h3 v-if="detailVacancy.name">{{detailVacancy.name}}</h3>
                        <h5 v-if="detailVacancy.salary">
                            от {{detailVacancy.salary.from}} до {{detailVacancy.salary.to}} {{detailVacancy.salary.currency}} на руки
                        </h5>
                        <h5 v-else>з/п не указана</h5>
                    </div>
                    <div class="employer">
                        <div class="employer_data">
                            <div class="emp_title" v-if="detailVacancy.employer.name">
                                <a>{{detailVacancy.employer.name}}</a>
                            </div>
                            <div class="emp_location">
                                <span>Алматы</span>
                            </div>
                        </div>
                        <div v-if="detailVacancy.employer.logo_urls" class="employer_logo">
                            <img :src="detailVacancy.employer.logo_urls[240]" alt="">
                        </div>
                    </div>
                    <div class="action_button">
                        <button class="feedback">Откликнуться</button>
                        <button class="favorite_btn">
                            <span class="favorite_btn-icon"></span>
                        </button>
                        <button class="ban_btn">
                            <span class="ban_btn-icon"></span>
                        </button>
                    </div>
                    <div class="skill_block">
                        <span>Требуемый опыт работы: {{detailVacancy.experience.name}}</span><br>
                        <span>{{detailVacancy.employment.name}}</span>
                    </div>
                    <div class="description" v-html="detailVacancy.description"></div>
                </div>
                <div class="banner_system">
                    <div class="banner">
                        <img src="../../public/img/banner.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import loader from '../shared/loader'
    export default {
        name: "detail-vacancy-component",
        components: {
            loader,
        },
        data () {
            return {
                isDataReady: false,
            }
        },
        async mounted() {
           await this.$store.dispatch('vacancy/getDetailVacancy', this.$route.params.id);
            this.$store.commit('setTriangleVisibleState', false);
            this.$store.commit('setSearchBoardVisibleState', false);
            this.isDataReady = true
        },
        computed:{
            ...mapState({
                isTriangle: state => state.isTriangleVisible,
                detailVacancy: state => state.vacancy.select,
            }),
        },
    }
</script>

<style lang="scss" scoped>
    .detail_elements {
        display: flex;
        padding: 55px 26px;
    }

    .main_block {
        width: 880px;

        .vacancy_title {
            h3 {
                font-family: 'Proxima Nova Cn Rg', sans-serif;
                font-size: 36px;
                color: #333333;
                margin: 0 0 20px;
            }
            h5 {
                font-family: 'Proxima Nova Cn Rg', sans-serif;
                color: #333333;
                font-size: 22px;
            }
        }

        .employer {
            width: 750px;
            display: flex;
            padding: 10px 0;
            justify-content: space-between;
            align-items: center;

            .emp_title {
                font-size: 22px;
                color: #0099FF;
                margin: 0 0 10px;
            }

            .emp_location {
                span {
                    font-size: 14px;
                }
            }

            .employer_logo {
                img {
                    max-width: 150px;
                    max-height: 100px;
                }
            }
        }

        .action_button {
            display: flex;

            button {
                height: 38px;
                &:nth-child(2) {
                    margin: 0 15px;
                }
            }

            button.ban_btn, button.favorite_btn {
                position: relative;
                width: 38px;
                border: 1px solid #E5E5E5;
                background: none;

                &:hover {
                    border-color: #cdcdcd;
                }
            }

            span.ban_btn-icon {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
                width: 16px;
                height: 16px;
                background: url("../assets/icons/ban-icon_min.svg") no-repeat center left -144px;
            }

            span.favorite_btn-icon {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
                width: 16px;
                height: 16px;
                background: url("../assets/icons/favorite-icon_min.svg") no-repeat center left -144px;
            }

            button.feedback {
                width: 120px;
                height: 38px;
                background: #8CB900;
                color: #fff;
                font-size: 14px;
                border: none;
                outline: none;

                &:hover {
                    background: #7eab00;
                }
            }
        }

        .skill_block {
            padding: 30px 0;
            line-height: 20px;
            span {
                font-size: 14px;
            }
        }
    }

    .banner_system {
        width: 400px;
        padding: 0 15px;
    }
</style>