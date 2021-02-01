<template>
  <div class="container">
    <div class="btcontainer df">
      <!--应用程序-->
      <div class="df">
        <div class="text">应用程序</div>
        <el-select class="select" v-model="value" placeholder="请选择" size="small" >
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" >
          </el-option>
        </el-select>
      </div>

      <!-- 输入框 -->
      <div class="df">
        <div class="text">名称</div>
        <div class="input">
          <el-input v-model="input" placeholder="请输入"></el-input>
        </div>
      </div>

      <!-- 弹出层按钮 -->
      <div>
        <el-button type="primary ml" size="small" @click="$refs.Dialog.dialogVisible = true" >新增1</el-button >
        <el-button type="primary" size="small" @click="$refs.Dialog2.dialogVisible = true" >新增2</el-button >
        <el-button type="primary" size="small" @click="$refs.Dialog3.dialogVisible = true"  >新增3</el-button >
        <el-button type="primary"  size="small" @click="$refs.Dialog4.dialogVisible = true" >新增4</el-button >
     
     
   
      </div>
    </div>

    <div class="contentt">
      <el-table
        :data="tableData"
        style="width: 100% align:center header-align=center"
      >
        <el-table-column prop="icon" label="用户名" width="350">
        </el-table-column>
        <el-table-column prop="name" label="应用名称" width="350">
        </el-table-column>
        <el-table-column prop="num" label="手机号" width="350">
        </el-table-column>

        <el-table-column prop="address" label="归属组织" width="350">
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="280">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>

    <!-- 弹出层组件 -->
    <Dialog ref="Dialog"></Dialog>
    <Dialog2 ref="Dialog2"></Dialog2>
    <Dialog3 ref="Dialog3"></Dialog3>
    <Dialog4 ref="Dialog4"></Dialog4>
  </div>
</template>

<script>
import Dialog from "../dialog/dialog";
import Dialog2 from "../dialog/dialog2";
import Dialog3 from "../dialog/dialog3";
import Dialog4 from "../dialog/dialog4";
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          icon: "欧阳壹号",
          name: "和长治",
          num: "18550894599",
          address: "xx事业局",
        },
        {
          icon: "欧阳二号",
          name: "和长治",
          num: "18550894599",
          address: "xx事业局",
        },
        {
          icon: "欧阳三号",
          name: "和长治",
          num: "18550894599",
          address: "xx事业局",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "和长治",
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
      value: "选项1",
    };
  },
  components: {
    Dialog,
    Dialog2,
    Dialog3,
    Dialog4,
  },
};
</script>

<style lang="less" scoped>
.container {
  .df {
    display: flex;
    align-items: center;
  }
  .ml {
    margin-left: 10px;
  }
  overflow: hidden;
  height: 800px;
  margin: 0 15px;
  background-color: #fff;
  .btcontainer {
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 10px solid #f7f7f7;
    .text {
      margin: 20px;
    }
    .select {
    }
    /deep/ .el-input {
      width: 199px;
      height: 32px;
      .el-input__inner {
        width: 200px;
        height: 32px;
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
