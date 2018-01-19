<template>
  <div id="app" class="app">
    <div>
      <router-link class="btn-ui" to="/">Home</router-link>
      <router-link class="btn-ui" to="/page">Page</router-link>
      <router-link class="btn-ui" to="/echarts">Echarts</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style lang="less">
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .btn-ui {
      width: 100px;
      height: 64px;
      background-color: powderblue;
      color: white;
    }
  }
</style>
