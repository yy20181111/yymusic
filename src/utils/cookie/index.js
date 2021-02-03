const adminToken = 'admin-token'
const adminId = 'admin-id'
// 保存token
export function setToken (value){
  localStorage.setItem(adminToken, value)
}

// 获取token
export function getToken(){
  return localStorage.getItem(adminToken)
}

// 保存id
export function setId (value){
  localStorage.setItem(adminId, value)
}

// 获取id
export function getId(){
  return localStorage.getItem(adminId)
}
