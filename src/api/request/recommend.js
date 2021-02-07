import service from '../index'

// 获取轮播的数据
export function getBanner () {
  return service({
    url: '/banner',

  })
}

// 获取热门推荐的数据
export function getHotRecommend () {
  return service({
    url: '/personalized',
  })
}

// 获取榜单
export function getTopList (idx) {
  return service({
    url: "/top/list",
    params: {
      idx
    }
  })
}

//获取推荐的新碟上架
export function getNewAlbum (limit, offset) {
  return service({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}

//获取入驻歌手
export function getArtist (limit, offset) {
  return service({
    url: "/artist/list",
    params: {
      limit,
      offset
    }
  })
}

// 获取点击当前的歌曲
export function getSongDetail (ids) {
  return service({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

// 获取歌曲url
export function getMusicUrl (id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
