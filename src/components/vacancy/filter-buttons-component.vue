<template>
    <div class="filter_buttons_wrapper">
        <ul>
            <li><a>Подработка</a></li>
            <li><a>Свежие</a></li>
            <li><a>Сменный график</a></li>
            <li><a>Удаленная работа</a></li>
            <li><a>Нет опыта</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "hotfilters-component"
    }
</script>

<style lang="scss" scoped>
    .filter_buttons_wrapper {
        padding: 7px 3px;
        margin-bottom: 28px;
        ul {
            display: flex;
            li {
                margin-right: 10px;

                &:last-child {
                    margin-right: 0;
                }

                a {
                    user-select: none;
                    cursor: pointer;
                    padding: 7px 21px;
                    border-radius: 100px;
                    font-size: 14px;
                    background: #EDEDED;
                    color: #333333;

                    &:hover {
                        background: rgba(203,209,211,.6);
                    }

                    &:active {
                        border: 0.5px solid #0f8fee;
                    }
                }
            }
        }
    }
</style>