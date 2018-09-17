<template>
  <router-link to="/">
    <div class="header">
      城市选择
      <div class="iconfont left-icon">&#xe624;</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="less" scoped>
  @import '~styles/less.less';
  .header{
    position: relative;
    overflow: hidden;
    line-height:.86rem;
    text-align: center;
    font-size: .32rem;
    background: @bgColor;
    color:#fff;
    .left-icon{
      position: absolute;
      top: 0;
      left: 0;
      width: 0.64rem;
      text-align: center;
      font-size: 0.4rem;
    }
  }
</style>
