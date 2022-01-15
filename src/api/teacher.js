import request from '@/utils/request'

export default {
  // 讲师列表(条件分页查询)
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      baseURL: 'http://localhost:8091/gcollege-dev',
      url: `/admin/edu/teacher/list/${current}/${limit}`,
      method: 'get',
      params: teacherQuery
    })
  },
  deleteTeacher(id) {
    return request({
      baseURL: 'http://localhost:8091/gcollege-dev',
      url: `/admin/edu/teacher/delete/${id}`,
      method: 'delete'
    })
  }
}
// 保存Teacher
export const save = (teacher) => {
  return request({
    baseURL: 'http://localhost:8091/gcollege-dev',
    url: `/admin/edu/teacher/save`,
    method: 'post',
    data: teacher
  })
}
// 根据ID查找Teacher
export const getTeacherById = (id) => {
  return request({
    baseURL: 'http://localhost:8091/gcollege-dev',
    url: `/admin/edu/teacher/${id}`,
    method: 'get'
  })
}
// 根据ID修改Teacher
export const updateTeacherById = (teacher) => {
  return request({
    baseURL: 'http://localhost:8091/gcollege-dev',
    url: `/admin/edu/teacher/update`,
    method: 'put',
    data: teacher
  })
}
