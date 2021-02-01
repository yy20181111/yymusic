<template>
  <div class="slider-item">
    <h3 class="title">系统管理 
      <i class="iconfont bn-icon" @click="isCollapse = !isCollapse"> &#xe601;</i>
    </h3>
    <div class="side-bar">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo" 
        :collapse="isCollapse"
         router
      >
        <el-menu-item :index="item.path" v-for='item in sideList'  :key='item.index' style="padding: 0;" >
          <i class="el-icon-menu"></i>
          <span slot="title" class="iconfont">&#xe683;&nbsp;{{item.name}}</span>
        </el-menu-item>
       
      </el-menu>

    </div>
   
  </div>
  
</template>

<script>
import { sideList } from "@/utils/local-data";
export default {
  data() {
    return {
      sideList:sideList,
      isCollapse: false,
     
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
     toRouter (path){
      this.$router.push(path)
    }
  },

};

</script>

<style lang="less" scoped>
.slider-item {
  width: 235px;
  height:381px;
.title{
  display: flex;
  align-items: center;
  height: 45px;
  width: 235px;
  padding: 0 10px;
  background-color: #fff;
  .bn-icon{
    margin-left: 132px;
    cursor: pointer;
  }
}
  // .nav-bar {
  //   width: 100%;
  //   height: 40px;
  //   background-color: pink;
  // }
  .side-bar {
    // display: flex;
    .el-menu{
      border: none;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 235px;
      min-height: 400px;
      /deep/ .el-icon-menu:before {
            content: "";
      }
      /deep/ .el-menu-item{
        width: 235px;
        height: 56px;
        color: #585858;
      
        &:hover{
          background-color:#eee;
        }
      
      }
        /deep/ .is-active{
          background-color:#eee;
        }
    }
  }
}
</style>