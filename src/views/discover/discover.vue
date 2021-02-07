<template>
  <div class="discover">
    <div class="wrap">
      <DiscoverNav :list="navList" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import DiscoverNav from '@/components/header/discover-nav'
import { discoverNav } from "@/utils/local-data";
export default {
  data (){
    return {
      navList: discoverNav
    }
  },
  components: {
    DiscoverNav
  }
};
</script>

<style lang="less" scoped>
.discover {
  width: 100%;
  .wrap {
    width: 100%;
    height: 34px;
    background-color: #c20c0c;
  }
}

</style>