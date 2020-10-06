<template>
    <div class="wrapper">
        <header>
            <header-component/>
        </header>
        <search-component></search-component>
        <router-view />
        <footer>
            <footer-component/>
        </footer>
    </div>
</template>

<script>
    import HeaderComponent from "../components/header/header-component"
    import FooterComponent from "../components/footer/footer-component"
    import SearchComponent from '../components/search/search-component'

    export default {
        name: "main-component",
        components: {
            HeaderComponent,
            FooterComponent,
            SearchComponent
        }
    }
</script>

<style scoped>

</style>