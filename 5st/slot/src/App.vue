<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  *{
    margin:0;
    padding:0;
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing:border-box;
  }
  img{
    vertical-align:top;
  }
  a{
    text-decoration:none;
  }
  #app {
    display:flex;
    height:100vh;
    #nav{
      display:flex;
      flex-flow:column;
      width:300px;
      border-right:1px solid #939597;
      a{
        display:block;
        padding:15px;
        color:#000;
        border-bottom:1px solid #939597;
        &:last-child{
          border-bottom:none;
        }
        &.router-link-exact-active{
          background-color:#FEDC70;
          color:#fff;
        }
      }
      & + div{
        width:100%;
        height:100vh;
        overflow-x:hidden;
        overflow-y:auto;
        padding:20px;
      }
    }
  }
</style>
