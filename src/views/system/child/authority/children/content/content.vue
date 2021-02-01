<template>
  <div class="container">
    <div class="btncontainer">
       <!-- 下拉菜单 -->
<div class="df"> 
  <div class="text">应用程序</div>
    <el-select class="select" v-model="value" placeholder="请选择" size="small">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value" >
      </el-option>
    </el-select></div>


   <div>
        <el-button type="primary" size="small" @click="$refs.Dialog.dialogVisible = true">新增</el-button>
        <el-button type="primary" size="small" @click="$refs.DialogWrite.dialogVisible = true">编辑</el-button>
      </div>

    </div>
    <div class="contentt">
      <el-table
        :data="tableData"
        style="width: 100% align:center header-align=center"
      >
        <el-table-column prop="icon" label="图标" width="180">
        </el-table-column>
        <el-table-column prop="name" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="num" label="排序" width="180"> </el-table-column>

        <el-table-column prop="address" label="地址" width="180">
        </el-table-column>
        <el-table-column prop="login" label="是否需要登录" width="230">
        </el-table-column>
        <el-table-column prop="token" label="是否需要token" width="230">
        </el-table-column>
        <el-table-column prop="time" label="创建时间" width="230">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>


     <Dialog ref="Dialog"></Dialog>
<DialogWrite  ref="DialogWrite"></DialogWrite>
  </div>


</template>

<script>
import Dialog from '../dialog/dialog'
import DialogWrite from '../dialog/dialog-write'
export default {
  data() {
    return {
      tableData: [
        {
          icon: "★",
          name: "首页",
          num: "1",
          address: "/ueser",
          login: "是",
          token: "是",
          time: "2019-10-30",
        },
        {
          icon: "★",
          name: "功能名称",
          num: "2",
          address: "/ueser/it/desker",
          login:  "是",
          token:  "是",
          time: "2019-10-30",
        },
        {
          icon: "★",
          name: "数据查询",
          num: "3",
          address: "/ueser",
          login:  "是",
          token:  "是",
          time: "2019-10-30",
        },
      ], options: [
        {
          value: "选项1",
          label: "春末的南方城市",
        },
        {
          value: "选项2",
          label: "克兰河",
        },
        {
          value: "选项3",
          label: "冬妮娅",
        },
        {
          value: "选项4",
          label: "定西",
        },
        {
          value: "选项5",
          label: "热河",
        },
      ],
      value: "",  
    };
  },
   components:{
    Dialog,
    DialogWrite
  }
};
</script>

<style lang="less" scoped>
.container {
  overflow: hidden;
  height: 800px;
  margin: 0 15px;
  background-color: #fff;
  .df{
    display: flex;
    align-items: center;
  }
  .btncontainer{
      border-bottom: 10px solid #F7F7F7;
      height: 70px;
      display: flex;
      align-items: center;
     .text{
    margin-left: 10px;
  }
  .select {
    margin: 0 20px;
    /deep/ .el-input__inner {
      &:focus {
        border-color: #c0c4cc;
      }
      &:checked {
        border-color: #c0c4cc;
      }
    }
  }
  }
  .contentt {
    margin: 15px 15px;
    height: 223px;
    .el-table {
      border: 1px solid#EBEEF5;
      border-bottom: none;
    }
    .el-pagination {
      margin-top: 15px;
    }
  }
}
</style>
