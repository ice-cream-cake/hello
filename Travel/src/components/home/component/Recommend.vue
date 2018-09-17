<template>
  <section class="recommend">
    <div class="recomHeader">
        <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
        <span class="recomTitle">猜你喜欢</span>
    </div>
    <ul>
      <router-link tag="li"
        class="item"
        v-for="data of recommendLists"
        :key="data.id"
        :to="'/detail/' + data.id "
      >
        <div class="item-img-wrapper">
          <img :src="data.imgUrl">
        </div>
        <div class="item-desc">{{data.desc}}</div>
        <div class="item-info">
          <p class="item-title">{{data.title}}</p>
          <p class="item-link">
            <span>
              <i class="iconfont">&#xe647;&#xe647;&#xe647;&#xe647;&#xe647;</i>
            </span>
            <span>{{data.pinglun}}</span>
          </p>
          <p class="item-price">
            <span class="money"><i>￥</i><em>{{data.money}}</em></span>
            起
            <span class="area">{{data.area}}</span>
          </p>
          <p class="item-feature">{{data.feature}}</p>
        </div>
      </router-link>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendLists: Array
  }
}
</script>

<style scoped lang="less">
  @import '~styles/less.less';
  .recommend{
    margin-top: .2rem;
    background: #fff;
    .recomHeader {
      position: relative;
      .box-sizing();
      padding: .24rem 0 .2rem;
      img {
        overflow: hidden;
        width: 0.3rem;
        vertical-align: top;
        margin-left: .2rem;
      }
      .recomTitle {
        display: inline-block;
        height: 0.44rem;
        font-size: .32rem;
        line-height: .44rem;
      }
    }
  }
  ul {
    margin-left: .24rem;
    li {
      display: flex;
      flex-direction: row;
      overflow: hidden;
      position: relative;
      padding: .2rem 0;
      border-bottom: 1px solid #f5f5f5;
      .item-img-wrapper{
        width: 2rem;
        height: 2rem;
        img{
          max-width: 100%;
        }
      }
      .item-desc{
        background: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);
        position: absolute;
        top: 0.2rem;
        left: 0;
        width: 1.02rem;
        height: .38rem;
        background-size: 100%;
        color:#fff;
        font-size: .2rem;
        line-height: .38rem;
      }
      .item-link{
        margin-top: .14rem;
        height: .34rem;
        font-size: .2rem;
         span{
           display: inline-block;
           i{
             color:#ffb436;
             font-size: .2rem;
           }
         }
      }
      .item-info{
        width: 80%;
        padding-left: .22rem;
        .item-title{
          margin-top: .26rem;
          height: .44rem;
          font-size: .32rem;
          line-height: .44rem;
          color:#212121;
        }
        .item-price{
          position: relative;
          margin-top: .26rem;
          height: .44rem;
          font-size: .32rem;
          line-height: .44rem;
          .money{
            color:#ff8300;
            float: left;
            em{
              font-size: .4rem;
            }
          }
          .area{
            position: absolute;
            right: 0;
            top: 0;
          }
        }
      }
      .item-feature{
        display: inline-block;
        margin-top: .48rem;
        margin-right: .24rem;
        background: #fff9f9;
        padding: .04rem .1rem;
        color:#f55;
        font-size: .24rem;
        line-height: .34rem;
      }
    }
  }
</style>
