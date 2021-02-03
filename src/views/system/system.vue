<template>

    <div class="authority">
      <div class="nav-l">
        <SliderItem></SliderItem>
      </div>
      <div class="nav">
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import SliderItem from "@/components/item/slider-item";
export default {
  components: {
    SliderItem,
  },
};
</script>

<style lang="less" scoped>
.authority {
  display: flex;
  height: 500px;
  .nav-l {
    width: 235px;
    height: 100%;
  }
  .nav {
    flex: 1 1 auto;
    height: 100%;
    // background-color: pink;
    .content {
      height: 850px;
      overflow: hidden;
      background-color: #f7f7f7;
      // height: 100%;
    }
  }
}
</style>
