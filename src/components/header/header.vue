<template>
  <div class="header">
    <div class="hl">
      <div class="logo iconfont">&#xe618;</div>
      <div class="system-name">普洱水情测报系统</div>
    </div>
    <!-- header 中间nav-bar -->
    <div class="nav-bar">
      <div class="nav-item" v-for="item in headerNavItem" :key="item.path" >
        <router-link :to="item.path" active-class="active-router"> {{ item.name }}</router-link>
      </div>
    </div>

    <div class="hr">
      <div class="user">管理员</div>
      <div class="user-name">LUXISZR</div>
      <div class="hr-icon iconfont">&#xe600;</div>
    </div>
    
  </div>
</template>

<script>
import { navList } from "@/utils/local-data";
export default {
  data() {
    return {
      headerNavItem: navList,
    };
  },
  methods:{
    
  }
 
};
</script>

<style lang="less" scoped>
.header {
  width:100%;
  height: 80px;
  background-color: #1890ff;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  padding: 0 20px;
  color: #fff;
  .hl {
    height: 34px;
   width: 190px;
    overflow: hidden;
    display: flex;
    align-items: center;
    .logo {
      font-size: 20px;
      margin-right: 10px;
      margin-top: 4px;
    }
    .system-name {
      width: 160px;
      height: 30px;
      font-size: 20px;
      font-weight: 700;
      overflow: hidden;
    }
  }
  .nav-bar {
    width: 1000px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    .nav-item{
     flex: 1;
      font-size: 16px;
      text-align: center;
      height: 80px;
      line-height: 80px;
      a {
        color: #fff;
        display: block;
        &.active-router {
         background-color:rgba(0,0,0,0.2);
         position: relative;
         &::after {
            display: block;
            content: '';
            width: 100%;
            height: 5px;
            background:#FAB945;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
      &:hover{
         background-color:rgba(0,0,0,0.2);
         cursor: pointer;
      }
    }
  }
  .hr {
    width: 140px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .user {
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      line-height: 43px;
      width: 43px;
      height: 43px;
      border-radius: 50%;
      border: 1px solid #fff;
      background-image: linear-gradient(to right, #3a75fd, #1caefe);
    }
    .user-name {
    }
    .hr-icon {
    }
  }
}
</style>
