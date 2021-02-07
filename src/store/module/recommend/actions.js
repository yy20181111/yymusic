import { getBanner, getHotRecommend, getTopList, getNewAlbum, getArtist, getSongDetail } from '../../../api/request/recommend'
export default {
  // 获取轮播图
  async getBannerActions (context) {
    let res = await getBanner()
    context.commit('saveBanner', res.data.banners)
    return res
  },
  // 轮播图切换的时候的背景切换
  changeBannerBgActions (context, index) {
    context.commit('saveBannerBg', context.state.banner[index].imageUrl)
  },
  //hotRecommend八张图
  async getHotRecommendData (context) {
    let result = await getHotRecommend()
    context.commit('saveHotRecommend', result.data.result)
    return result
  },
  // 获取榜单的数据
  async getTopListActions ({ commit }, idx) {
    let res = await getTopList(idx)
    switch (idx) {
      case 0:
        commit("saveNewTitle", res.data.playlist)
        break;
      case 2:
        commit("saveSecTitle", res.data.playlist)
        break;
      case 3:
        commit("saveThirdTitle", res.data.playlist)
        break;
    }
    return res
  },

  //推荐的新碟上架
  async getNewAlbumActions ({ commit }, form) {
    const { limit, offset } = form
    let res = await getNewAlbum(limit, offset)
    commit('saveNewAlbumList', res.data.albums)
    return res
  },

  //入驻歌手
  async getArtistActions ({ commit }, form) {
    const { limit, offset } = form
    let res = await getArtist(limit, offset)
    commit('saveArtist', res.data.artists)
    return res
  },


  // 获取当前歌曲详情
  async getSongDetailActions ({commit}, ids) {
    let res = await getSongDetail(ids)
    console.log(res.data.songs[0]);
    commit('saveSongDetail', res.data.songs[0])
    return res
  }
}



