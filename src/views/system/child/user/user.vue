<template>
  <div class="authority">
    <div class="nav">
     <NavBar></NavBar>
      <div class="content">
        <Content></Content>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./children/nav-bar/nav-bar";
import Content from "./children/content/content";
export default {
  components: {
    Content,
    NavBar
  },
};
</script>

<style lang="less" scoped>
.authority {
  display: flex;
  height:100%;
  background-color:  #f7f7f7;
  .nav-l {
    width: 235px;
    height: 381px;
  }
  .nav {
    flex: 1 1 auto;
    .content{
      overflow: hidden;
      background-color:#F7F7F7;
      height: 100%;
      margin-top: 15px;
    }
  }
}
</style>