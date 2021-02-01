<template>
  <div class="container">
    <div class="btcontainer">
      <!-- 输入框 -->
      <div class="text">名称</div>
      <div class="input">
        <el-input v-model="input" placeholder="请输入"></el-input>
      </div>

      <!-- 弹出层按钮 -->
      <div>
        <el-button type="primary"  size="small" @click="$refs.Search.dialogVisible = true">编辑1</el-button >
        <el-button type="primary" size="small" @click="$refs.New.dialogVisible = true">编辑2</el-button >
      </div>
    </div>

    <div class="contentt">
      <el-table :data="tableData" style="width: 100% align:center header-align=center" >
        <el-table-column prop="icon" label="名称" width="220">
        </el-table-column>
        <el-table-column prop="name" label="角色数" width="220">
        </el-table-column>
        <el-table-column prop="num" label="权限数" width="220">
        </el-table-column>
        <el-table-column prop="address" label="用户数" width="220">
        </el-table-column>
        <el-table-column label="状态" width="220">
          <template slot-scope="scope">
            <el-button type="text" :style="scope.row.login | filterColor">{{ scope.row.login | filterStatus }}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="token" label="负责人" width="220">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="220">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页器 -->
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>

    <!-- 弹出层组件 -->
    <Search ref="Search"></Search>
    <New ref="New"></New>
  </div>
</template>

<script>
import Search from "../dialog/search";
import New from "../dialog/new";
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          icon: "和长治",
          name: "4",
          num: "10",
          address: "123456",
          login: 1, //已上线
          token: "欧阳",
        },
        {
          icon: "智慧社区",
          name: "3",
          num: "8",
          address: "0",
          login: 2, //开发中
          token: "令狐冲",
        },
        {
          icon: "有数有数",
          name: "4",
          num: "12",
          address: "45678",
          login: 3, // 已到期
          token: "东风不败",
        },
      ],
    };
  },
  components: {
    Search,
    New,
  },
  filters: {
    filterStatus(num) {
      let status = "";
      switch (num) {
        case 1:
          status = "已上线";
          break;
        case 2:
          status = "开发中";
          break;
        case 3:
          status = "已到期";
          break;
        default:
          status = "开发中";
      }
      return status;
    },
    filterColor(num) {
      let color = "";
      switch (num) {
        case 1:
          color = "color: #ff5777";
          break;
        case 2:
          color = "color: #1b1e9e";
          break;
        case 3:
          color = "color: #6ccacc";
          break;
        default:
          color = "color: #ff5777";
      }
      return color;
    },
  },
};
</script>

<style lang="less" scoped>
.container {
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
      margin-left: 10px;
    }
    .input {
      margin: 0 20px;
      /deep/ .el-input__inner {
        width: 150px;
        height: 35px;
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