<template>
  <div class="authority">
    <div class="nav">
      <NavBar></NavBar>
      <div class="content">
        <App></App>
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
    NavBar,
  },
};
</script>

<style lang="less" scoped>
.authority {
  display: flex;
  height: 500px;
  .nav-l {
    width: 235px;
    height: 381px;
  }
  .nav {
    flex: 1 1 auto;
    .content {
      overflow: hidden;
      background-color: #f7f7f7;
      height: 500px;
      margin-top: 15px;
    }
  }
}
</style>