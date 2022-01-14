import request from '@/utils/request'

export default {
// 讲师列表(条件分页查询)
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      baseURL: 'http://localhost:8091/gcollege-dev',
      url: `/admin/edu/teacher/list/${current}/${limit}`,
      method: 'get',
      data: teacherQuery
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
export const addTeacher = (teacher) => {
  return request({
    baseURL: 'http://localhost:8091/gcollege-dev',
    url: `/admin/edu/teacher/addTeacher`,
    method: 'post',
    data: teacher
  })
}

export const getTeacherById = (id) => {
  return request({
    baseURL: 'http://localhost:8091/gcollege-dev',
    url: `/admin/edu/teacher/${id}`,
    method: 'get'
  })
}

export const updateTeacherById = (teacher) => {
  return request({
    baseURL: 'http://localhost:8091/gcollege-dev',
    url: `/admin/edu/teacher/update`,
    method: 'put',
    data: teacher
  })
}
