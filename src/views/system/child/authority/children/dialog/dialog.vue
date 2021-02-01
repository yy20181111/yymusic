<template>
  <div class="popover">
  
    <el-dialog  title="新增权限数据基本信息" :visible.sync="dialogVisible"  >
      <div class="ct-t">
        <div class="mt15">
          <h3>名称</h3>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <!-- 地址 -->
        <div class="mt15 ml15">
          <h3>地址</h3>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options"  :key="item.value" :label="item.label"  :value="item.value"> </el-option>
            </el-select>
        </div>
        <!-- 是否需要登录 -->
        <div class="mt15">
          <h3>是否需要登录</h3>
          <el-select v-model="value2" placeholder="请选择">
            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" >
            </el-option>
          </el-select>
        </div>
        <!-- 是否需要token -->
        <div class="mt15 ml15">
          <h3>是否需要token</h3>
          <el-select v-model="value3" placeholder="请选择">
            <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" >
            </el-option>
          </el-select>
        </div>
        <!-- 排序 -->
        <div class="mt15">
          <h3>排序</h3>
          <el-input v-model="input2" placeholder="请输入你想要的序位号"></el-input>
        </div>
        <div class="mt15 desc-num">当前共有三项权限</div>
      </div>
      <div class="ct-b">
          <div class="text">权限图标</div>
          <div class="content">
            <div class="ct-l">
              <div class="ple">请上传</div>

                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"  :show-file-list=false :limit="3">
  <el-button size="small" type="primary">上传</el-button>
</el-upload>

            </div>
            <div class="ct-r">
              <p>仅支持---</p>
              <p>不得超过------</p>
            </div>
          </div>

      </div>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" >确 定</el-button >
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
      input: "",
      input2: "",
      options: [
        {
          value: "选项1",
          label: "南京",
        },
        {
          value: "选项2",
          label: "北京",
        },
        {
          value: "选项3",
          label: "上海",
        },
      ],
      value: "",
      options2: [
        {
          value: "选项1",
          label: "是",
        },
        {
          value: "选项2",
          label: "否",
        },
        
      ],
      value2: "选项1",

      options3: [
        {
          value: "选项1",
          label: "是",
        },
        {
          value: "选项2",
          label: "否",
        },
      ],
      value3: "选项1",
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
    .desc-num {
      height: 30px;
      margin-top: 53px;
      // margin-left: 20px;
    }
  }
  .ct-b {
    margin-top: 20px;
    width: 100%;
    height:150px;
    background-color: #eee;
    overflow: hidden;
    border-radius: 3px;
    .text{
      font-size:16px;
     margin: 16px 0 15px 15px;
    }
    .content{
        display: flex;
       
        margin-left: 15px;
        border-radius: 5px;
        .ct-l{
          display: flex;
           width: 300px;
        height: 50px;
        background-color: #fff;

          .ple{
            height: 40px;
            line-height: 50px;
            margin-left: 25px;
          }
          .el-button{
            width: 90px;
            height: 40px;
            font-size: 16px;
            margin-left: 140px;
            margin-top: 5px;
          }

        }
        .ct-r{
          color: red;
          margin-left: 15px;
          margin-top: 2px;
          font-size: 14px;
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