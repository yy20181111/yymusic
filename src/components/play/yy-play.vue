<template>
  <div class="YYplay">
    <div class="play-list" style="display: flex; ">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">
          <div class="tr-banner">
            <div class="tr-l">
              <div class="playlist">播放列表(100)</div>
              <div class="btns">
                <div class="btn-l">
                  <div class=" iconfont">&#xe62d;</div>
                  <div class="collect">收藏全部</div>
                </div>
                <div class="btn-r">
                  <div class=" iconfont">&#xe63a;</div>
                  <div class="clear">清除</div>
                </div>
              </div>
            </div>
            <div class="tr-r">
              Lover (Remix)
              <div class="close" @click="show = !show">x</div>
            </div>
          </div>
          <div class="sing">
            <!-- list container -->
            <div class="list-container">
              <div class="list-item">
                <div class="name">{{ songName }}</div>
                <div class="singer">{{artist}}</div>
                <div class="time">{{songTime | filterTime}}</div>
                <div class="from iconfont">&#xe60e;</div>
              </div>
            </div>

            <!-- 右边歌词container -->
            <div class="words-container">
              <div class="what iconfont">&#xe7ca;</div>
              <p class="words-item">qwqqqqqqqwqwqw</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
 
    <div class="yy-play">
      <div class="container">
        <div class="cl-btns">
          <div class="iconfont">&#xe614;</div>

          <div class="iconfont-t" @click="change">

            <div class="iconfont t" v-show="on">&#xe630;</div>
            <div class="iconfont t" v-show="!on">&#xe7c7;</div>
          </div>


          <div class="iconfont">&#xe636;</div>
        </div>
        <div class="cm-play">
          <div class="songImg"><img :src="songImg" alt="" /></div>

          <div class="song-desc">
            <span class="songName">{{ songName }}</span>
            <span class="singer">{{artist}}</span>
            <!-- <div class="seekbar"> -->
            <!-- ui滑块 -->

            <el-slider
              class="seekbar"
              v-model="value3"
              :show-tooltip="false"
            ></el-slider>
          </div>
          <div class="playtime"><div class="t1">00:00</div>/<div class="t2">{{songTime | filterTime}}</div></div>
        </div>
        <div class="cr-btns">
          <div class="crb-l">
            <span class="iconfont">&#xe62d;</span>
            <span class="iconfont">&#xe615;</span>
          </div>
          <div class="line">|</div>
          <div class="crb-r">
            <span class="iconfont">&#xe60e;</span>
            <span class="iconfont">&#xe6da;</span>
            <div class="file" @click="show = !show">
              <span class="iconfont">&#xe724;</span>
              <div class="text">100</div>
            </div>
          </div>
          <div class="suo">♬</div>
        </div>
      </div>
    </div>
    <audio ref="audio" ></audio>
  </div>
</template>

<script> 
import { getMusicUrl } from '@/api/request/recommend'
import { mapActions, mapState } from 'vuex'
import { formatMinuteSecond } from '@/utils/format'
export default {
  data() {
    return {
      on: true,
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      show: true,
    }
  },

  mounted() {
    this.getSongDetailActions(1807537867)
    this.$refs.audio.src = this.getSongUrl(1807537867)
  },
  computed: {
    ...mapState('recommendStore', ['songDetail']),
    songName() {
      if (this.songDetail && this.songDetail.id) {
        return this.songDetail.al.name
      } else {
        return ''
      }
    },
    artist(){
       if (this.songDetail && this.songDetail.id) {
        return this.songDetail.ar[0].name
      } else {
        return ''
      }
    },
    songImg(){
        if (this.songDetail && this.songDetail.id) {
        return this.songDetail.al.picUrl
      } else {
        return ''
      }
    },
    songTime(){
         if (this.songDetail && this.songDetail.id) {
        return this.songDetail.dt
      } else {
        return ''
      }
    }
 
  },
  methods: {
    ...mapActions({
      getSongDetailActions: 'recommendStore/getSongDetailActions',
    }),
    // 获取歌曲url
    getSongUrl (id){
     return getMusicUrl(id)
    },

    change() {
      this.on = !this.on
      if(!this.on) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
      
    },
    formatTooltip(val) {
      return val / 100
    },
  },

  filters: {
    filterTime (time){
      return formatMinuteSecond(time)
    }
  }
}
</script>

