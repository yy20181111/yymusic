<template>
  <div class="banner" :style="{ backgroundImage: 'url( ' + bannerBg + ')' }">
    <!-- 轮播图+登录容器 -->
    <div class="carousel-container">
      <!-- 切换图片按钮 -->
      <div class="last" @click="$refs.carousel.prev()">
        <img
          class="btn1"
          :src="require('@/assets/images/lastimg.png')"
          alt=""
        />
      </div>
      <div class="next" @click="$refs.carousel.next()">
        <img
          class="btn2"
          :src="require('@/assets/images/nextimg.png')"
          alt=""
        />
      </div>

      <!-- 轮播图 -->
      <el-carousel
        ref="carousel"
        class="carousel"
        indicator-position="inside"
        arrow="never"
        :interval="3000"
        @change="changeBanner"
      >
        <el-carousel-item v-for="item in banners" :key="item.imageUrl">
          <img :src="item.imageUrl" alt="" />
        </el-carousel-item>
      </el-carousel>
      <!-- 登录 -->
      <div class="download">
        <img :src="img" alt="">
        <div class="describe">PC 安卓 iPhone WP iPad Mac 六大客户端</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      img:require('../../../../../assets/images/download.png')
    };
  },
  methods: {
    changeBanner(index) {
      this.$emit("changeBanner", index);
    },
  },
  props: {
    banners: {
      type: Array,
    },
    bannerBg: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
// 轮播图容器
.banner {
  background-size: 90000px;
  background-position: center center;

  .carousel-container {
    position: relative;
    margin: 0 auto;
    display: flex;
    width: 984px;
    height: 285px;
    z-index: 888;
    // 按钮容器
    .last,
    .next {
      width: 40px;
      height: 60px;
      z-index: 9999;
      position: absolute;
      top: 150px;
      margin-top: -30px;
      cursor: pointer;
      &:hover {
        background-color: rgba(000, 000, 000, 0.3);
        // opacity: 0.3;
      }
      .btn1,
      .btn2 {
        height: 60px;
        width: 40px;
      }
    }
    .last {
      left: -70px;
    }
    .next {
      right: -70px;
    }
    .carousel {
      width: 730px;
      height: 285px;
      img {
        width: 730px;
        height: 285px;
      }
    }
    .download {
       cursor: pointer;
      position: relative;
      width: 254px;
      height: 285px;
      background-color: blue;
      .describe{
       
        color: #8D8D8D;
        font-size: 8px;
        position: absolute;
        bottom: 15px;
       left: 11px;
      }
    }
  }
  /deep/ .el-carousel__container {
    height: 285px;
  }
}
</style>