<template>
  <div class="hot-anchor">
    <!-- 热门主播 -->
    <div class="container">
      <div class="banner">
        <div class="singer">热门主播</div>
        <div class="all">查看全部 ></div>
      </div>
      <!-- 列表 -->
      <div class="list">
        <div class="listItem"
             v-for='item in hotAnchorList'
             :key='item.index'>
          <img class="itemImg"
               :src="item.img">
          <div class="itemSinger">
            <div class="singer">{{item.name}}</div>
            <div class="desc">{{ item.describe }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotAnchorList: [
        {
          name: '和你在一起',
          describe: '宝贝,我知道,虽然你不说',
          img:require('../../../../../assets/images/search.png')
        },
        {
          name: '行歌',
          describe: '谁在一边走一边唱一边回头张望',
          img:require('../../../../../assets/images/search.png')

        },
        {
          name: '秋酿',
          describe: '那年她才十八,你也正值美好年华',
          img:require('../../../../../assets/images/search.png')

        },
        {
          name: '粥',
          describe: '你和我都是孤独的鬼',
          img:require('../../../../../assets/images/search.png')

        },
        {
          name: '秘密',
          describe: '总在闭上双眼之后才能看见你',
          img:require('../../../../../assets/images/search.png')

        },
      ],
    }
  },
}
</script>

<style lang='less' scoped>
.hot-anchor {
  .container {
    margin-top: 130px;
    width: 210px;
    height: 380px;
    background-color: #ffffff;
    margin-left: 22px;
    .banner {
      margin-top: 20px;
      font-size: 12px;
      width: 210px;
      height: 24px;
      border-bottom: 1px solid #cccccc;
      display: flex;
      justify-content: space-between;
      .singer {
        font-weight: 700;
       
      }
      .all {
        color: #666;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .list {
      width: 210px;
      height: 380px;
      margin-top: 20px;
      .listItem {
        display: flex;
        width: 210px;
        height: 50px;
        margin-bottom: 15px;
        .itemSinger {
          padding-left: 15px;
          width: 209px;
          height: 50px;
          border-left: none;
 
          .singer {
            width: 130px;
            margin-top: 5px;
            font-size: 13px;
            font-weight: 700;
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
          }
          .desc {
            width: 130px;
            margin-top: 6px;
            font-size: 12px;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .itemImg {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>