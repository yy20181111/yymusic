<template>
  <div class="popover">
    <el-dialog title="编辑应用程序数据基本信息" :visible.sync="dialogVisible">
      <div class="ct-t">
        <div class="mt15">
          <h3>名称</h3>
          <el-input v-model="input1" placeholder="请输入"></el-input>
        </div>

        <div class="mt15">
          <h3>角色数</h3>
          <el-input v-model="input2" placeholder="请输入"></el-input>
        </div>

        <div class="mt15">
          <h3>权限数</h3>
          <el-input v-model="input3" placeholder="请输入"></el-input>
        </div>

        <div class="mt15">
          <h3>用户数-实时自动更新</h3>
          <el-input v-model="input4" placeholder="请输入"></el-input>
        </div>

        <div class="mt15">
          <h3>状态</h3>
          <el-select v-model="value" placeholder="请选择">
            <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value" >
            </el-option>
          </el-select>
        </div>

        <div class="mt15">
          <h3>负责人</h3>
          <el-input v-model="input5" placeholder="请输入"></el-input>
        </div>

        <div class="mt15">
          <h3>负责人联系方式</h3>
          <el-input v-model="input6" placeholder="请输入"></el-input>
        </div>

        <div class="mt15">
          <h3>开始时间</h3>
          <el-input v-model="input7" placeholder="2020-1-1"></el-input>
        </div>

        <div class="mt15">
          <h3>上线时间</h3>
          <el-input v-model="input8" placeholder="2020-1-1"></el-input>
        </div>

        <div class="mt15">
          <h3>到期时间</h3>
          <el-date-picker v-model="value3" type="date" placeholder="未到期">
          </el-date-picker>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">保 存</el-button >
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
      input1: "和长治",
      input2: "4",
      input3: "10",
      input4: "12345",
      input5: "欧阳",
      input6: "18555554569",
      input7: "",
      input8: "",

      options: [
        {
          value: "选项1",
          label: "已上线",
        },
        {
          value: "选项2",
          label: "开发中",
        },
        {
          value: "选项3",
          label: "离线",
        },
      ],
      value: "选项1",
      value1: "",
      value2: "",
      value3: "",
    };
  },
};
</script>

<style lang="less" scoped>
.popover {
  .new {
    margin-left: 10px;
  }
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
      /deep/ .el-date-editor {
        width: 100%;
        position: relative;
        /deep/ .el-input__icon {
          font-size: 26px;
          color: grey;
          position: absolute;
          right: -430px;
          bottom: 0;
        }
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
  padding-left: 15px;
}
</style>