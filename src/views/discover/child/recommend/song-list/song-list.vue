<template>
  <div>
  <RecommendTheme :title="'榜单'" />
  <div class="container">
    <div class="list"><SongList :title="thirdTitle" :songList="thirdSongList"></SongList></div>
    <div class="list"><SongList :title="newTitle" :songList="newSongList"></SongList></div>
    <div><SongList :title="secTitle" :songList="secSongList"></SongList></div>
  </div>
   
  </div>
</template>

<script>
import RecommendTheme from '@/components/header/recommend-theme'

import { mapState, mapGetters, mapActions } from 'vuex'
import SongList from '@/components/item/song-list-item'
export default {
  data() {
    return {
    }
  },
  components: {
    RecommendTheme,
    SongList
  },
  mounted() {
    this.getTopListActions(0)
    this.getTopListActions(2)
    this.getTopListActions(3)
  },
  computed: {
    ...mapGetters('recommendStore', ['newSongList', 'secSongList', 'thirdSongList']),
    ...mapState('recommendStore', ['newTitle', 'secTitle', 'thirdTitle'])
  },
  methods: {
    ...mapActions({
      getTopListActions: 'recommendStore/getTopListActions'
    })
  },
}
</script>

<style lang="less" scoped>
.container {
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  margin-bottom:40px;
  display: flex;
  .list{
    border-right: 1px solid #ccc;
  }
}
</style>