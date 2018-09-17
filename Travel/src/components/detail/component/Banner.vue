<template>
  <div>
    <div class="banner" @click="handleGallayShow">
      <img class="banner-img" :src="bannerImg" alt="故宫">
      <div class="banner-info">
        <div class="banner-title">{{this.bannerTitle}}</div>
        <div class="banner-num">
          <i class="iconfont banner-font">&#xe640;</i>
          {{this.imgs.length}}
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallery'
export default {
  name: 'DetailBanner',
  props: {
    bannerTitle: String,
    bannerImg: String,
    imgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleGallayShow () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang="less">
  @import '~styles/less.less';
  .banner{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 55%;
    .banner-img{
      max-width: 100%;
    }
    .banner-info{
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      color:#fff;
      line-height: .6rem;
      background: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
      .banner-title{
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
      }
      .banner-num{
        margin-top: .14rem;
        padding: 0 .5rem;
        height: .32rem;
        line-height: .32rem;
        border-radius: .2rem;
        background: rgba(0,0,0,0.8);
        font-size: .28rem;
        .banner-font{
          font-size: .24rem;
        }
      }
    }
  }
</style>
