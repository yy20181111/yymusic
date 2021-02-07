<template>
  <div class="in-singer">
    <!-- 登录 -->
    <div class="login">
      <div class="logintext">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
      <div class="loginbtn">用户登录</div>
    </div>
    <!-- 入驻歌手 -->
    <div class="container">
      <div class="banner">
        <div class="singer">入驻歌手</div>
        <div class="all">查看全部 ></div>
      </div>
      <!-- 列表 -->
      <div class="list">
        <div class="listItem"
             v-for='item in artistList'
             :key='item.id'>
          <img class="itemImg"
               :src="item.picUrl">
          <div class="itemSinger">
            <div class="singer">{{item.alias.join(" ") || item.name}}</div>
            <div class="desc">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="apply">申请成为网易音乐人</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('recommendStore', ['artistList']),
  },
  mounted() {
    let form = { limit: 5, offset: 15 }
    this.getArtistActions(form)
  },
  methods: {
    ...mapActions({
      getArtistActions: 'recommendStore/getArtistActions',
    }),
  },
}
</script>

<style lang='less' scoped>
.in-singer {
  .login {
    width: 250px;
    height: 126px;
    background-color: #e9e9e9;
    .logintext {
      width: 210px;
      height: 76px;
      font-size: 13px;
      color: #666;
      margin: 0 25px 0 25px;
      padding-top: 25px;
    }
    .loginbtn {
      font-size: 14px;
      width: 100px;
      height: 31px;
      background-color: #dc161e;
      border-radius: 5px;
      text-align: center;
      line-height: 31px;
      color: #fff;
      margin: 0 auto;
    }
  }
  .container {
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
        height: 62px;
        background-color: #fafafa;
        margin-bottom: 15px;
        cursor: pointer;
        .itemSinger {
          padding-left: 15px;
          width: 209px;
          height: 62px;
          border: 1px solid#E9E9E9;
          border-left: none;
          &:hover {
            background-color: #f5f5f5;
          }
          .singer {
            width: 130px;
            margin-top: 5px;
            font-size: 14px;
            font-weight: 700;
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .desc {
            width: 130px;
            margin-top: 6px;
            font-size: 14px;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .itemImg {
          width: 62px;
          height: 62px;
        }
      }
    }
    .apply {
      width: 210px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border: 1px solid #c3c3c3;
      border-radius: 5px;
      font-weight: 700;
      font-size: 14px;
      margin-top: 10px;
      box-shadow: 1px 1px 1px 1px #eee;
    }
  }
}
</style>