<style lang="less" scoped>
.YYplay {
  position: relative;
  .play-list {
    element.style {
      margin-top: 0;
      height: 0;
    }
    .transition-box {
      position: fixed;
      z-index: 9999;
      bottom: 43px;
      right: 463px;
      margin-bottom: 10px;
      color: #ccc;
      width: 974px;
      height: 298px;
      background-color: #16191b;
      opacity: 0.96;
      .tr-banner {
        width: 974px;
        height: 40px;
        background-color: #181818;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        .tr-l {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 40px;
          width: 525px;
          .playlist {
          }
          .btns {
            display: flex;
            .btn-l {
              display: flex;
              &:hover {
                color: #e2e2e2;
                cursor: pointer;
              }
              .collect {
                margin-left: 5px;
                font-size: 14px;
                cursor: pointer;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
            .btn-r {
              display: flex;
              margin: 0 15px;
              &:hover {
                color: #e2e2e2;
                cursor: pointer;
              }
              .clear {
                margin-left: 5px;
                font-size: 14px;
                cursor: pointer;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
        .tr-r {
          width: 400px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          .close {
            position: absolute;
            top: 8px;
            right: 0;
            cursor: pointer;
          }
        }
      }
      .sing {
        display: flex;

        .list-container {
          width: 500px;
          height: 258px;
          margin-left: 30px;
          .list-item {
            color: #ccc;
            display: flex;
            align-items: center;
            width: 500px;
            height: 28px;
            font-size: 13px;
            cursor: pointer;
            .name {
              width: 266px;
              // height: 28px;
              &:hover {
                color: #fff;
              }
            }
            .singer {
              width: 80px;
              // height: 28px;
              margin-left: 62px;
              &:hover {
                text-decoration: underline;
                color: #fff;
              }
            }
            .time {
              width: 45px;
              margin-left: 13px;
              &:hover {
                color: #fff;
              }
            }
            .from {
              width: 16px;
              // height: 28px;
              margin-left: 15px;
              &:hover {
                color: #fff;
              }
            }
          }
        }
        .words-container {
          position: relative;
          width: 386px;
          height: 258px;
          margin-left: 50px;
          padding-top: 20px;
          .what {
            position: absolute;
            font-size: 30px;
            top: -3px;
            right: 8px;
            cursor: pointer;
            &:hover {
              color: #fff;
            }
          }
          .words-item {
            font-size: 14px;
            width: 354px;
            height: 32px;
            text-align: center;
            margin: 0 auto;
          }
        }
      }
    }
  }
  .yy-play {
    width: 100%;
    height: 53px;
    background-color: #2e2e2e;
    position: fixed;
    z-index: 999;
    left: 0;
    bottom: 0;
    // opacity: 0.95;
    border-top: 2px solid #000;
    .container {
      width: 982px;
      height: 53px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      .cl-btns {
        width: 137px;
        height: 37px;
        display: flex;
        align-items: center;

        .iconfont-t {
          display: flex;
        }
        .iconfont {
          font-size: 27px;
        }
        .iconfont {
          margin-right: 10px;
          cursor: pointer;
          color: #c0c0c0;
          &:hover {
            color: #ececec;
          }
        }
        .t {
          color: #ececec;
          font-size: 45px;
          &:hover {
            color: #fff;
          }
        }
      }
      .cm-play {
        width: 620px;
        height: 35px;
        display: flex;
        position: relative;
        font-size: 12px;
        margin-left: 20px;
        .songImg img {
          width: 35px;
          height: 35px;
          margin-right: 8px;
          border-radius: 3px;
        }
        .song-desc {
          height: 20px;
          position: relative;

          .songName,
          .singer {
            color: #e8e8e8;
            font-size: 12px;
            margin-right: 15px;
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
          .singer {
            color: #9b9b9b;
          }

          .seekbar {
            position: absolute;
            height: 30px;
            width: 485px;
            top: 10px;
            /deep/ .el-slider__runway {
              background: #191919;
              height: 6px;
              border-bottom: 1px solid #454444;
              .el-slider__bar {
                background: #c70c0c;
              }
              .el-tooltip.el-slider__button {
                border-width: 4px;
                border-color: #fff;
                background: #c70c0c;
              }
            }
          }
        }
        .playtime {
          display: flex;
          position: absolute;
          right: -27px;
          bottom: 0;
          color: #929292;
          .t1{
            color: #A1A1A1;
            margin-right: 5px;
          }
          .t2{
            margin-left: 5px;
          }
        }
      }
      .cr-btns {
        width: 210px;
        height: 30px;
        margin-left: 30px;
        display: flex;
        align-items: center;
        color: #878787;
        .crb-l {
          margin-left: 10px;
        }
        .line {
          font-size: 14px;
          padding: 0 10px;
          color: #414141;
        }
        .crb-r {
          display: flex;
          align-items: center;
          .file {
            position: relative;
            margin-left: 20px;
            height: 17px;
            width: 32px;
            border-radius: 5px;
            background-color: #1d1d1d;
            .text {
              font-size: 12px;
              margin-left: 6px;
              cursor: pointer;
            }
            span {
              position: absolute;
              left: -18px;
              bottom: -8px;
            }
          }
        }
        span {
          padding: 0 3px;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
          &:hover {
            color: #dcdcdc;
          }
        }
        .suo {
          text-align: center;
          font-size: 18px;
          font-weight: 700;
          border-bottom: none;
          position: absolute;
          width: 55px;
          top: -22px;
          right: 25px;
          background-color: #383838;
          height: 22px;
          transform: perspective(0.3em) rotateX(6deg);
          transform-origin: bottom;
          &:hover {
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
