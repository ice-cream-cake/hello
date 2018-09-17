<template>
  <section class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperLists" :key= "item.id">
        <img class="swipe-img" :src= "item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperLists: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
      }
    }
  }
}
</script>

<style scoped lang="less">
  .wrapper /deep/ .swiper-pagination-bullet-active{
    background: #fff !important;
  }
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.25%;
    .swipe-img{
      max-width: 100%;
    }
  }

</style>
