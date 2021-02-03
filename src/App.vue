<template>
  <div id="app">
  <!-- <Header></Header> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Header from './components/header/header.vue'

export default {
  name: 'App',
  components: {
  //  Header
  },
  mounted (){
    // 文字不允许被选中
    document.onselectstart = function(event){
    event.returnValue = false;
    }
  }
}
</script>

<style>
.app{
  height: 100%;
  width: 100%;
}
</style>
