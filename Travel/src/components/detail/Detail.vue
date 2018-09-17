<template>
  <div>
    <detail-banner
      :bannerTitle="bannerTitle"
      :bannerImg="bannerImg"
      :imgs="imgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="container">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './component/Banner'
import DetailHeader from './component/Header'
import DetailList from './component/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      bannerTitle: '',
      bannerImg: '',
      imgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {params: {id: this.$route.params.id}
      }).then(this.getDetailSucc)
    },
    getDetailSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bannerTitle = data.bannerTitle
        this.bannerImg = data.bannerImg
        this.imgs = data.imgs
        this.list = data.list
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped lang="less">
  @import '~styles/less.less';
  .container{
    height: 50rem;
  }
</style>
