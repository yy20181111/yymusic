<template>
  <div class="nav-bar">
    <span class="font"> 主页</span> <span class="line">/</span>
    <span class="font"> 系统管理</span><span class="line">/</span>
    <span class="font"> 用户管理</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav-bar {
  padding: 0 10px;
  height: 45px;
  line-height: 45px;
  font-size: 13px;
  color: #9b9b9b;
  background-color: #fff;
  .font {
    cursor: pointer;
  }
  .line {
    padding: 0 10px;
  }
}
</style>