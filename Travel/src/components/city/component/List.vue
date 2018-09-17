<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom" >当前城市</div>
        <div class="buttonList">
          <div class="buttonWrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="buttonList">
          <div class="buttonWrapper"
               v-for="item of hotCity"
               :key="item.id"
               @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item,key) of city"
           :key="key"
           :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="itemList">
          <li class="item border-bottom"
              v-for="inner of item"
              :key="inner.id"
              @click="handleCityClick(inner.name)"
          >{{inner.name}}</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    city: Object,
    hotCity: Array,
    letters: String
  },
  methods: {
    handleCityClick (cityName) {
      // console.log(cityName)
      this.$store.dispatch('changeCity', cityName)
      this.$router.push('/')
    }
  },
  watch: {
    letters () {
      if (this.letters) {
        const element = this.$refs[this.letters][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="less" scoped>
  @import '~styles/less.less';
  .border-topbottom{
    ::before{border-color: #ccc}
    ::after{border-color: #ccc}
  }
  .border-bottom{
    ::after{border-color: #000}
  }
  .list{
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .title {
      line-height: .54rem;
      background: #eee;
      padding-left: .2rem;
      color:#666;
      font-size: .26rem;
    }
    .buttonList{
      overflow: hidden;
      padding: .1rem .6rem .1rem .1rem;
      .buttonWrapper{
        float: left;
        width: 33.33%;
        .button{
          margin: .1rem;
          padding: .1rem 0;
          text-align: center;
          border: .02rem solid #ccc;
          border-radius: .06rem;
        }
      }
    }
    .itemList{
      .item{
        list-style: none;
        line-height: .54rem;
        color:#666;
        padding-left: .2rem;
      }
    }
  }
</style>
