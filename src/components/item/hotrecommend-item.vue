<template>
  <div>
    <div class="container">
      <!-- 小模块 -->
      <div class="listenItem">
        <!-- 模块图片部分 -->
        <div class="listenImg">
          <div class="pic"><img :src="ablum.picUrl" alt="" />
          <img class="pic-cover" :src="itemCover" alt=""></div>
          <!-- 灰色透明条 -->
          <div class="liatenBar">
            <!-- 灰色透明条左边 -->
            <div class="listen">
              <i class="iconfont" style="font-size: 16px">&#xe607;</i>

              <!-- 过滤传的数据是前一个的数据,即ablum.playCount -->
              <span class="liatenNum">{{ablum.playCount | filterCount}}</span>
            </div>
            <!-- 灰色透明条右边 -->
            <div class="listenBtn">
              <i class="iconfont">&#xe630;</i>
            </div>
          </div>
        </div>
        <div class="itemTitle">
          <div class="describe">{{ablum.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getSongCount } from '@/utils/format'
export default {
  data() {
    return {
      startImg: require("@/assets/images/start.png"),
      erji: require("@/assets/images/erji.png"),
      itemCover:require("@/assets/images/item-cover.png"),
    };
  },
  props: {
    ablum: {
      type: Object,
      default: null
    }
  },
  filters: {
    //过滤方法,如果数字>10000返回1w  =>utils/format内方法
    filterCount (num) {
      return getSongCount(num)
    }
  }
};
</script>


<style lang="less" scoped>
  .listenItem {
    width: 140px;
    height: 204px;
    .listenImg {
      cursor: pointer;
      position: relative;
      width: 140px;
      height: 140px;
      background-color: #d8bce5;
      .pic {
        width: 140px;
        img {
          width: 100%;
        }
      }
      .pic-cover {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
      }
      .liatenBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        width: 140px;
        height: 27px;
        background-color: rgba(0, 0, 0, 0.5);
        border-top: 1px solid rgba(0, 0, 0, 0.6);
        z-index: 11;
        padding: 0 8px;
        .listen {
          .liatenNum {
            font-size: 12px;
            margin-left: 5px;
            color: #cacaca;
          }
        }
        .iconfont {
          font-size: 22px;
          color: #cacaca;
          cursor: pointer;
          &:hover{ 
            color: #fff;
          }
        }
      }
    }
    .itemTitle {
      margin-top: 10px;
      width: 140px;
      height: 38px;
      background-color: #fff;
      .describe {
        font-size: 13px;
        width: 140px;
        height: 38px;
        word-wrap: break-word;
        &:hover{
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
</style>