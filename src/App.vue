<template>
  <div id="app">
    <YYheader></YYheader>
   
    <router-view></router-view>
    <YYfooter></YYfooter>
    <YYplay></YYplay>
  </div>
</template>

<script>
import YYheader from './components/header/yy-header'
import YYfooter from './components/footer/yy-footer'
import YYplay from './components/play/yy-play'

export default {
  name: 'App',
  
components:{
  YYheader,YYfooter,YYplay

}
}
</script>

<style>
#app {
  width: 100%;
  background: #F5F5F5;
}

</style>
