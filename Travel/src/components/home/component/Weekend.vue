<template>
  <section class="weekend">
    <div class="weekHeader">
      <span class="weekTitle">周末去哪儿</span>
    </div>
    <ul>
      <li class="weekItem" v-for="data of weekLists" :key="data.id">
        <div class="weekItem-img-wrapper">
          <img :src="data.imgUrl">
        </div>
        <div class="weekWord">
          <p class="weekItem-name">{{data.name}}</p>
          <p class="weekItem-desc">{{data.desc}}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekLists: Array
  }
}
</script>

<style scoped lang="less">
  @import '~styles/less.less';
  .weekend{
    background: #fff;
    .weekHeader {
      position: relative;
      .box-sizing();
      padding: .24rem 0 .2rem;
      background: #f5f5f5;
      .recomTitle {
        display: inline-block;
        height: 0.44rem;
        font-size: .32rem;
        line-height: .44rem;
      }
    }
    li {
      margin-bottom: .1rem;
      .weekItem-img-wrapper{
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 35%;
        img{
          width: 100%;
        }
      }
      .weekWord{
        position: relative;
        padding: .14rem .2rem .2rem .2rem;
        p{
          overflow: hidden;
          padding-right: 1.4rem;
          color:#212121;
          font-size: .28rem;
          line-height: .48rem;
          .textHidden();
        }
      }
    }
  }

</style>
