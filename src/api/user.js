import request from '@/utils/request'

export function login(data) {
  return request({
    baseURL: 'http://localhost:8091/gcollege-dev',
    url: '/admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    baseURL: 'http://localhost:8091/gcollege-dev',
    url: '/admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    baseURL: 'http://localhost:8091/gcollege-dev',
    url: '/admin/user/logout',
    method: 'post'
  })
}
