<template>
  <div>
    <h1 class="h1">{{ msg }}</h1>
    <div id="myChart" class="echarts"></div>
  </div>
</template>

<script>
  export default {
    name: 'Echarts',
    data() {
      return {
        msg: 'Echarts',
      };
    },
    mounted() {
      const myChart = this.$echarts.init(document.getElementById('myChart'));
      myChart.setOption({});
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .h1 {
    font-weight: normal;
  }
  .echarts {
    width: 600px;
    height: 400px;
  }
</style>
