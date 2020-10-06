<template>
    <transition name="fade">
        <div class="loader_wrapper">
            <img src="../assets/icons/hhloader.svg" alt="">
            <div class="loading">
                <p class="loading-text">Подгружаем данные</p>
                <span class="loading-dots">•</span>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "loader"
    }
</script>

<style lang="scss" scoped>

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

    .loader_wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        text-align: center;
        z-index: 5;
        width: 100%;
        height: 100%;
        background: #fff;

        img {
            position: relative;
        }

        h1 {
            font-family: 'Proxima Nova Cn Rg', sans-serif;
            position: relative;
            font-size: 28px;
        }

        .loading-dots {
            text-align: center;
            font-size: 2em;
            color: rgba(0, 0, 0, 0);
            animation-name: loading-dots-animation;
            animation-duration: 1.5s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }

        @keyframes loading-dots-animation {
            0% {
                text-shadow: -1em 0 0 rgba(51, 51, 51, 0.6), 0em 0 0 rgba(34, 34, 34, 0.2), 1em 0 0 rgba(204, 0, 0, 0.2);
            }
            20% {
                text-shadow: -1em 0 0 rgb(204, 0, 0), 0em 0 0 rgba(34, 34, 34, 0.6), 1em 0 0 rgba(204, 0, 0, 0.2);
            }
            40% {
                text-shadow: -1em 0 0 rgba(204, 0, 0, 0.6), 0em 0 0 rgb(34, 34, 34), 1em 0 0 rgba(204, 0, 0, 0.6);
            }
            60% {
                text-shadow: -1em 0 0 rgba(204, 0, 0, 0.2), 0em 0 0 rgba(34, 34, 34, 0.6), 1em 0 0 rgb(204, 0, 0);
            }
            80% {
                text-shadow: -1em 0 0 rgba(204, 0, 0, 0.2), 0em 0 0 rgba(255, 255, 255, 0.2), 1em 0 0 rgba(204, 0, 0, 0.6);
            }
            100% {
                text-shadow: -1em 0 0 rgba(204, 0, 0, 0.6), 0em 0 0 rgba(255, 255, 255, 0.2), 1em 0 0 rgba(204, 0, 0, 0.2);
            }
        }

        .loading-text {
           font-family: 'Proxima Nova Cn Rg', sans-serif;
            color: #333333;
            font-size: 24px;
            padding: 15px 0;
        }
    }
</style>