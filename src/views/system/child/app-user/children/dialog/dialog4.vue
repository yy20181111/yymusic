<template>
  <div class="popover">
    <el-dialog title="给应用程序添加用户" :visible.sync="dialogVisible">
      <div class="ct-t">
        <div class="mt15">
          <h3>请选择用户(可多选)</h3>
          <div class="sear">
            <el-input v-model="input" placeholder="请输入用户名字"></el-input>
            <el-button type="primary" class="searchBtn">搜索</el-button>
          </div>
          <div class="checkbox">
            <el-scrollbar style="height: 100%">
              <el-checkbox-group v-model="checkList">
                <div class="checkItem bt">
                  <el-checkbox label="欧阳太大"></el-checkbox>
                </div>
                <div class="checkItem">
                  <el-checkbox label="欧阳"></el-checkbox>
                </div>
                <div class="checkItem">
                  <el-checkbox label="欧阳太大"></el-checkbox>
                </div>
                <div class="checkItem">
                  <el-checkbox label="欧阳"></el-checkbox>
                </div>
                <div class="checkItem">
                  <el-checkbox label="欧阳太大"></el-checkbox>
                </div>
                <div class="checkItem">
                  <el-checkbox label="欧阳"></el-checkbox>
                </div>
                <div class="checkItem">
                  <el-checkbox label="11"></el-checkbox>
                </div>
                <div class="checkItem">
                  <el-checkbox label="22"></el-checkbox>
                </div>
                <div class="checkItem">
                  <el-checkbox label="33"></el-checkbox>
                </div>
                <div class="checkItem">
                  <el-checkbox label="44"></el-checkbox>
                </div>
                <div class="checkItem">
                  <el-checkbox label="55"></el-checkbox>
                </div>
              </el-checkbox-group>
            </el-scrollbar>
          </div>
          <div class="next">
            <div class="btns">
              <el-button type="primary" @click="dialogVisible = false"
                >确 定</el-button
              >
              <el-button el-button @click="dialogVisible = false"
                >取 消</el-button
              >
            </div>
          </div>
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
      checkList: [""],
      input: "",
    };
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
    padding: 0 15px;
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
    height: 562px;
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
  .sear{
    position: relative;
    .searchBtn{
      position: absolute;
      right: 220px;
      top: 11px;
      height:60%;
      line-height: 0;
   
    }
  }
  .next {
    width: 84px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    .btns{
    display: flex;
    }
  }
  /deep/.el-dialog{
    width: 32%;
     .el-input{
      margin: 10px 0;
  width: 350px;
  height: 35px;
  .el-input__inner{
    width: 350px;
  height: 35px;
  background-color: #eee;
  border: none;
  font-size: 16px;
  }
}
  }
 /deep/ .el-dialog__body{
   padding: 6px 20px;
 }

 /deep/ .el-dialog__wrapper{
   overflow: hidden;
 }


}

</style>