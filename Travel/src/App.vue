<!--单文件组件:当文件以.vue为后缀名结尾的,存放的是Vue组件-->
<!--模板标签,组件的模板-->
<template>
  <div id="app">
    <!--显示当前路由地址对应的内容-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <!--路由被加载过一次后，就把内容放到内存中
    下一次重新进入路由后，不需要重新渲染组件，进行mounted钩子函数
    只需要从内存里把数据拿出来显示到页面上就可以，不需要每一次跳转页面，
    都进行ajax的请求,exclude="Detail",除了Detail组件(即每重新刷新页面，都重新请求一次ajax)
    -->
  </div>
</template>
<!--组件的逻辑-->
<script>
export default {
  name: 'App'
}
</script>
<!--组件的样式-->
<style>

</style>
