<template>
  <div>
    <!-- header -->
    <div class="header">
      <div class="header-wrap">
        <div class="header-logo">
          <img :src="logo" alt="" />
        </div>
        <div
          :class="['header-nav', { active: currentIndex === index}]" 
          v-for="(item, index) in headerNavItem"
          :key="item.name"
          @click="toRouter(item.path, index)"
        >
          <div class="header-nav-item">{{ item.name }}</div>
        </div>
        <div class="header-control">
          <div class="search">
            <input class="searchinput" type="text" placeholder="音乐/视频/电台/用户" />
            <img class="searchicon" :src="icon" alt="" />
          </div>
          <span class="framer">创作者中心</span>
          <div class="login"><a href="#">登录</a></div>
        </div>
      </div>
    </div>
    <div class="headerline"></div>
  </div>
</template>

<script>
import { navList } from "@/utils/local-data";

import { saveRouter, getRouter } from "@/utils/save-browser";
export default {
  data() {
    return {
      logo: require("@/assets/images/logo.png"),
      icon: require("@/assets/images/search.png"),
      headerNavItem: navList,
      currentIndex: 0,
    };
  },
  mounted (){
    console.log(getRouter())
    if(getRouter()) {
      this.currentIndex = parseInt(getRouter()) 
    }
  },
  methods: {
    toRouter(path, index) {
      saveRouter(index)
      this.$router.push(path);
      this.currentIndex = index;
      console.log(getRouter())
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 70px;
  background-color: #242424;
  .header-wrap {
    height: 70px;
    display: flex;
    align-items: center;
    width: 1100px;
    margin: 0 auto;
    .header-logo {
      padding-right: 20px;
      cursor: pointer;
    }
    .header-nav {
      &.active {
        position: relative;
        display: block;
        background: #000;
        .header-nav-item {
          color: #fff;
        }
      }
     
      &.active::before {
        display: block;
        content: "";
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-bottom: 8px solid #c20c0c;
        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
      }
      .header-nav-item {
        cursor: pointer;
        font-size: 14px;
        height: 70px;
        line-height: 70px;
        color: #e5e5e5;
        padding: 0 19px;
        &:hover {
          background-color: #000;
        }
      }
    }
    .header-control {
      display: flex;
      margin-left: 40px;
      .search {
        position: relative;
        .searchinput {
          font-size: 12px;
          width: 158px;
          height: 32px;
          outline: none;
          border-radius: 20px;
          padding-left: 35px;
        }
        .searchicon {
          position: absolute;
          left: 8px;
          top: 6px;
          width: 20px;
        }
      }
      .framer {
        cursor: pointer;
        width: 90px;
        height: 32px;
        background-color: pink;
        text-align: center;
        line-height: 29px;
        border-radius: 15px;
        margin-left: 15px;
        font-size: 14px;
        color: #cccccc;
        border: 1px solid #4e4e4e;
        background-color: #242424;
        &:hover {
          border: 1px solid #cccccc;
        }
      }
      .login {
        font-size: 10px;
        margin-left: 15px;
        a {
          line-height: 32px;
        }
      }
    }
  }
}
.headerline {
  height: 5px;
  width: 100%;
  background-color: #c20c0c;
}
</style>>


