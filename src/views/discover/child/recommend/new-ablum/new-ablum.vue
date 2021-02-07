<template>
  <div class="ablum">
    <RecommendTheme :title="'新碟上架'" />
    <div class="carousel-container">
      <!-- 轮播图 -->
      <div class="btn1" @click="$refs.carousel.prev()" ><i class="el-icon-star-off" ></i></div>
      <div class="btn2"  @click="$refs.carousel.next()"><i class="el-icon-star-off"></i></div>
      <!-- <img class="btn1" :src="require('@/assets/images/lastimg.png')" alt="">
      <img  class="btn2" :src="require('@/assets/images/nextimg.png')"  alt=""> -->
      <el-carousel arrow="never" ref='carousel' indicator-position='none' :interval="3000" >
        <el-carousel-item v-for="(item, index) in albumList" :key="index">
          <div class="flex">
            <div v-for="el in item" :key="el.id">
              <div class="el">
                <img class="pic" :src="el.picUrl" alt="" />
                <img
                  class="el-bg"
                  :src="require('@/assets/images/album-bg.png')"
                  alt=""
                />
              </div>
              <div class="song">{{ el.name }}</div>
              <div class="singer">{{ el.artist.name }}</div>
            </div>
          </div>
        </el-carousel-item>
      
      </el-carousel>
    </div>
  </div>
</template>

<script>
import RecommendTheme from "@/components/header/recommend-theme";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      list: ["1,2,3,4,5"]
    };
  },
  components: {
    RecommendTheme
  },
  mounted() {
    let form = { limit: 15, offset: 0 };
    this.getNewAlbumActions(form);
  },
  computed: {
    ...mapState("recommendStore", ["NewAlbumList"]),
    ...mapGetters("recommendStore", ["albumList"])
  },
  methods: {
    ...mapActions({
      getNewAlbumActions: "recommendStore/getNewAlbumActions"
    })
  }
};
</script>

<style lang="less" scoped>
.ablum {
  .carousel-container {
    background: #eee;
    border: 1px solid #ccc;
    height: 190px;
    padding: 28px 20px 0 24px;
    position: relative;
    .btn1,
    .btn2 {
      cursor: pointer;
      position: absolute;
      height: 40px;
      width: 25px;
      text-align: center;
      line-height: 40px;
      top: 60px;
      &:hover {
        color: pink;
      }
    }
    .btn1 {
      left: 0px;
    }
    .btn2 {
      right: 0px;
    }
    .flex {
      display: flex;
      .el {
        position: relative;
        margin-right: 30px;
        .pic {
          width: 100px;
        }
        .el-bg {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .song, .singer {
        width: 100px;
        padding-left: 10px;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }

    .song {
      color: #000;
    }
    .singer {
      color: #666;
    }
  }
}
</style>
