<template>
  <section class="pic">
    <ul>
      <li class="iconPosition">
        <i class="iconfont">&#xe6d1;</i>
        <span>定位失败</span>
      </li>
      <li>
        <i class="iconfont">&#xe642;</i>
        <span>玩水季</span>
      </li>
    </ul>
    <ul class="mpIcon">
      <li class="iconPosition"
          style="background:url(http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png) center center no-repeat;background-size:auto 100%;"
      ></li>
      <li style="background:url(http://img1.qunarzz.com/piao/fusion/1809/13/d6a5711a7dd07402.png) center center no-repeat;background-size:auto 100%;"></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HomePicture'
}
</script>

<style  lang="less" scoped>
  @import '~styles/less.less';
  .pic{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom:35%;
    ul {
      position: relative;
      overflow: hidden;
      float: left;
      width: 100%;
      height: 0;
      padding-bottom: 10%;
      background: #fff;
      li {
        overflow: hidden;
        float: left;
        width: 50%;
        height: .8rem;
        text-align: center;
        line-height: .8rem;
      }
    }
    .iconPosition{
      border-right: 1px solid #ccc;
      .box-sizing();
    }
    .mpIcon {
      margin: .2rem 0;
      position: relative;
      overflow: hidden;
      float: left;
      width: 100%;
      height: 0;
      padding-bottom: 20%;
      li {
        overflow: hidden;
        float: left;
        width: 50%;
        height: 1.5rem;
      }
    }
  }
</style>
