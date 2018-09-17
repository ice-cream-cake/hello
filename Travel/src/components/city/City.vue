<template>
  <div>
    <city-header></city-header>
    <city-serach :city="cities"></city-serach>
    <city-list
      :city="cities"
      :hotCity="hotCities"
      :letters="letter"
    ></city-list>
    <city-letter
      :city="cities"
      @change="handleLetterChange"
    ></city-letter>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './component/Header'
import CitySerach from './component/Serach'
import CityList from './component/List'
import CityLetter from './component/Letter'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySerach,
    CityList,
    CityLetter
  },
  methods: {
    getCityData () {
      axios.get('api/city.json').then(this.getCityDataSucc)
    },
    getCityDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityData()
  }
}
</script>

<style lang="less" scoped>
</style>
