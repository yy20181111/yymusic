import service from '../index'

// 获取轮播的数据
export function getBanner () {
  return service({
    url: '/banner',
  })
}