<template>
 <div></div>
</template>

<script>
export default {
  methods: {
      open6() {
        this.$confirm('你将恢复用户(欧阳)的密码为初始密码,吃屎密码:123456,将发送至此用户的邮箱,是否确认发送, 是否继续?', '系统提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        })
      }
    }
};
</script>

<style lang="less" scoped>
.initialize{

  .new {
    margin-left: 10px;
    width: 70px;
    height: 30px;
    background-color: #1890ff;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    color: #eee;
    cursor: pointer;
    /deep/ .el-button--text{
      color: #fff;
      font-size: 16px;
      line-height: 30px;
      padding: 0 3px;
    }
  }



}
</style>
