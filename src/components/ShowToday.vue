<template>
  <div class="showToday">
    <h2 class="showToday-title display-4">{{ $t('lang.showToday.title', { place: `${info.name}` }) }} ({{info.sys.country}})</h2>
    <div class="showToday-info">

      <div class="row">

        <div class="col m-2 p-4 bg-light text-dark border rounded d-flex justify-content-center align-items-center">
          <img class="showToday-weatherIcon" v-for="(item, index) in info.weather" :key="index" :src="`https://openweathermap.org/img/w/${item.icon}.png`" alt="weathericon">
        </div>
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.temperature')}}</h4>
          <p>{{$t('lang.showToday.tempmin')}} {{info.main.temp_min}}°C</p>
          <p>{{$t('lang.showToday.tempaverage')}} {{info.main.temp}}°C</p>
          <p>{{$t('lang.showToday.tempmax')}} {{info.main.temp_max}}°C</p>
        </div>
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.humidity')}}</h4>
          <p>{{info.main.humidity}}%</p>
        </div>
      </div>

      <div class="row">
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.pressure')}}</h4>
          <p>{{info.main.pressure}} hPa</p>
      
        </div>
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.wind')}}</h4>
          <p>{{$t('lang.showToday.windspeed')}}  {{info.wind.speed}} m/s</p>
          <p>{{$t('lang.showToday.winddirection')}}  {{convertDirection(info.wind.deg)}}</p>
        </div>
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.clouds')}}</h4>
          <p>{{info.clouds.all}}%</p>
        </div>
      </div>

      <div class="row">
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.sunrise')}}</h4>
          <p>{{hour(info.sys.sunrise)}}</p>
        </div>
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.sunset')}}</h4>
          <p>{{hour(info.sys.sunset)}}</p>
        </div>
      </div>
      
    </div>
  </div>
  
</template>

<script>
//importation fonction de convertion direction du vent
import windDirection from "@/assets/js/windDirection.js";

export default {
  name:"showToday",
  props: ["info"],
  methods:{
    hour (time){
      var infoTime = new Date(time*1000);
      var hours=infoTime.getHours()
      if (String(hours).length<2) {
        hours=0+String(hours)
      }
      var minutes=infoTime.getMinutes()
      if (String(minutes).length<2) {
        minutes=0+String(minutes)
      }
      return `${hours}:${minutes}`
    },
    convertDirection(num){
      return windDirection.degToCard(num, this.$root.$i18n.locale);
    }
  }
}
</script>

<style lang="scss" scoped>
.showToday {
  &-weatherIcon {
    width: 75px;
    height: 75px;
  }
}
p {
  font-size: 18px;
}
</style>
