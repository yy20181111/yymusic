<template>
  <div class="containerAll">
    <!-- App部分 -->
    <div class="btcontainer">
      <!-- 输入框 -->
      <div class="text">用户名</div>
      <div class="input">
        <el-input v-model="input" placeholder="请输入"></el-input>
      </div>

      <div>
        <el-button type="primary" size="small" @click="$refs.DialogNew.dialogVisible = true" >新增1</el-button >
        <el-button type="primary" size="small" @click="$refs.DialogWrite.dialogVisible = true" >新增2</el-button >
        <el-button type="primary" size="small" @click="$refs.Initialize.open6()" >新增3</el-button >
      </div>
    </div>

    <div class="container">
      <div class="contentt">
        <el-table  :data="tableData"  style="width: 100% align:center header-align=center"  >
          <el-table-column prop="icon" label="真实姓名" width="200">
          </el-table-column>
          <el-table-column prop="name" label="用户名" width="200">
          </el-table-column>
          <el-table-column prop="num" label="手机号" width="200">
          </el-table-column>
          <el-table-column prop="address" label="邮箱" width="200">
          </el-table-column>
          <el-table-column prop="login" label="状态" width="200">
          </el-table-column>
          <el-table-column prop="token" label="注册时间" width="200">
          </el-table-column>
          <el-table-column prop="time" label="创建时间" width="200">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="180">
            <template slot-scope="scope">
              <el-button  @click="handleClck(scope.row)"  type="text"  size="small" >修改</el-button >
              <el-button type="text" size="small">恢复密码</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页器 -->
        <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
      </div>
    </div>

    <DialogNew ref="DialogNew"></DialogNew>
    <DialogWrite ref="DialogWrite"></DialogWrite>
    <Initialize ref="Initialize"></Initialize>
  </div>
</template>

<script>
import DialogNew from "../dialog/new";
import DialogWrite from "../dialog/write";
import Initialize from "../dialog/initialize";
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          icon: "欧阳太大",
          name: "ciyi",
          num: "138451",
          address: "123@qq.com",
          login: "使用中",
          token: "2020-1-2",
          time: "2019-10-30",
        },
        {
          icon: "李时珍",
          name: "cdh",
          num: "654233",
          address: "3453@qq.com",
          login: "使用中",
          token: "2055-4-4",
          time: "2019-10-30",
        },
        {
          icon: "张通天",
          name: "lx",
          num: "885642",
          address: "ffg23@qq.com",
          login: "使用中",
          token: "2011-4-4",
          time: "2019-10-30",
        },
      ],
    };
  },
  components: {
    DialogNew,
    DialogWrite,
    Initialize,
  },
};
</script>

<style lang="less" scoped>
.containerAll {
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
  .container {
    overflow: hidden;
    height: 800px;
    margin: 0 15px;
    background-color: #fff;
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
}
</style>