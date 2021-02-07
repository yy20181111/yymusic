<template>
  <div>
    <RecommendTheme :relistItem="relistItem" :title="'热门推荐'" />
    <div class="container">
      <HotRecommendItem v-for="item in ablumList" :key="item.id" :ablum="item"></HotRecommendItem>
    </div>
  </div>
</template>


<script>
// 1.导入请求
// 2. 导入组件
import RecommendTheme from "@/components/header/recommend-theme"
import HotRecommendItem from "@/components/item/hotrecommend-item";
// 3. 导入其他方法或者数据
import { recommendlist } from '@/utils/local-data'
import {mapState,mapActions} from 'vuex'
export default {
  data (){
    return {
      relistItem: recommendlist,
    }
  },
  components: {
    RecommendTheme,
    HotRecommendItem,
  },
  computed: {

    ...mapState('recommendStore', ['list']),
   
  
    //请求的数据放在ablumlist内
    ablumList (){
      //如果长度>8,截取前八个,长度<8就返回该list
      if(this.list.length > 8) {
       return this.list.slice(0, 8)
      } else {
        return this.list
      }
    }
  },
  mounted() {
    this.getHotRecommendData();
    
  },
  methods: {
     ...mapActions({
       getHotRecommendData:'recommendStore/getHotRecommendData'
     })
  },


};
</script>


<style lang="less" scoped>
.container {
  width: 689px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>