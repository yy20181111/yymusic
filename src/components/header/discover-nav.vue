<template>
  <div class="wrap-nav">
    <router-link class="wrap-navitem" 
        active-class="active" 
        :to="item.path"
        v-for="item in list" :key="item.name">
      {{ item.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // currentIndex: 0,
    };
  },
  props: {
    list: {
      type: Array,
      default: null
    }
  },
  // methods: {
  //   toRouter(path, index) {
  //     this.$router.push(path);
  //     this.currentIndex = index;
  //   },
  // },
}
</script>

<style lang="less" scoped>
  .wrap-nav {
    display: flex;
    width: 705px;
    height: 34px;
    margin: 0 auto;
    margin-top: -5px;
    align-items: center;
    font-size: 13px;

    .wrap-navitem {
      cursor: pointer;
      color: #ffffff;
      background-color: #c20c0c;
      margin-left: 7px;
      margin-right: 28px;
      padding: 2px 10px;
      border-radius: 20px;
      &:hover {
        background-color: #9b0909;
      }
      &.active {
        background-color: #9B0909;
      }
    }
  }
</style>