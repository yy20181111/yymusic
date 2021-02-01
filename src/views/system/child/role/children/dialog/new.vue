<template>
  <div class="popover">
 
    <el-dialog title="编辑角色数据基本信息" :visible.sync="dialogVisible">
      <div class="ct-t">
        <div class="mt15">
          <h3>名称</h3>
          <div class="sear">
            <el-input v-model="input" placeholder="请输入"></el-input>
          </div>
          <h3>权限集合</h3>
          <div class="checkbox">
            <el-scrollbar style="height:100%">
              <el-tree  :data="data2" show-checkbox node-key="id" :default-expanded-keys="[0]" :default-checked-keys="[0]" :props="defaultProps">
              </el-tree>
            </el-scrollbar> 
          </div>
          <div class="next">
            <div class="btns">
              <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
              <el-button el-button @click="dialogVisible = false">取 消</el-button>
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
      input: "",
     data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 15,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        },{
          id: 4,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        },{
          id: 25,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        },{
          id: 35,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
 
};
</script>

<style lang="less" scoped>
.popover {
  h3 {
    font-size: 14px;
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
  .checkbox {
    width: 100%;
    height: 425px;
    margin: 10px 0 20px 0;
    border: 1px solid #eee;
    .dbz{
      width:120px;
      height: 50px;
      color: blue;
      margin: 10px auto;
      font-size: 28px;
      font-weight: 900;
      &:hover{
        color: red;
        cursor: pointer;
      }
    }
       /deep/ .el-scrollbar__wrap{
      overflow-x: hidden;
    }
    /deep/ .el-tree{
      /deep/ .el-tree-node{
        padding: 10px;
        border-bottom: 1px solid #eee;
     
      }
    }
  }

  .next {
    width: 84px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    .btns {
      display: flex;
    }
  }
  /deep/.el-dialog {
    width: 32%;
    .el-input {
      margin: 10px 0;
      width: 350px;
      height: 35px;
      .el-input__inner {
        width: 350px;
        height: 35px;
        background-color: #eee;
        border: none;
        font-size: 16px;
      }
    }
  }
  /deep/ .el-dialog__body {
    padding: 6px 20px;
  }
  /deep/ .el-tree-node__content{
    height: 25px;
    background-color: #fff;
    &:hover{
      color: red;
    }
  }
  /deep/  .el-tree-node__content{
    position: relative;
 .el-checkbox{
  position: absolute;
  right: 0;
  top: 0;
  }
  

  }
}
</style>