<template>
  <div class="yy-footer">
    <div class="container">
      <div class="container-left">
        <div class="cl-o">
          <div class="cl-oItem"
               v-for="item in footList"
               :key='item'>{{item}}<span>|</span></div>
        </div>
        <div class="cl-t">
          <span class="o">网易公司版权所有©1997-2021</span>
          <span class="t">杭州乐读科技有限公司运营：</span>
          <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"><span class="three">浙网文[2018]3506-263号</span></a>
        </div>
        <div class="cl-thr">
          <span class="o">违法和不良信息举报电话：0571-89853516</span>
          <span class="t">举报邮箱：</span>
          <a class="three"
             href="mailto:ncm5990@163.com">ncm5990@163.com</a>
        </div>
        <div class="cl-four">
          <span class="o">粤B2-20090191-18 工业和信息化部备案管理系统网站</span>
          <span class="icon">☹</span><a class="t"
             href="#">浙公网安备 33010902002564号</a>
        </div>
      </div>
      <div class="container-right">
        <div class="cr-item" v-for='item in iconList' :key='item.index'> 
          <img class="cr-img" :src="item.img" alt="">
          <div class="cr-desc">{{item.desc}}</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footList: [
        '服务条款',
        '隐私条款',
        '儿童隐私政策',
        '版权投诉指引',
        '意见反馈',
      ],
      iconList:[{
        desc:'cnm',
        img:require('../../assets/images/erji.png')
      },{
        desc:'qwer',
        img:require('../../assets/images/erji.png')
      },{
        desc:'btn',
        img:require('../../assets/images/erji.png')
      },{
        desc:'en?',
        img:require('../../assets/images/erji.png')
      },{
        desc:'hahaha',
        img:require('../../assets/images/erji.png')
      },]
    }
  },
}
</script>

<style lang="less" scoped>
.yy-footer {
  width: 100%;
  height: 180px;
  border-top: 1px solid #c3c3c3;
  .container {
    width: 982px;
    height: 180px;
    margin: 0 auto;
   
    display: flex;
    justify-content: space-between;
    .container-left {
      width: 520px;
      height: 115px;
      font-size: 12px;
      .cl-o {
        display: flex;
        margin-top: 15px;
        color: #9999b0;
        .cl-oItem {
          font-size: 12px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
          span {
            padding: 0 15px;
          }
        }
      }
      .cl-t {
        margin-top: 5px;
        .t {
          margin-left: 20px;
        }
      }
      .cl-thr {
        margin-top: 5px;
        .t {
          margin-left: 20px;
        }
      }
      .cl-four {
        margin-top: 5px;
        .icon {
          color: red;
          font-weight: 700;
          padding: 0 5px;
        }
      }
    }
    .container-right {
      margin-right: 10px;
      width: 440px;
      height: 115px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .cr-item {
        width: 60px;
        height: 70px;
        .cr-img{
          width: 60px;
          height:50px;
          cursor: pointer;
        }
        .cr-desc{
          width: 60px;
          height: 50px;
          color: #CBCBCB;
          text-align: center;
          line-height: 20px;
        }
      }
    }
  }
}
</style>