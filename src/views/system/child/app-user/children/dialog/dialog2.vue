<template>
  <div class="popover">
      <el-dialog  title="给应用程序添加用户" :visible.sync="dialogVisible" >
      <div class="ct-t">
        <div class="mt15">
          <h3>请选择要分配的角色</h3> 
          <div class="checkbox">
            <el-scrollbar style="height:100%">
            <el-checkbox-group v-model="checkList">
              <div class="checkItem bt"><el-checkbox label="超级管理员"></el-checkbox></div>
              <div class="checkItem"><el-checkbox label="超级管理员"></el-checkbox></div>
              <div class="checkItem"><el-checkbox label="超级管理员"></el-checkbox></div> 
              <div class="checkItem"><el-checkbox label="高级用户"></el-checkbox></div>
              <div class="checkItem"><el-checkbox label="普通用户"></el-checkbox></div>
              <div class="checkItem"><el-checkbox label="执行用户"></el-checkbox></div>
              <div class="checkItem"><el-checkbox label="智障用户"></el-checkbox></div>
            </el-checkbox-group>
            </el-scrollbar>
          </div>
          <div class="next"><el-button type="primary" @click="dialogVisible = false" >下一步</el-button >  </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
   return {
     dialogVisible: false,
      checkList: ['']
   }
  },
};
</script>

<style lang="less" scoped>
.popover {
  h3{
    font-size: 20px;
    color: grey;
  }
  .new {
    margin-left: 15px;
    width: 70px;
    height: 30px;
    background-color: #1890ff;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    cursor: pointer;

  }
  .checkbox{
    width: 100%;
    height: 310px;
    margin: 10px 0 20px 0;
    border: 1px solid #eee;
    // overflow: auto;  内容超出+滚动条
    /deep/ .el-scrollbar__wrap{
      overflow-x: hidden;
    }
    .checkItem{
      font-size: 16px;
      position: relative;
      border-bottom: 1px solid #eee;
      padding: 13px 5px;
      &:last-of-type {
        border-bottom: none;
      }
      /deep/ .el-checkbox, /deep/ .el-checkbox__input  {
        position: static;
        .el-checkbox__inner{
          position: absolute;
          right: 20px;
          top: 50%;
          width: 25px;
          height: 25px;
          font-size: 16px;
          transform: translateY(-50%);
          &::after {
            height: 14px;
            left: 8px;
            top: 2px;
            width: 7px;
          }
        } 
      }
    }
    /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
      color: #606266;
    }
  }
  .next {
    width: 84px;
    margin: 30px auto;
  }
  /deep/.el-dialog{
    width: 32%;
  }
 /deep/ .el-dialog__body{
   padding: 6px 20px;
 }
}

</style>