<template>
  <div id="nav">
    <h1>ROUTER</h1>
    <router-link to="/">Home</router-link>
    <router-link to="/nav01">Nav01</router-link>
    <router-link to="/nav02">Nav02</router-link>
  </div>
</template>

<script>
export default {
	name: "Lnb"
}
</script>

<style lang="scss">
#nav{
  display:flex;
  flex-flow:column;
  width:300px;
  border-right:1px solid #ddd;
  h1{
    padding:1rem;
    font-size:2rem;
    color:#222;
  }
  a{
    padding:0.5rem 1rem;
    font-size:1.5rem;
    text-decoration:none;
    color:#222;
    &.router-link-exact-active{
      color:lightseagreen;
    }
  }
}
</style>
