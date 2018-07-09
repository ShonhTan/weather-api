<template>
  <!-- <div class="showNext-item d-flex flex-column align-items-center col-3 p-3 bg-light text-dark border">
    <h5>À {{showTime}}</h5>
    <img v-for="(inItem, index) in info.weather" :src="`http://openweathermap.org/img/w/${inItem.icon}.png`" :key="index">
    <p class="temperature mb-0"><span class="font-weight-bold">{{info.main.temp}}</span>°C / <span class="font-weight-bold">{{fahrenheitTemp}}</span>°F</p>
    
  </div> -->
<div class="col-12 col-md-6 col-lg-3 mb-4">
  <div class="card text-center">
    <!-- Weather time -->
    <div class="showNext-item-time card-header text-light bg-info">
      {{$t('lang.showNextItem.fromto', {start:showTime, end: toHour})}}
    </div>
    <div class="card-body">
      <!-- Weather icon -->
      <img class="showNext-item-weatherIcon" v-for="(inItem, index) in info.weather" :src="`https://openweathermap.org/img/w/${inItem.icon}.png`" :key="index">
    </div>
    <!-- Temperature -->
    <div class="card-footer text-muted">
      <span class="font-weight-bold">{{info.main.temp}}</span>°C / <span class="font-weight-bold">{{fahrenheitTemp}}</span>°F
    </div>
  </div>
</div>
</template>

<script>

export default {
  name:"ShowNextItem",
  props: ["info"],
  computed: {
    // Returns temperature in fahrenheit unit
    fahrenheitTemp() {
      return Math.round((this.info.main.temp*1.8+32)*100)/100;
    },
    // Return time format HH:MM
    showTime() {
      var infoTime = new Date(this.info.dt*1000);
      var hours=infoTime.getHours();
      if (String(hours).length<2) {
        hours=0+String(hours);
      }
      var minutes=infoTime.getMinutes();
      if (String(minutes).length<2) {
        minutes=0+String(minutes);
      }
      return `${hours}:${minutes}`;
    },
    // Return time HH:MM (+3H)
    toHour(){
      var infoTime = new Date(this.info.dt*1000+10800000);
      var hours=infoTime.getHours();
      if (String(hours).length<2) {
        hours=0+String(hours);
      }
      var minutes=infoTime.getMinutes();
      if (String(minutes).length<2) {
        minutes=0+String(minutes);
      }
      return `${hours}:${minutes}`;
    }
  }
}

</script>


<style lang="scss" scoped>
.showNext-item{
  &-time {
    font-size: 20px;
  }
  &-weatherIcon {
    width: 75px;
    height: 75px;
  }
}
</style>
