<template>
   <div class="filter_wrapper">
       <div class="filter">
            <div class="job_type">
                <ul>
                    <li v-for="item in job_types">
                        <a @click="selectType(item)"
                           :class="[item.id === selectedType ? 'type_active' : '']">
                            {{item.type}}
                            <span v-if="item.icon" :class="item.icon"></span>
                        </a>
                    </li>
                </ul>
            </div>
           <div class="line_separatore"></div>

           <div class="sections_wrapper">
               <div :class="[regionOpened ? 'filter_gap-active' : 'filter_gap']" class="region_filter">
                   <div class="section_group">
                       <div :class="[regionOpened ? 'section__group-item' : 'section__group-item-active']"
                            @click="regionOpen()"
                       >
                           <p>Регион</p>
                           <span></span>
                       </div>
                   </div>
                       <div :class="regionOpened ? 'sub_region-active' : 'sub_region'">
                           <div class="region_sub-block">
                               <div class="region__sub-item">
                                   <span>Казахстан</span>
                                   <span>23367</span>
                               </div>
                           </div>
                           <div class="region_sub-block">
                               <div class="region__sub-item">
                                   <span>Россия</span>
                                   <span>677578</span>
                               </div>
                           </div>
                           <div class="region_sub-block">
                               <div class="region__sub-item">
                                   <span>Москва</span>
                                   <span>121300</span>
                               </div>
                           </div>
                           <div class="more-item">
                               <a>Еще 381</a>
                           </div>
                       </div>
               </div>
               <div :class="[salaryOpened ? 'filter_gap-active' : 'filter_gap']" class="salary_filter">
                   <div class="section_group">
                       <div :class="[salaryOpened ? 'section__group-item' : 'section__group-item-active']"
                            @click="salaryOpen()"
                       >
                           <p>Зарплата</p>
                           <span></span>
                       </div>
                   </div>
                   <div :class="salaryOpened ? 'sub_region-active' : 'sub_region'">
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Указана</span>
                               <span>548935</span>
                           </div>
                       </div>
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>от 150 300 KZT</span>
                               <span>475391</span>
                           </div>
                       </div>
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>от 300 700 KZT</span>
                               <span>230474</span>
                           </div>
                       </div>
                   </div>
               </div>
               <div :class="[specialtyOpened ? 'filter_gap-active' : 'filter_gap']" class="specialty_filter">
                   <div class="section_group">
                       <div :class="[specialtyOpened ? 'section__group-item' : 'section__group-item-active']"
                            @click="specialtyOpen()"
                       >
                           <p>Профобласть</p>
                           <span></span>
                       </div>
                   </div>
                   <div :class="specialtyOpened ? 'sub_region-active' : 'sub_region'">
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Продажи</span>
                               <span>199587</span>
                           </div>
                       </div>
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Рабочий персонал</span>
                               <span>936584</span>
                           </div>
                       </div>
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Производство</span>
                               <span>230474</span>
                           </div>
                       </div>
                   </div>
               </div>
               <div :class="[employerOpened ? 'filter_gap-active' : 'filter_gap']" class="employer_filter">
                   <div class="section_group">
                       <div :class="[employerOpened ? 'section__group-item' : 'section__group-item-active']"
                            @click="employerOpen()"
                       >
                           <p>Отрасль компании</p>
                           <span></span>
                       </div>
                   </div>
                   <div :class="employerOpened ? 'sub_region-active' : 'sub_region'">
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Розничная торговля</span>
                               <span>548935</span>
                           </div>
                       </div>
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Информационные технологии, системная интеграция, интернет</span>
                               <span>475391</span>
                           </div>
                       </div>
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Товары народного потребления (непищевые)</span>
                               <span>230474</span>
                           </div>
                       </div>
                   </div>
               </div>
               <div :class="[skillOpened ? 'filter_gap-active' : 'filter_gap']" class="skill_filter">
                   <div class="section_group">
                       <div :class="[skillOpened ? 'section__group-item' : 'section__group-item-active']"
                            @click="skillOpen()"
                       >
                           <p>Опыт работы</p>
                           <span></span>
                       </div>
                   </div>
                   <div :class="skillOpened ? 'sub_region-active' : 'sub_region'">
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>от 1 года до 3 лет</span>
                               <span>548935</span>
                           </div>
                       </div>
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Нет опыта</span>
                               <span>475391</span>
                           </div>
                       </div>
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>от 3 до 6 лет</span>
                               <span>230474</span>
                           </div>
                       </div>
                   </div>
               </div>
               <div :class="[takeOpened ? 'filter_gap-active' : 'filter_gap']" class="take_filter">
                   <div class="section_group">
                       <div :class="[takeOpened ? 'section__group-item' : 'section__group-item-active']"
                            @click="takeOpen()"
                       >
                           <p>Тип занятости</p>
                           <span></span>
                       </div>
                   </div>
                   <div :class="takeOpened ? 'sub_region-active' : 'sub_region'">
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Полная занятость</span>
                               <span>548935</span>
                           </div>
                       </div>
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Частичная занятость</span>
                               <span>475391</span>
                           </div>
                       </div>
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Стажировка</span>
                               <span>230474</span>
                           </div>
                       </div>
                   </div>
               </div>
               <div :class="[scheduleOpened ? 'filter_gap-active' : 'filter_gap']" class="schedule_filter">
                   <div class="section_group">
                       <div :class="[scheduleOpened ? 'section__group-item' : 'section__group-item-active']"
                            @click="scheduleOpen()"
                       >
                           <p>График работы</p>
                           <span></span>
                       </div>
                   </div>
                   <div :class="scheduleOpened ? 'sub_region-active' : 'sub_region'">
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Полный день</span>
                               <span>548935</span>
                           </div>
                       </div>
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Сменный график</span>
                               <span>475391</span>
                           </div>
                       </div>
                       <div class="region_sub-block">
                           <div class="region__sub-item">
                               <span>Вахтовый метод</span>
                               <span>230474</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "vacancy_filter",
        data () {
            return {
                regionOpened: true,
                salaryOpened: true,
                specialtyOpened: true,
                employerOpened: false,
                skillOpened: false,
                takeOpened: false,
                scheduleOpened: false,
                job_types: [
                    {
                        id: 1,
                        type: 'Постоянная работа',
                        icon: ''
                    },
                    {
                        id: 2,
                        type: 'Подработка',
                        icon: 'lighted',
                    }
                ],
                selectedType: 1,
            }
        },
        methods: {
            selectType (item) {
                this.selectedType = item.id
            },
            regionOpen () {
                this.regionOpened = !this.regionOpened
            },
            salaryOpen () {
                this.salaryOpened = !this.salaryOpened
            },
            specialtyOpen () {
                this.specialtyOpened = !this.specialtyOpened
            },
            employerOpen () {
                this.employerOpened = !this.employerOpened
            },
            skillOpen () {
                this.skillOpened = !this.skillOpened
            },
            takeOpen () {
                this.takeOpened = !this.takeOpened
            },
            scheduleOpen () {
                this.scheduleOpened = !this.scheduleOpened
            }
        }
    }
