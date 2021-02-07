const saveIndex = 'router-key'

// 保存路由状态下的currentIndex
export function saveRouter (value){
  sessionStorage.setItem(saveIndex, value)
}

// 获取当前路由的currentIndex
export function getRouter (){
  return sessionStorage.getItem(saveIndex)
}



//永久保存 需要手动清除浏览数据
// export function saveRouter (value){
//   localStorage.setItem(saveIndex, value)
// }

// export function getRouter (){
//   return localStorage.getItem(saveIndex)
// }