<template>
  <div class="showNext-item">
    <h5>À {{showTime}}</h5>
    <img class="mx-auto" v-for="(inItem, index) in info.weather" :src="`http://openweathermap.org/img/w/${inItem.icon}.png`" :key="index">
    <p>{{info.main.temp}}°C / {{fahrenheitTemp}}°F</p>
  </div>
</template>

<script>
export default {
  name:"ShowNextItem",
  props: ["info"],
  computed: {
    fahrenheitTemp() {
      return Math.round((this.info.main.temp*1.8-32)*100)/100;
    },
    showTime() {
      var infoTime = new Date(this.info.dt*1000);
      var hours=infoTime.getHours()
      if (String(hours).length<2) {
        hours=0+String(hours)
      }
      var minutes=infoTime.getMinutes()
      if (String(minutes).length<2) {
        minutes=0+String(minutes)
      }
      return `${hours}:${minutes}`
    }
  }
}
</script>


<style lang="scss" scoped>
.showNext-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
