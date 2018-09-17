<template>
    <section class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <section class="icon"
                   v-for="iconCon of page"
                   :key="iconCon.id"
          >
            <section class="iconImg">
              <img class="iconPic" :src="iconCon.imgUrl"/>
            </section>
            <p class="iconDisc">{{iconCon.imgText}}</p>
          </section>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </section>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    iconLists: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const page = []
      this.iconLists.forEach((item, index) => {
        const pageNum = Math.floor(index / 8)
        if (!page[pageNum]) {
          page[pageNum] = []
        }
        page[pageNum].push(item)
      })
      return page
    }
  }
}
</script>

<style  lang="less" scoped>
  @import '~styles/less.less';
  .icons /deep/ .swiper-container{
    height: 0;
    padding-bottom: 48%;
    border-bottom:1px solid #ccc;
    background: #fff;
  }
  .wrapper /deep/ .swiper-pagination-bullet{
    background:@bgColor !important;
    font-size: 0.1rem !important;
  }
  .icon{
    position: relative;
    overflow: hidden;
    width: 25%;
    float: left;
    padding-bottom:21%;
    .iconImg{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: .44rem;
      .box-sizing();
      padding:.1rem;
      .iconPic{
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }
    .iconDisc{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color:@fontColor;
      .textHidden();
    }
  }
</style>
