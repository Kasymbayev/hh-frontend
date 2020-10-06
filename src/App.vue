<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "assets/styles/reset.css";
  @import "assets/styles/proximaFont/proximaFont.css";
  @import "assets/styles/responsive";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

  /*Detail vacancy style*/

  .description {
    font-size: 14px;

    ul {
      li {
        display: flex;
        align-items: center;
        line-height: 30px;
        margin: 8px 0;
        &:before {
          content: '—';
          padding-right: 10px;
        }
      }
    }

    p {
      padding-right: 100px !important;
      line-height: 22px !important;
      margin: 10px 0;
    }

    strong {
      font-weight: bold;
    }
  }
</style>
