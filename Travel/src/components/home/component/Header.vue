<template>
  <section class="header">
    <section class="header-left">
      <div class="iconfont left-icon">&#xe624;</div>
    </section>
    <section class="header-input">
      <i class="iconfont">&#xe632;</i>
      输入城市/景点/游玩主题
    </section>
    <router-link to="/city">
      <section class="header-right">
        {{this.$store.state.city}}
        <i class="iconfont down-icon">&#xe64a;</i>
      </section>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="less" scoped>
  @import '~styles/less.less';
   .header{
     display: flex;
     line-height:.86rem;
     background: @bgColor;
     color:#fff;
     .left-icon{
       text-align: center;
       font-size: 0.4rem;
     }
     .header-left{
       height: .64rem;
       float: left;
     }
     .header-right{
       min-width: 1.04rem;
       padding:0 .1rem;
       float: right;
       text-align: center;
       color:#fff;
       .down-icon{
         font-size: 0.25rem;
       }
     }
     .header-input{
       flex:1;
       height: .6rem;
       line-height: .6rem;
       padding-left: 0.2rem;
       margin: .12rem 0 0 .2rem;
       background: #fff;
       color:#ccc;
       border-radius: .1rem;
     }
   }
</style>
