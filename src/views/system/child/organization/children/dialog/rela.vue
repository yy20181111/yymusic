<template>
  <div class="father" v-if="maskShow">
    <div class="child">
      <!-- 左边部分 -->
      <div class="ch-l">
        <div>
          <div>组织关系</div>
          <div class="checkbox">
            <el-scrollbar style="height: 100%">
              <el-tree node-key="id" :default-expanded-keys="[2, 3]" :data="data" :props="defaultProps" ></el-tree>
            </el-scrollbar>
          </div>
        </div>
      </div>

      <!-- 右边部分 -->
      <div class="ch-r">
        <div class="title">编辑组织数据基本信息</div>
        <div class="container">
          <div class="input">
            <div class="desc">名称</div>
            <el-input v-model="input" placeholder="请输入"></el-input>
          </div>
          <div class="input">
            <div class="desc">地址</div>
            <el-input v-model="input1" placeholder="请输入"></el-input>
          </div>
          <div class="input">
            <div class="desc">电话</div>
            <el-input v-model="input2" placeholder="请输入"></el-input>
          </div>
          <div class="input">
            <div class="desc">信用代码</div>
            <el-input v-model="input3" placeholder="请输入"></el-input>
          </div>
          <div class="input">
            <div class="desc">同级排序</div>
            <el-input v-model="input4" placeholder="请输入"></el-input>
          </div>
        </div>
        <div slot="footer" class="footer">
          <el-button type="primary" @click="maskShow = false">保 存</el-button>
          <el-button el-button @click="maskShow = false">取 消</el-button>
        </div>
      </div>
      <div class="btn" @click="maskShow = false">×</div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      input: "邵通市",
      input1: "湖南省长沙",
      input2: "0512-58888846",
      input3: "156452385",
      input4: "02",
      maskShow: false,
      data: [
        {
          id: 1,
          label: "召唤师峡谷",
          children: [
            {
              id: 2,
              label: "ap中单",
              children: [
                {
                  id: 3,
                  label: "法师",
                  children: [
                    { id: 4, label: "发条魔灵Orainna" },
                    { id: 5, label: "暗黑元首辛德拉" },
                  ],
                },
                {
                  id: 6,
                  label: "刺客",
                  children: [
                    { id: 7, label: "劫" },
                    { id: 8, label: "男刀" },
                  ],
                },
              ],
            },

            {
              id: 9,
              label: "抗压上单",
              children: [
                {
                  id: 10,
                  label: "爆发一套秒人型",
                  children: [
                    { id: 11, label: "锐萌萌" },
                    { id: 12, label: "武器?" },
                  ],
                },
                {
                  id: 13,
                  label: "恶心人&支援型",
                  children: [
                    { id: 14, label: "炼金" },
                    { id: 15, label: "慎" },
                  ],
                },
              ],
            },
            {
              label: "辅助support",
              children: [
                {
                  label: "进攻型",
                },
                {
                  label: "保护型",
                },
              ],
            },
            {
              label: "广东省",
              children: [
                {
                  label: "陈达宏",
                },
                {
                  label: "还有个舅舅",
                },
              ],
            },
            {
              label: "广西省",
              children: [
                {
                  label: "陈达宏老家",
                },
                {
                  label: "还有他爹妈",
                },
              ],
            },
            {
              label: "江苏省",
              children: [
                {
                  label: "我",
                },
                {
                  label: "!!!",
                },
              ],
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
  methods: {},
};
</script>

<style style lang="less" scoped>
.father {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(000, 000, 000, 0.6);
  z-index: 2520;
  .button {
    height: 30px;
    background-color: #1890ff;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    cursor: pointer;
    margin-top: 5px;
    margin-left: 5px;
    padding: 0 3px;
  }
  .child {
    width: 1060px;
    height: 780px;
    border: 1px solid #ccc;
    background: #fff;
    margin: 80px auto 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    .ch-l {
      width: 400px;
      border-right: 2px solid #e9e9e9;
      padding: 15px;

      .checkbox {
        width: 100%;
        height: 500px;
        margin: 10px 0 20px 0;
        border: 1px solid #e9e9e9;
        position: relative;
      
        /deep/ .el-scrollbar__wrap {
          overflow-x: hidden;
        }
        /deep/ .el-tree {
          /deep/ .el-tree-node {
            padding: 10px;
            border-bottom: 1px solid #eee;
          }

        }
        /deep/ .el-tree-node__content {
          height: 25px;
          background-color: #fff;
          &:hover {
            color: red;
            background-color: #eee;
           
          }
        }
      }
    }
    .ch-r {
      width: 660px;
      padding: 15px;
      background-color: #fff;
      .container {
        width: 100%;
        height: 280px;
        padding: 15px;
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .input {
          width: 48%;
          .desc {
            color: #a4a4a4;
            font-size: 14px;
            font-weight: 400;
          }
        }
        /deep/ .el-input__inner {
          background-color: #eee;
          padding-left: 15px;
          margin-top: 8px;
          width: 100%;
          border-radius: 2px;
        }
      }
    }
    .footer {
      width: 160px;
      margin: 0 auto;
      margin-top: 30px;
    }
    .btn {
      position: absolute;
      top: 2px;
      right: 15px;
      cursor: pointer;
      font-size: 24px;
      color: #959595;
    }
  }
}
</style>