</script>

<style lang="scss" scoped>

    .filter_gap {
        padding-bottom: 24px;

        &:last-child {
            padding-bottom: 0;
        }
    }

    .filter_gap-active {
        padding-bottom: 10px;

        &:last-child {
            padding-bottom: 0;
        }
    }

    .filter_wrapper {
        position: sticky;
        top: 0;
        width: 210px;
        height: auto;
        background: #F9F9F9;

        .filter {
            font-size: 12px;
            font-weight: bold;
            padding: 24px 20px;

            .job_type {
                padding: 0 0 13px;
                ul {
                    li {
                        a {
                            display: flex;
                            align-items: center;
                            cursor: pointer;
                            color: #0099FF;
                            margin-bottom: 13px;

                            span {
                                width: 16px;
                                height: 16px;
                                background: url("../../assets/icons/lightning-icon_min.svg") no-repeat top 1px left -105px;
                            }

                            &:hover {
                                color: #c00;
                            }
                        }

                        .type_active {
                            color: #333333;
                            cursor: auto;

                            &:hover {
                                color: #333333;
                            }
                        }
                    }
                }
            }

            .line_separatore {
                height: 1px;
                background: #e7e7e7;
                margin: 3px -20px 19px;
            }

            .sections_wrapper {
                .section_group {
                    margin: 0 -10px 0;
                    &:hover {
                        background: #eeeeee;

                        .section__group-item {
                            span {
                                visibility: visible;
                                opacity: 1;
                                transition: all 0.1s linear;
                            }
                        }

                        .section__group-item-active {
                            span {
                                visibility: visible;
                                opacity: 1;
                                transition: all 0.1s linear;
                            }
                        }
                    }
                }

                .section__group-item {
                    display: flex;
                    align-items: center;
                    padding: 5px 10px;
                    justify-content: space-between;
                    user-select: none;
                    cursor: pointer;
                    span {
                        visibility: hidden;
                        opacity: 0;
                        width: 16px;
                        height: 16px;
                        background: url("../../assets/icons/chevron-up-icon_min.svg") no-repeat center left -20px;
                    }
                }

                .section__group-item-active {
                    display: flex;
                    align-items: center;
                    padding: 5px 10px;
                    justify-content: space-between;
                    user-select: none;
                    cursor: pointer;
                    span {
                        visibility: hidden;
                        opacity: 0;
                        width: 16px;
                        height: 16px;
                        background: url("../../assets/icons/chevron-down-icon_min.svg") no-repeat center left -20px;
                    }
                }

                .region_sub-block {
                    cursor: pointer;
                    line-height: 14px;
                    padding: 7px 10px;
                    &:hover {
                        background: #efefef;
                    }

                    .region__sub-item {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        span {
                            color: #666666;
                            font-size: 12px;
                            font-weight: 400;
                        }
                    }
                }

                .more-item {
                    padding: 7.5px 10px;
                    a {
                        font-size: 11px;
                        color: #ababab;

                        &:hover {
                            cursor: pointer;
                            color: #c00;
                        }
                    }
                }

                .sub_region {
                    overflow: hidden;
                    visibility: hidden;
                    height: 0;
                    opacity: 0;
                    z-index: -100;
                    margin-top: -15px;
                    transition: all 0.3s ease-in-out;
                }

                .sub_region-active {
                    margin-top: 0;
                    transition: all 0.3s ease-in-out;
                }
            }
        }
    }
</style>