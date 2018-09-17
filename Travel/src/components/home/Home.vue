<template>
  <section class="travel">
    <home-header></home-header>
    <home-swiper :swiperLists="swiList"></home-swiper>
    <home-icon :iconLists="iconList"></home-icon>
    <home-picture></home-picture>
    <home-list :lists="list"></home-list>
    <home-recommend :recommendLists="recommendList"></home-recommend>
    <home-weekend :weekLists="weekList"></home-weekend>
  </section>
</template>

<script>
import HomeHeader from './component/Header'
import HomeSwiper from './component/Swiper'
import HomeIcon from './component/Icon'
import HomePicture from './component/Picture'
import HomeList from './component/List'
import HomeRecommend from './component/Recommend'
import HomeWeekend from './component/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      swiList: [],
      iconList: [],
      list: [],
      recommendList: [],
      weekList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomePicture,
    HomeList,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeData () {
      axios.get('/api/index.json?city=' + this.$store.state.city)
        .then(this.getHomeDataSuc)
    },
    getHomeDataSuc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiList = data.swiperList
        this.iconList = data.iconItem
        this.list = data.listItem
        this.recommendList = data.itemData
        this.weekList = data.weekData
      }
    }
  },
  mounted () {
    this.lastCity = this.$store.state.city
    this.getHomeData()
  },
  // 页面重新被显示的时候执行
  activated () {
    if (this.lastCity !== this.$store.state.city) {
      this.lastCity = this.$store.state.city
      this.getHomeData()
    }
  }
}
</script>

<style scoped lang="less">
  @import '~styles/less.less';
.travel{
  background:#f5f5f5;
}
</style>
