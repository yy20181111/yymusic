<template>
  <div class="father" v-if="maskShow">
    <div class="child">
      <div class="btn" @click="maskShow = false">×</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      maskShow: false,
    };
  },
  methods: {
  },
};
</script>

<style style lang="less" scoped>
.father {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(000, 000, 000, .6);
  z-index: 2520;
  .button {
    height: 30px;
    background-color: #1890ff;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    cursor: pointer;
    margin-top: 5px;
    margin-left: 5px;
    padding: 0 3px;
  }
  .child {
    width: 900px;
    height: 600px;
    border: 1px solid #ccc;
    background: #fff;
    margin: 160px auto 0 auto;
    position: relative;
    .btn {
      position: absolute;
      top: 2px;
      right: 15px;
      cursor: pointer;
      font-size: 24px;
      color: #959595;
    }
  }
}
</style>
