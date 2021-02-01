<template>
  <div class="container">
    <div class="btncontainer">
      <div class="df">
        <div class="text">应用程序</div>
        <!-- 下拉菜单 -->
        <el-select class="select" v-model="value" placeholder="请选择" size="small" >
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"  >
          </el-option>
        </el-select>
      </div>

      <div>
        <el-button type="primary" size="small" @click="$refs.Dialog.dialogVisible = true">新增1</el-button >
        <el-button type="primary" size="small" @click="$refs.Write.dialogVisible = true">新增2</el-button >
        <el-button  type="primary" size="small" @click="$refs.New.dialogVisible = true">新增3</el-button >
      </div>
    </div>

    <div class="contentt">
      <el-table :data="tableData" style="width: 100% align:center header-align=center" >
        <el-table-column prop="icon" label="名称" width="300">
        </el-table-column>
        <el-table-column prop="name" label="权限集合" width="950">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="500">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small" >修改</el-button >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>

    <Dialog ref="Dialog"></Dialog>
    <Write ref="Write"></Write>
    <New ref="New"></New>
  </div>
</template>

<script>
import Dialog from "../dialog/dialog";
import Write from "../dialog/write";
import New from "../dialog/new";
export default {
  data() {
    return {
      tableData: [
        {
          icon: "超级管理员",
          name:
            "首页-数据查询-数据维护-统计报表-基础信息-系统管理首页-数据查询-数据维护-统计报表-基础信息-系统管理",
        },
        {
          icon: "执行人员",
          name:
            "首页-数据查询-数据维护-统计报表-基础信息-系统管理首页-数据查询-数据维护-统计报表-基础信息-系统管理",
        },
        {
          icon: "行政执行人员",
          name:
            "首页-数据查询-数据维护-统计报表-基础信息-系统管理首页-数据查询-数据维护-统计报表-基础信息-系统管理",
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
    Write,
    New,
  },
};
</script>

<style lang="less" scoped>
.container {
  overflow: hidden;
  height: 800px;
  margin: 0 15px;
  background-color: #fff;
  .df {
    display: flex;
  }
  .btncontainer {
    display: flex;
    align-items: center;
    border-bottom: 10px solid #f7f7f7;
    height: 70px;
    .text {
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