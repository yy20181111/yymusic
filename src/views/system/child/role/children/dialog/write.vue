<template>
  <div class="popover">
    <el-dialog title="编辑角色数据基本信息" :visible.sync="dialogVisible">
      <div class="ct-t">
        <div class="mt15">
          <h3>名称</h3>
          <div class="sear">
            <el-input v-model="input" placeholder="超级管理员"></el-input>
          </div>
          <h3>权限集合</h3>

          <div class="checkbox">
            <el-scrollbar style="height: 100%">
              <el-tree  :data="data"  :props="defaultProps"  @node-click="handleNodeClick"  ></el-tree>
              <a target="_blank" href="https://cn.bing.com/images/search?view=detailV2&ccid=h8qxnzdM&id=6CAA98F3B9179C913BA21668C4993AF7AC789665&thid=OIP.h8qxnzdMmTPi7Ok5mQlRNAHaE8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR87cab19f374c9933e2ece93999095134%3frik%3dZZZ4rPc6mcRoFg%26riu%3dhttp%253a%252f%252fpic270.nipic.com%252ffile%252f20200122%252f12304177_160418608000_2.jpg%26ehk%3dTulpAWJ0fE%252bJfpZP30pNzzf5jHPF3GrJaYcHMxM6%252b6k%253d%26risl%3d%26pid%3dImgRaw&exph=683&expw=1024&q=%e7%8c%aa%e5%9b%be&simid=607997843056889492&ck=1CAD9413382384E1A03B89EC47098A6D&selectedIndex=0&FORM=IRPRST&idpp=overlayview&ajaxhist=0" ><div class="dbz">陈达宏=>大笨猪!!!</div></a >
            </el-scrollbar>
          </div>
          <div class="next">
            <div class="btns">
              <el-button type="primary" @click="dialogVisible = false" >保 存</el-button >
              <el-button el-button @click="dialogVisible = false" >取 消</el-button >
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      input: "",
      data: [
        {
          label: "首页",
          children: [
            {
              label: "首页",
            },
          ],
        },
        {
          label: "数据查询",
          children: [
            {
              label: "数据查询1",
            },
            {
              label: "数据查询2",
            },
          ],
        },
        {
          label: "数据维护",
          children: [
            {
              label: "数据维护1",
            },
            {
              label: "数据维护2",
            },
          ],
        },
        {
          label: "统计报表",
          children: [
            {
              label: "统计报表1",
            },
            {
              label: "统计报表2",
            },
          ],
        },
        {
          label: "视频监控",
          children: [
            {
              label: "视频监控1",
            },
            {
              label: "视频监控2",
            },
          ],
        },
        {
          label: "什么鬼",
          children: [
            {
              label: "不知道",
            },
            {
              label: "我也不知道",
              children: [
                {
                  label: "我更不知道",
                },
              ],
            },
          ],
        },
        {
          label: "功能名称",
          children: [
            {
              label: "功能名称1",
            },
            {
              label: "功能名称2",
            },
          ],
        },
      ],

      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
.popover {
  h3 {
    font-size: 14px;
    color: grey;
  }
  .new {
    margin-left: 15px;
    padding: 0 15px;
    height: 30px;
    background-color: #1890ff;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    cursor: pointer;
  }
  .checkbox {
    width: 100%;
    height: 425px;
    margin: 10px 0 20px 0;
    border: 1px solid #eee;
    position: relative;
    .dbz {
      width: 389px;
      height: 50px;
      line-height: 50px;
      color: grey;
      opacity: 0.3;
      // margin: 10px auto;
      position: absolute;
      right: 70px;
      top: 0;
      font-size: 45px;
      font-weight: 900;
      &:hover {
        color: rgb(177, 182, 233);
        cursor: pointer;
        background-color: yellow;
        line-height: 50px;
      }
    }
    /deep/ .el-scrollbar__wrap {
      overflow-x: hidden;
    }
    /deep/ .el-tree {
      /deep/ .el-tree-node {
        padding: 10px;
        border-bottom: 1px solid #eee;
      }
    }
  }

  .next {
    width: 84px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    .btns {
      display: flex;
    }
  }
  /deep/.el-dialog {
    width: 32%;
    .el-input {
      margin: 10px 0;
      width: 350px;
      height: 35px;
      .el-input__inner {
        width: 350px;
        height: 35px;
        background-color: #eee;
        border: none;
        font-size: 16px;
      }
    }
  }
  /deep/ .el-dialog__body {
    padding: 6px 20px;
  }
  /deep/ .el-tree-node__content {
    height: 25px;
    background-color: #fff;
    &:hover {
      color: red;
    }
  }
}
</style>