import service from '../index'


// 注册
export function handleRegister(data){
  return service ({
    url:'/system/register',
    method:'post',
    data
  })
}

// 登录
export function handlelogin (data){
  return service({
    url:'/system/user/login',
    method:'post',
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

//获取所有用户信息
export function getAllUser (data) {
  return service({
    url: '/system/user',
    method: 'get',
    data
  })
}
