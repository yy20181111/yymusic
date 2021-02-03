import service from '../index'

// 登录
export function handleLogin (data) {
  return service({
    url: '/system/user/login',
    method: 'post',
    data
  })
}

// 注册
export function handleRegister (data) {
  return service({
    url: '/system/register',
    method: 'post',
    data
  })
}

// 个人信息
export function getUserInfo (id) {
  return service({
    url: '/system/searchUser/' + id,
    method: 'get',
  })
}

// export function getUserInfo (cid) {
//   return service({
//     url: '/system/searchUser',
//     method: 'get',
//     params: {
//       cid
//     }
//   })
// }

// export function getUserInfo (cid) {
//   return service({
//     url: '/system/searchUser?cid=' + cid,
//     method: 'get',

//   })
// }