
<template>
  <div class="popover">
    <!-- 新增按钮 -->
    <el-dialog title="新增组织数据基本信息" :visible.sync="dialogVisible">
      <div class="ct-t">
        <div class="mt15">
          <h3>名称(必填)</h3>
          <el-input v-model="input1" placeholder="请输入"></el-input>
        </div>
        <div class="mt15">
          <h3>地址(必填)</h3>
          <el-input v-model="input2" placeholder="请输入"></el-input>
        </div>
        <div class="mt15">
          <h3>电话(必填)</h3>
          <el-input v-model="input3" placeholder="请输入"></el-input>
        </div>
        <div class="mt15">
          <h3>信用代码(必填)</h3>
          <el-input v-model="input4" placeholder="请输入"></el-input>
        </div>

        <!-- 状态 -->
        <div class="mt15">
          <h3>所属组织单位</h3>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options" :key="item.value" :label="item.label" :value="item.value" >
            </el-option>
          </el-select>
        </div>
        <!-- 所属组织 -->
        <div class="mt15">
          <h3>同级排序</h3>
          <el-input v-model="input5" placeholder="请输入"></el-input>
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
      input5: "",
      options: [
        {
          value: "选项1",
          label: "组织1",
        },
        {
          value: "选项2",
          label: "组织2",
        },
        {
          value: "选项3",
          label: "组织3",
        },
      ],
      value: "",
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
/deep/ .el-input__inner {
  background-color: #eee;
}
</style>