<template>
  <div class="detailList">
    <div class="itemTitle"
         v-for="(item,index) of list"
         :key="index"
    >
      <span class="itemTitleIcon"></span>
      {{item.title}}
      <div v-if="item.children" class="itemChildren">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="less">
  @import '~styles/less.less';
  .itemTitle{
    line-height: .8rem;
    font-size: .32rem;
    padding: 0 .2rem;
   ::after{border-color: #ccc}
    .itemChildren{
      padding:0 .2rem;
    }
  }
  .itemTitleIcon{
    position: relative;
    left: .06rem;
    top: .06rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  }
</style>
