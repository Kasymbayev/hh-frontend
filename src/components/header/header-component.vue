<template>
    <div class="header_wrapper">
        <div class="header_block">
            <div class="container">
                <div class="top_navigation">
                    <div class="country_select_link">
                        <a>Казахстан</a>
                    </div>
                    <div class="right_other_links">
                        <ul>
                            <li v-for="item in top_links" :key="item.id">
                                <a :href="item.link"
                                   @click="selectTopLink(item)"
                                   :class="[item.id === selectedLink ? 'other_link-active' : 'top_link']">
                                    {{item.name}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="main_block">
                <div class="container">
                    <div class="main_navigation">
                        <div class="navigation_left">
                            <div class="logo">
                                <a href="/"><img src="../../assets/logo.svg" alt=""></a>
                            </div>
                            <div class="left_links">
                                <ul>
                                    <li><a href="#">Мои резюме</a></li>
                                    <li><a href="#">Отклики</a></li>
                                    <li><a href="#">Помощь</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="navigation_right">
                            <div class="search_btn">
                                <div class="search_icon"></div>
                                <span>Поиск</span>
                            </div>
                            <div v-if="isTriangle" class="triangle"></div>
                            <div class="create_cv">
                                <button>Создать резюме</button>
                            </div>
                            <div class="action_bars">
                                <div class="favorite"></div>
                                <div class="notification"></div>
                                <div class="profile"></div>
                                <div class="mobile_menu_btn"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "header-component",
        data() {
            return {
                selectedLink: 1,
                top_links: [
                    {
                        id: 1,
                        name: 'Поиск работы',
                        link: '#'
                    },
                    {
                        id: 2,
                        name: 'Автоподнятие резюме',
                        link: '#'
                    },
                    {
                        id: 3,
                        name: 'Хочу у вас работать',
                        link: '#'
                    }
                ]
            }
        },
        methods: {
            selectTopLink(item) {
                this.selectedLink = item.id
            }
        },
        mounted() {
            this.$store.commit('setTriangleVisibleState', true)
        },
        computed: {
            ...mapState({
                isTriangle: state => state.isTriangleVisible,
            })
        }
    }
</script>

<style lang="scss" scoped>

    /* Top navigation colors */
    $top_link: rgb(96, 159, 207);
    $active_link: #333;
    $hover_link: #e20000;
    $main_bg: #222;

    /* Top Nav styles */
    .top_navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        padding: 0 26px;

        a {
            cursor: pointer;
            font-size: 14px;
            color: $top_link;
            user-select: none;
            outline: none;
            text-decoration: none;
        }

        .top_link:hover {
            color: $hover_link
        }

        .other_link-active {
            color: $active_link;
        }
    }

    .country_select_link {
        a {
            color: $top_link !important;
            border-bottom: 0.5px dashed $top_link;
            font-size: 14px;
        }
    }

    .right_other_links {
        ul {
            display: flex;
            align-items: center;

            li {
                margin-right: 19px;
            }
        }
    }

    /* Main Header styles */
    .main_block {
        display: flex;
        align-items: center;
        width: 100%;
        height: 80px;
        background: $main_bg;
    }

    .main_navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 26px;
    }

    .navigation_left {
        height: 80px;
        display: flex;
        align-items: center;

        .logo {
            width: 65px;
            height: 35px;
            margin-right: 30px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .left_links {
            ul {
                display: flex;

                li {
                    margin-right: 20px;

                    &:last-child {
                        border-bottom: 0.3px dashed #fff;
                        margin-right: 0;
                    }

                    a {
                        font-size: 16px;
                        color: #fff;
                        text-decoration: none;

                        &:hover {
                            color: #90ccff;
                        }
                    }
                }
            }
        }
    }

    .navigation_right {
        display: flex;

        .search_btn {
            display: flex;
            height: auto;
            align-items: center;
            font-size: 16px;
            font-weight: 300;
            color: #fff;
            cursor: default;
            user-select: none;

            .search_icon {
                width: 30px;
                height: 30px;
                margin-right: 5px;
                background: url("../../assets/icons/search_min.svg") no-repeat center left 0;
            }
        }

        .triangle {
            content: '';
            position: absolute;
            z-index: 0;
            top: 0;
            margin-left: 10px;
            margin-top: 104px;
            border: 8px solid transparent;
            border-bottom: 8px solid #f9f9f9;
        }

        .create_cv {
            padding: 0 20px;

            button {
                width: 153px;
                height: 38px;
                border: 0.5px solid rgba(158, 251, 161, .5);
                border-radius: 100px;
                background: rgba(0, 0, 0, .2);
                color: #9efba1;
                transition: all 0.3s ease-in-out;

                &:hover {
                    border-color: #9efba1;
                    transition: all 0.3s ease-in-out;
                }
            }
        }

        .action_bars {
            display: flex;
            align-items: center;

            .favorite {
                cursor: pointer;
                width: 30px;
                height: 30px;
                background: url("../../assets/icons/favorites_min.svg") no-repeat center left;
                background-size: cover;

                &:hover {
                    background: url("../../assets/icons/favorites_min.svg") no-repeat center right;
                }
            }

            .notification {
                cursor: pointer;
                width: 30px;
                height: 30px;
                background: url("../../assets/icons/notifications_min.svg") no-repeat center left;
                background-size: cover;
                margin: 0 20px;

                &:hover {
                    background: url("../../assets/icons/notifications_min.svg") no-repeat center right;
                }
            }

            .profile {
                cursor: pointer;
                width: 30px;
                height: 30px;
                background: url("../../assets/icons/profile_min.svg") no-repeat center left;
                background-size: cover;
                margin-right: 20px;

                &:hover {
                    background: url("../../assets/icons/profile_min.svg") no-repeat center right;
                }
            }

            .mobile_menu_btn {
                cursor: pointer;
                width: 30px;
                height: 30px;
                background: url("../../assets/icons/mobile_min.svg") no-repeat center left;
                background-size: cover;

                &:hover {
                    background: url("../../assets/icons/mobile_min.svg") no-repeat center right;
                }
            }
        }
    }
</style>