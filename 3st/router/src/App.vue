<template>
  <div id="app">
    <Lnb/>
    <router-view/>
  </div>
</template>

<script>
  import Lnb from "./components/Lnb";

  export default {
    name: "App",
    components: {
      Lnb
    }
  }
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
}
  #app{
    display:flex;
    height:100vh;
  }
  .content{
    width:calc(100% - 300px);
    padding:1rem;
  }
</style>
