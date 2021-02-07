<template>
  <div class="recommend">
    <!-- 轮播图组件 -->
    <Banner
      :banners="banner"
      :bannerBg="bannerBg"
      @changeBanner="changeBanner"
     />
    <!-- 宽度984大容器 -->
    <div class="container">
      <!-- 左边容器 -->
      <div class="content-left">
          <!-- 热门推荐组件 -->
          <HotRecommend></HotRecommend>
          <!-- 新碟上架组件 -->
          <NewAblum />
          <!-- 榜单组件 -->
          <SongList></SongList>
      </div>
      <!-- 右边容器 -->
      <div class="content-right">
<!-- 入驻歌手 -->
<InSinger></InSinger>  
<!-- 热门主播 -->
<HotAnchor></HotAnchor>
      </div>
      
    </div>
  </div>
</template>

<script>
//1. 请求方法
import Banner from "./banner/banner";
import HotRecommend from './hot-recommend/hot-recommend'
import NewAblum from './new-ablum/new-ablum'
import InSinger from './in-singer/in-singer'
import SongList from './song-list/song-list'
import HotAnchor from './hot-anchor/hot-anchor'

import { mapState, mapActions } from 'vuex'
// 2. 组件
// 3. 一些方法

export default {
  data() {
    return {
      // banner: [],
      // bannerBg: "",
    };
  },
  components: {
    Banner,
    HotRecommend,
    NewAblum,
    SongList, InSinger,HotAnchor
  },
  computed:{
    ...mapState('recommendStore', ['banner', 'bannerBg'])
   
  },
  mounted() {
    this.getBannerActions().then( res => {
      if(res.data.code === 200) {
        this.changeBannerBgActions(0)
      }
    })
  },
  methods: {
    ...mapActions({
      getBannerActions: 'recommendStore/getBannerActions',
      changeBannerBgActions:'recommendStore/changeBannerBgActions'
    }),
    
    // async getBannerdata() {
    //   let res = await getBanner();
    //   this.banners = res.banners;
    //   this.bannerBg = this.banners[0].imageUrl;
    // },

    // 2.写操作及其请求

    // 3. 操作
    changeBanner(index) {
      this.changeBannerBgActions(index)
      // this.bannerBg = this.banners[index].imageUrl;
    },


    // promise写法请求
    // getPromiseData (){
    //   getBanner().then( res => {
    //     console.log(res)
    //   })
    // }
  },
};
</script>

<style lang="less" scoped>
// 宽度984大容器
.container {
  overflow: hidden;
  width: 984px;
  margin: 0 auto;
  display: flex;
  border: 1px solid #c3c3c3;
  border-bottom: none;
 .content-left{
   overflow: hidden;
   width:730px;
   background: #fff;
   padding: 0 20px;
 }
 .content-right {
   flex: 1;
   background-color: #fff;
   border-left: 1px solid #c3c3c3;
 }
}
</style>