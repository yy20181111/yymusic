<template>
  <!-- 一列 -->
  <div class="listItem">
    <!-- item上部分  -->
    <div class="itemTop">
      <!-- 图+文字+btn*2 -->
      <div class="itemContent">
        <!-- 图 -->
        <div class="itemImg">
          <img :src="title.coverImgUrl">
          <img class="item-cover" :src="require('@/assets/images/item-cover.png')">
        </div>
        <!-- 图右描述部分 -->
        <div class="itemDescribe">
          <!-- 飙升榜三个字 -->
          <div class="soaringList">{{title.name}}</div>
          <!-- 下面按钮部分 -->
          <div class="btns">
            <!-- 暂停 -->
            <div class="pause ">
              <span class="iconfont">&#xe630;</span>
            </div>
            <!-- 文件夹按钮 -->
            <div class="folder">
              <span class="iconfont">&#xe62d;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- item下部分 -->
    <div class="itemBottom">
      <!-- 列表文字部分  容器 -->
      <div class="listText">
        <!-- 每一小行 -->
        <div class="list-item"
              v-for="(item, index) in songList"
              :key="item.id">
          <!-- 序号 -->
          <div class="num">{{ index + 1 }}</div>
          <!-- 歌名 -->
          <div class="songName">{{ item.name }}</div>
          <div class="icon-list">
            <span class="iconfont">&#xe630;</span>
            <span class="iconfont"
                  style="font-size: 14px;">&#xe61e;</span>
            <span class="iconfont">&#xe62d;</span>
          </div>
        </div>
        <!-- 查看更多容器 -->
        <div class="list-item">
          <!-- 查看更多文本 -->
          <div class="read-more">查看全部 > </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){ 
    return {
    
    }
  },
  props: {
    songList: {
      type: Array,
      default: null
    },
    title: {
      type: Object,
      default: null
    }
  }
};
</script>

<style lang="less" scoped>
  .listItem {
    width: 100%;
    .itemTop {
      .itemContent {
        height: 120px;
        display: flex;
        align-items: center;
        .itemImg {
          width: 80px;
          height: 80px;
          background-color: red;
          margin-left: 20px;
          position: relative;
          cursor: pointer;
          .item-cover {
            width: 80px;
            height: 80px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
          }
          img {
            position: relative;
            width: 100%;
          }
        }
        .itemDescribe {
          //图右描述 文字+btns*2
          width: 100px;
          height: 70px;
          margin-left: 10px;
          .soaringList {
            font-size: 14px;
            font-weight: 700;
          }
          .btns {
            width: 50px;
            height: 30px;
            display: flex;
            justify-content: space-between;
            color: #bebebe;
            .pause{
              .iconfont{
              &:hover{
                cursor: pointer;
                color:grey;
              }}
            }
            .folder{
               .iconfont{
              &:hover{
                cursor: pointer;
                color:grey;

              }}
            }
          }
          .iconfont {
            font-size: 22px;
          }
        }
      }
    }
    .itemBottom {
      height: 352px;
      cursor: pointer;
      .list-item {
        height: 32px;
        line-height: 32px;
        padding-left: 30px;
        position: relative;
        display: flex;
        align-items: center;
        width: 228px;
        .num {
          margin-right: 10px;
        }
        &:nth-of-type(2n + 1) {
          background: #e8e8e8;
        }
        &:nth-child(-n + 3) {
          .num {
            color: red;
          }
        }
        .songName {
          font-size: 14px;
          width: 170px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:hover {
            text-decoration: underline;
          }
        }
        .icon-list {
          position: absolute;
          right: 0;
          top: 0;
          display: none;
          .iconfont {
            margin-right: 6px;
            font-size: 19px;
            color: #959595;
            font-weight: 800;
          }
        }
        &:hover {
          .icon-list {
            display: block;
          }
          .songName {
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-decoration: underline;
          }
        }
        .read-more {
          width: 100%;
          font-size: 14px;
          text-align: right;
          cursor: pointer;
          padding-right: 10px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>