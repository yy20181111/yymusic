export default {
  saveBanner (state, banners) {
    state.banner = banners
  },
  saveBannerBg (state, bannerBg) {
    state.bannerBg = bannerBg
  },
  saveHotRecommend (state, hotRecommend) {
    state.list = hotRecommend
  },
  saveNewTitle (state, newTitle) { // 保存新歌榜
    state.newTitle = newTitle
  },
  saveSecTitle (state, secTitle) { // 保存原创榜
    state.secTitle = secTitle
  },
  saveThirdTitle (state, thirdTitle) { // 保存飙升榜
    state.thirdTitle = thirdTitle
  },
  //推荐的新碟上架
  saveNewAlbumList (state, NewAlbum) {
    state.newAlbumList = NewAlbum
  },
  //入驻歌手
  saveArtist (state, Artist) {
    state.artistList = Artist
  },

  //歌曲详情
  saveSongDetail(state,songDetail){
    state.songDetail = songDetail
  }
}