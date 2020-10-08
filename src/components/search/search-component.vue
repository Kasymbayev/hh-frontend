<template>
    <div class="search_wrapper" v-if="isSearchBoard">
        <div class="container">
            <form action="">
                <div class="search_from">
                    <div class="search_input">
                        <div>
                            <input type="text"
                                   v-model="searchText"
                                   v-on:keyup="autoCompleted()"
                                   maxlength="80"
                                   placeholder="Профессия, должность или компания">
                            <transition name="fade">
                                <div class="autocomplete" v-if="completedForm && Object.values(searchedItems).length > 1" v-click-outside="outside">
                                    <div @click="searching($event, item.name)" class="search_item" v-for="item in filtered.slice(0, 7)" :key="item.id">
                                        <span>{{item.name}}</span>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <div class="filter_btn"></div>
                    </div>
                    <div class="search_button">
                        <button @click="searching($event)">Найти</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="container">
            <div class="search_type">
                <ul>
                    <li v-for="item in searchTypes" :key="item.id">
                        <a @click="selectType(item)"
                            :class="[item.id === selectedType ? 'type_active' : '']">
                            <router-link :to="{ path: item.route }" class="type_links">
                                {{ item.title }}
                            </router-link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "search-component",
        data () {
            return {
                clickOutside: 0,
                searchTypes: [
                    {
                        id: 1,
                        title: 'Вакансии',
                        route: 'vacancy'
                    },
                    {
                        id: 2,
                        title: 'Резюме',
                        route: 'resume'
                    },
                    {
                        id: 3,
                        title: 'Компании',
                        route: 'employers'
                    },
                ],
                selectedType: 1,
                completedForm: false,
                searchText: '',
                filteredItems: [],
            }
        },
        methods: {
            selectType (item) {
                this.selectedType = item.id;
            },
            outside () {
                this.completedForm = false;
            },
            autoCompleted () {
                this.completedForm = this.searchText.length >= 1;
                this.$store.dispatch('vacancy/getSearchingVacancies', {area: 160, text: this.searchText})
            },
            async searching (e, name) {
                e.preventDefault();
                await this.$store.dispatch('vacancy/getVacancies', {area: 160, text: !this.searchText ? name : this.searchText});
                this.searchText = name;
                this.completedForm = false;
            },
        },
        directives: {
            'click-outside': {
                bind: function(el, binding, vNode) {
                    if (typeof binding.value !== 'function') {
                        const compName = vNode.context.name;
                        let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
                        if (compName) { warn += `Found in component '${compName}'` }

                        console.warn(warn)
                    }
                    const bubble = binding.modifiers.bubble
                    const handler = (e) => {
                        if (bubble || (!el.contains(e.target) && el !== e.target)) {
                            binding.value(e)
                        }
                    };
                    el.__vueClickOutside__ = handler;
                    document.addEventListener('click', handler)
                },
                unbind: function(el, binding) {
                    document.removeEventListener('click', el.__vueClickOutside__);
                    el.__vueClickOutside__ = null
                }
            }
        },
        computed: {
            ...mapState({
                isSearchBoard: state => state.isSearchBoardOpen,
                searchedItems: state => state.vacancy.searching,
            }),
            filtered () {
                return this.searchedItems.items.filter(el => {
                    return el.name.toLowerCase().includes(this.searchText.toLowerCase())
                })
            },
            mounted() {
                this.$store.commit('setSearchBoardVisibleState', true);
            }
        }
    }
</script>

<style lang="scss" scoped>

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

    .search_wrapper {
        position: relative;
        width: 100%;
        height: 109px;
        background: #f9f9f9;
        border-bottom: 1px solid #eee;
    }

    .search_from {
        height: 78px;
        display: flex;
        align-items: center;
        padding: 0 26px;
        font-size: 14px;
    .search_input {
        position: relative;
        width: 645px;
        input {
            width: 100%;
            height: 36px;
            background: #fff;
            padding: 0 11px;
            border: 1px solid #cbd1d4;
            transition: all 0.3s ease-in-out;

            &::placeholder {
                color: #b2b2b2;
                font-size: 14px;
            }

            &:focus {
                border: 1px solid #0f8fee;
                transition: all 0.3s ease-in-out;
            }
        }
    }

    .autocomplete {
        position: absolute;
        width: 100%;
        height: auto;
        background: white;
        padding-right: 22px;
        z-index: 5;
        border-left: 1px solid #cbd1d4;
        border-right: 1px solid #cbd1d4;
        border-bottom: 1px solid #cbd1d4;
        .search_item {
            width: 100%;
            padding: 15px 3px 15px 20px;

            &:hover {
                background: #0c81da;
                color: #fff;
            }
        }
    }
    .search_button {
            button {
                width: 100px;
                height: 38px;
                padding: 0 8px;
                margin-left: 24px;
                border: none;
                color: #fff;
                background: #0f8fee;
                transition: all 0.3s ease-in-out;

                &:hover {
                    background: #0c81da;
                }
            }
        }
    .filter_btn {
            position: absolute;
            cursor: pointer;
            top: 0;
            bottom: 0;
            right: -15px;
            margin: auto;
            width: 24px;
            height: 24px;
            background: url("../../assets/icons/filters_min.svg") no-repeat center left -27px;
            background-size: cover;

            &:hover {
                background: url("../../assets/icons/filters_min.svg") no-repeat center left;

                &:after {
                    visibility: visible;
                    opacity: 1;
                    position: absolute;
                    content: 'Расширенный поиск';
                    width: 150px;
                    height: auto;
                    padding: 10px 5px;
                    color: #fff;
                    left: -70px;
                    bottom: 42px;
                    border-radius: 3px;
                    margin: auto;
                    border: 0.5px solid #fff;
                    background: #2c2c2c;
                    transition: all 0.3s ease-in-out;
                }

                &:before {
                    visibility: visible;
                    opacity: 1;
                    content: '';
                    position: absolute;
                    bottom: 30px;
                    left: 0px;
                    z-index: 1;
                    border: 8px solid transparent;
                    border-top: 8px solid #2c2c2c;
                    transition: all 0.3s ease-in-out;
                }
            }

            &:after {
                visibility: hidden;
                opacity: 0;
                position: absolute;
                content: 'Расширенный поиск';
                width: 150px;
                height: auto;
                padding: 10px 5px;
                color: #fff;
                left: -70px;
                bottom: 31px;
                border-radius: 3px;
                margin: auto;
                border: 0.5px solid #fff;
                background: #2c2c2c;
                transition: all 0.1s ease-in-out;
            }

            &:before {
                opacity: 0;
                visibility: hidden;
                content: '';
                position: absolute;
                bottom: 30px;
                left: 0px;
                z-index: 1;
                border: 8px solid transparent;
                border-top: 8px solid #2c2c2c;
                transition: all 0.1s ease-in-out;
            }
        }
    }

    .search_type {
        padding: 0 26px;
        text-align: left;

        ul {
            display: flex;

            li {
                margin-right: 25px;
                padding: 2px 0;
                a {
                    cursor: pointer;
                    user-select: none;
                    font-size: 14px;
                    padding-bottom: 10px;
                }
            }
        }

        .type_links {
            text-decoration: none;
            color: #222;
            outline: none;
        }
    }

    .type_active {
            font-size: 14px;
            border-bottom: 3px solid #8cb900;
        }

</style>