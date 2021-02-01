<template>
  <div class="popover">
   

    <el-dialog  title="新增用户数据基本信息" :visible.sync="dialogVisible"  >

      <div class="ct-t">

        <div class="mt15">
          <h3>真实姓名(必填)</h3>
          <el-input v-model="input1" placeholder="请输入"></el-input>
        </div>
       
       <div class="mt15">
          <h3>用户名(必填)</h3>
          <el-input v-model="input2" placeholder="请输入"></el-input>
        </div>

          <div class="mt15">
          <h3>手机号(必填)</h3>
          <el-input v-model="input3" placeholder="请输入"></el-input>
        </div>

        
          <div class="mt15">
          <h3>邮箱(必填)</h3>
          <el-input v-model="input4" placeholder="请输入"></el-input>
        </div>
     
        <!-- 状态 -->
        <div class="mt15">
          <h3>状态</h3>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" >
            </el-option>
          </el-select>


        </div>
        <!-- 是否需要token -->
        <div class="mt15 ml15">
          <h3>归属组织</h3>
          <el-select v-model="value2" placeholder="请选择">
            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" >
            </el-option>
          </el-select>
        </div>
        
     
      </div>
     
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" >保 存</el-button >
        <el-button el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,

      input1: "",
      input2: "",
      input3: "",
      input4: "",
      options: [
        {
          value: "选项1",
          label: "使用中",
        },
        {
          value: "选项2",
          label: "离线",
        },
        {
          value: "选项3",
          label: "隐身",
        },
      ],
      value: "选项1",
      options2: [
        {
          value: "选项1",
          label: "昆明熊月",
        },
        {
          value: "选项2",
          label: "峡谷祖安",
        },
        {
          value: "选项3",
          label: "嚎哭深渊",
        },
      ],
      value2: "选项1",

    };
  },
};
</script>

<style lang="less" scoped>
.popover {
  
  .ml15 {
    margin-left: 15px;
  }
  .new {
    width: 70px;
    height: 30px;
    background-color: #1890ff;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    cursor: pointer;
  }
  .ct-t {
    margin-bottom: 30px;
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: -30px;
    .mt15 {
      margin-top: 15px;
      width: 49%;
      h3 {
        font-size: 14px;
        line-height: 30px;
      }
      /deep/.el-select {
        width: 100%;
      }
    }
  
  }

}
/deep/ .el-dialog__footer {
  display: flex;
  justify-content: center;
  margin-top: -20px;
}
/deep/ .el-input__inner{
  background-color: #eee;
}
</style>