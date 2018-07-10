<template>
<div class="col-12 col-md-6 col-lg-3 mb-4">
  <div class="card text-center">
    <!-- Weather time -->
    <div class="showNext-item-time card-header text-light bg-info">
      {{ $t('lang.showNextItem.fromto', { start:showTime, end: showTimeEnd }) }}
    </div>
    <div class="card-body">
      <!-- Weather icon -->
      <!-- <img class="showNext-item-weatherIcon"
           v-for="(inItem, index) in info.weather"
           :src="`https://openweathermap.org/img/w/${inItem.icon}.png`"
           :key="index"> -->
      <i class="wi weatherIcon"
         v-for="(inItem, index) in info.weather"
         :key="index"
         :class="weatherIcon(inItem.icon)"></i>
    </div>
    <!-- Temperature -->
    <div class="card-footer text-muted">
      <span class="font-weight-bold">{{ info.main.temp }}</span>°C / <span class="font-weight-bold">{{ fahrenheitTemp }}</span>°F
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment'
import weatherIcon from "@/assets/js/weatherIcon.js"

export default {
  name:"ShowNextItem",
  data: () => ({
      weatherIcon
  }),
  props: {
    info:{
      type:Object,
      required:true
    }
  },
  computed: {
    // Returns temperature in fahrenheit unit
    fahrenheitTemp() {
      return Math.round((this.info.main.temp*1.8+32)*100)/100
    },
    // Return time format HH:MM
    showTime() {
      return moment(this.info.dt*1000).format("k:mm")
    },
    // Return time HH:MM (+3H)
    showTimeEnd(){
      return moment(this.info.dt*1000).add(3, 'h').format("k:mm")
    }
  }
}

</script>


<style lang="scss" scoped>
.showNext-item{
  &-time {
    font-size: 20px;
  }
  // &-weatherIcon {
  //   width: 75px;
  //   height: 75px;
  // }
}
.weatherIcon {
  font-size: 70px;
  margin: 20px 0;
  color: #555555;
}
</style>
