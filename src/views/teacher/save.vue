<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="讲师名称">
        <el-input v-model="teacher.name" />
      </el-form-item>
      <el-form-item label="讲师排序">
        <el-input-number
          v-model="teacher.sort"
          controls-position="right"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="讲师头衔">
        <el-select v-model="teacher.level" clearable placeholder="请选择">
          <!--
        数据类型一定要和取出的json中的一致，否则没法回填
        因此，这里value使用动态绑定的值，保证其数据类型是number
          -->
          <el-option :value="1" label="高级讲师" />
          <el-option :value="2" label="首席讲师" />
        </el-select>
      </el-form-item>
      <el-form-item label="入驻时间">
        <el-date-picker
          v-model="teacher.end"
          type="datetime"
          placeholder="选择截至时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>
      <el-form-item label="讲师资历">
        <el-input v-model="teacher.career" />
      </el-form-item>
      <el-form-item label="讲师简介">
        <el-input v-model="teacher.intro" :rows="10" type="textarea" />
      </el-form-item>
      <!-- TODO 讲师图像 -->
      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate"
        >保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { save, getTeacherById, updateTeacherById } from '@/api/teacher'
export default {
  name: 'TeacherCreate',
  data() {
    return {
      teacher: {
        name: '',
        sort: 0,
        level: 1,
        career: '',
        intro: '',
        avator: ''
      },
      saveBtnDisabled: false
    }
  },

  created() {
    if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id
      this.getInfo(id)
    }
  },

  methods: {
    saveOrUpdate() {
      this.saveBtnDisabled = true
      if (this.teacher.id) {
        this.updateTeacher()
      } else {
        this.saveTeacher()
      }
    },
    saveTeacher() {
      save(this.teacher).then(response => {
        this.$message({
          type: 'success',
          message: '添加成功'
        })
        this.$router.push({ path: '/teacher/list' })
      }).catch(error => {
        console.error('添加失败' + error)
      })
    },
    getInfo(id) {
      getTeacherById(id).then(response => {
        this.teacher = response.data.list
      })
    },
    updateTeacher() {
      updateTeacherById(this.teacher).then(response => {
        this.$message({
          type: 'success',
          message: '修改成功'
        })
        this.$router.push({ path: '/teacher/list' })
      })
    }

  }
}
</script>

<style lang="scss" scoped>
</style>
