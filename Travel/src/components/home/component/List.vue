<template>
  <section class="hotList">
    <div class="listHeader">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" >
      <span class="listTitle">本周热门榜单</span>
      <span class="allList">
        <span>全部榜单</span>
        <i class="iconfont">&#xe612;</i>
      </span>
    </div>
    <ul>
        <li v-for="item of lists" :key="item.id">
          <div class="listIcon">
            <img :src="item.url">
          </div>
          <div class="listPic">
            <img :src="item.imgUrl">
          </div>
          <p class="listText">{{item.text}}</p>
          <div class="listPrice">
            <span class="listMoney">{{item.money}}</span>
            起
          </div>
        </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HomeList',
  props: {
    lists: Array
  }
}
</script>

<style scoped lang="less">
  @import '~styles/less.less';
  .hotList{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom:30%;
    background: #fff;
    .listHeader{
      position: relative;
      .box-sizing();
      padding:.24rem 0;
      img{
        overflow: hidden;
        width: 0.3rem;
        vertical-align: top;
        margin-left: .2rem;
      }
      .listTitle{
        display: inline-block;
        height: 0.44rem;
        font-size:.32rem;
        line-height: .44rem;
      }
      .allList{
        position: absolute;
        top: .28rem;
        right: .32rem;
        color:#616161;
        font-size: .24rem;
        line-height: .44rem;
        span{
          display: inline-block;
          height: 0.44rem;
          line-height: 0.44rem;
        }
        .iconfont{
          font-size: 0.22rem;
        }
      }
    }
  }
  ul {
    overflow-x: scroll;
    width: 500%;
    padding: 0 .24rem;
    height: 3.5rem;
    white-space: nowrap !important;
    background: #fff;
    li:not(:first-child){
      margin-left: .12rem;
    }
    li {
      position: relative;
      float: left !important;
      width: 2rem;
      padding: .06rem 0 .2rem;
      .listIcon{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 0.84rem;
        height: 0.4rem;
        img{
          max-width: 100%;
        }
      }
      .listPic{
        width: 2rem;
        height: 2rem;
        img{
          max-width: 100%;
        }
      }
      .listText,.listPrice{
        text-align: center;
        margin-top: .1rem;
        span{
          color:#ff8300;
        }
      }
    }
  }
</style>
