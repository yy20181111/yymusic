<template>
  <div class="container"> 
    <div class="btcontain"> 
      <!--应用程序-->
      <div class="df"> 
        <div class="text">应用程序</div>
        <el-select class="select" v-model="value" placeholder="请选择" size="small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" >
          </el-option>
        </el-select>
      </div>

      <!-- 名称 -->
      <div class="df"> 
        <div class="text">名称</div>
        <el-select class="select" v-model="value2" placeholder="请输入" size="small">
          <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"  >
          </el-option>
        </el-select>
      </div>

        <!-- 信用代码 -->
      <div class="df">
        <div class="text">信用代码</div>
        <el-select class="select" v-model="value3" placeholder="请输入" size="small">
          <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" >
          </el-option>
        </el-select>
      </div>

      <div>
        <el-button type="primary" size="small" @click="$refs.newDialog.dialogVisible = true">新增</el-button>
        <el-button type="primary" size="small" @click="$refs.rela.maskShow = true">组织关系</el-button>
      </div>
    </div>
    <!-- table -->
    <div class="contentt">
      <el-table :data="tableData" style="width: 100% align:center header-align=center" >
        <el-table-column prop="icon" label="组织排序" width="250">
        </el-table-column>
        <el-table-column prop="name" label="名称" width="250">
        </el-table-column>
        <el-table-column prop="num" label="地址" width="250"> </el-table-column>
        <el-table-column prop="address" label="电话" width="250">
        </el-table-column>
        <el-table-column prop="login" label="统一社会信用代码" width="250">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="250">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
             <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>

    <Dialog ref="newDialog"></Dialog>
    <Rela ref="rela" ></Rela>
  </div>
</template>

<script>
import Dialog from '../dialog/dialog'
import Rela from '../dialog/rela'
export default {
  data() {
    return {
      tableData: [
        {
          icon: "01",
          name: "长沙水温事业部",
          num: "湖南长沙市88号",
          address: "18550894449",
          login: "124568",
          token: "2020-1-2",
          time: "2019-10-30",
        },
        {
          icon: "02",
          name: "长沙水温事业部",
          num: "湖南长沙市88号",
          address: "18550894449",
          login:  "124568",
          token:  "2055-4-4",
          time: "2019-10-30",
        },
        {
          icon: "03",
          name: "长沙水温事业部",
          num: "湖南长沙市88号",
          address: "18550894449",
          login:  "124568",
          token:  "2011-4-4",
          time: "2019-10-30",
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
      options2: [
        {
          value: "选项1",
          label: "名称1",
        },
        {
          value: "选项2",
          label: "名称2",
        },
        {
          value: "选项3",
          label: "名称3",
        },
        {
          value: "选项4",
          label: "名称4",
        },
        {
          value: "选项5",
          label: "名称5",
        },
      ],
      value2: "",
      options3: [
        {
          value: "选项1",
          label: "信用代码1",
        },
        {
          value: "选项2",
          label: "信用代码2",
        },
        {
          value: "选项3",
          label: "信用代码3",
        },
        {
          value: "选项4",
          label: "信用代码4",
        },
        {
          value: "选项5",
          label: "信用代码5",
        },
      ],
      value3: "",
    };
  },
  components: {
    Dialog,
    Rela
  }
};
</script>

<style lang="less" scoped>
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
  .btcontain{
    display: flex;
    align-items: center;
    border-bottom: 10px solid #F7F7F7;
    .df{
      display: flex;
    }
   .text{
      margin-left: 10px;
      line-height: 60px;
    }
    .select {
      margin: 0 20px;
      margin-top: 15px;
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
}
</style>