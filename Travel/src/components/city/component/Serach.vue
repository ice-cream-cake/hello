<template>
  <div>
    <div class="serach">
      <input  v-model="keyword" class="searchInput" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content"
         ref="serach"
         v-show="keyword"
    >
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click=" handleCityClick (item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom"
            v-show="hasNOData"
        >没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySerach',
  props: {
    city: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNOData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.city) {
          this.city[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (cityName) {
      // console.log(cityName)
      this.$store.dispatch('changeCity', cityName)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.serach)
  }
}
</script>

<style lang="less" scoped>
  @import '~styles/less.less';
  .serach{
    height: .72rem;
    padding: 0 .1rem;
    background: @bgColor;
    .searchInput{
      .box-sizing();
      padding: 0 .1rem;
      width: 100%;
      height: 0.62rem;
      line-height: .62rem;
      text-align: center;
      -webkit-border-radius: .06rem;
      -moz-border-radius: .06rem;
      border-radius: .06rem;
      color:#666;
    }
  }
  .search-content{
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ccc;
    .border-bottom{
      ::after{border-color:#777};
    }
    .search-item{
      line-height: .62rem;
      padding-left: .2rem;
      background: #fff;
      color:#666
    }
  }
</style>
