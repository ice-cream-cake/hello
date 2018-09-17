<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="headerAbs"
      v-show="showAbs"
    >
      <div class="iconfont left-icon">&#xe624;</div>
    </router-link>
    <div
      class="headerFixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link  to="/" >
        <div class="iconfont left-fixed-icon">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="less">
  @import '~styles/less.less';
  .headerAbs{
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    border-radius: .4rem;
    background: rgba(0,0,0,0.6);
    .left-icon{
      line-height: .8rem;
      text-align: center;
      font-size: 0.4rem;
      color:#fff;
    }
  }
  .headerFixed{
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: .86rem;
    line-height:.86rem;
    text-align: center;
    font-size: .32rem;
    background: @bgColor;
    color:#fff;
    .left-fixed-icon{
      position: absolute;
      top: 0;
      left: 0;
      width: 0.64rem;
      text-align: center;
      font-size: 0.4rem;
    }
  }
</style>
