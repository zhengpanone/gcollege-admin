<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- 如果路由指向的页面组件是同一个，那么路由出口显示的页面组件不会被重新渲染 -->
      <router-view />
      <!-- 如果为路由出口定义一个唯一的key值，当组件被重用时组件会被重新渲染 -->
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  // 计算属性
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
