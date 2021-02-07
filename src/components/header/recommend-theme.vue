<template>
  <div>
    <!-- 热门推荐列表 -->
    <div class="hot-recommend">
      <span class="dot"></span>
      <span>{{title}}</span>
      <!-- 遍历热门推荐 -->
      <div class="relist">
        <div class="relist-item" v-for="item in relistItem" :key="item.name">
          {{ item.name }} 
        </div>
      </div>
      <div class="more-icon">
        <span class="more">更多</span>
        <img :src="icon2" class="icon2" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon2: require("@/assets/images/goright.png"),
    };
  },
  props: {
    relistItem: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: null
    }
  }
};
</script>


<style lang="less" scoped>
.hot-recommend {
  display: flex;
  align-items: center;
  margin: 20px 0;
  width: 689px;
  height: 35px;
  border-bottom: 2px solid #c10d0c;
  .icon {
    width: 25px;
    height: 25px;
    margin: 0 10px;
  }
  span {
    font-size: 20px;
    cursor: pointer;
  }
  .relist {
    padding: 0 30px;
    display: flex;
    align-items: center;
    height: 35px;
    .relist-item {
      cursor: pointer;
      font-size: 12px;
      width: 50px;
      position: relative;
      &:hover {
        text-decoration: underline;
      }
      &::after {
        content: '';
        display: block;
        width: 1px;
        height: 10px;
        background: #000;
        position: absolute;
        top: 5px;
        right: 15px;
      }
      &:last-of-type {
        &::after {
          display: none;
        }
      }
    }
  }
  .more-icon {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 60px;
    height: 32px;
    .more {
      font-size: 15px;
      cursor: pointer;
    }
    .icon2 {
      width: 15px;
      height: 15px;
      margin: 0 5px;
    }
  }
  .dot{
    display: inline-block;
    width: 13px;
    height: 13px;
    background: #fff;
    border: 3px solid #C10D0C;
    border-radius: 50%;
    margin: 0 15px;
  }
}
</style>