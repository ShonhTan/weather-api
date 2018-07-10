<template>
  <div v-if="show" class="showToday p-3 bg-light text-dark border rounded">
    <h2 class="showToday-title display-4">{{ $t('lang.showToday.title', { location: `${info.name}` }) }} ({{info.sys.country}})</h2>
    <div class="showToday-info">

      <!-- First row -->
      <div class="row">
        <!-- Weather icon -->
        <div class="col m-2 p-4 bg-light text-dark border rounded d-flex justify-content-center align-items-center">
          <img class="showToday-weatherIcon" v-for="(item, index) in info.weather" :key="index" :src="`https://openweathermap.org/img/w/${item.icon}.png`" alt="weathericon">
        </div>
        <!-- Temperature -->
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.temperature')}}</h4>
          <p>{{$t('lang.showToday.tempmin')}} {{info.main.temp_min}}°C</p>
          <p>{{$t('lang.showToday.tempaverage')}} {{info.main.temp}}°C</p>
          <p>{{$t('lang.showToday.tempmax')}} {{info.main.temp_max}}°C</p>
        </div>
        <!-- Humidity -->
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.humidity')}}</h4>
          <p>{{info.main.humidity}}%</p>
        </div>
      </div>

      <!-- Second row -->
      <div class="row">
        <!-- Pressure -->
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.pressure')}}</h4>
          <p>{{info.main.pressure}} hPa</p>
        </div>
        <!-- Wind -->
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.wind')}}</h4>
          <p>{{$t('lang.showToday.windspeed')}}  {{info.wind.speed}} m/s</p>
          <p>{{$t('lang.showToday.winddirection')}}  {{convertDirection(info.wind.deg)}}</p>
        </div>
        <!-- Cloudiness -->
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.clouds')}}</h4>
          <p>{{info.clouds.all}}%</p>
        </div>
      </div>

      <!-- Third row -->
      <div class="row">
        <!-- Sunrise time -->
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.sunrise')}}</h4>
          <p>{{showTime(info.sys.sunrise)}}</p>
        </div>
        <!-- Sunset time -->
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.sunset')}}</h4>
          <p>{{showTime(info.sys.sunset)}}</p>
        </div>
      </div>  
    </div> 
  </div>

  <!-- No information -->
  <div v-else class="app-info p-5 bg-light text-dark border rounded">
    <p class="display-4">{{$t('lang.app.noinfo')}}</p>
    <p v-if="store.cod>=400">{{$t('lang.app.notfound')}}</p>
    <p v-else-if="city===''">{{$t('lang.app.nocityname')}}</p>
  </div>
  
</template>

<script>
import windDirection from "@/assets/js/windDirection.js";
import store from "@/store.js"
import i18n from '@/localisation.js';

export default {
  name:"showToday",
  props:{
    city:String
  },
  data(){
    return {
      info: {},
      show:false,
      store
    }
  },
  methods:{
    // Get weather data from API
    APICallToday(){
      this.$http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${store.APIKey}&units=metric`)
      .then((response) => {
        store.today = response.body;
        store.cod=response.body.cod;
        this.info = response.body;
        return true;
      }, (response) => {
        store.cod = response.body.cod;
        return false;
      }).then((result)=>{
        this.show=result;
      });
    },
    // Return time format HH:MM
    showTime(time){
      var infoTime = new Date(time*1000);
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
    // Return cardinal direction
    convertDirection(num){
      return windDirection.degToCard(num, i18n.locale);
    }
  },
  watch: {
    // watch store.city changes
    city() {
      this.APICallToday();
    }
  },
  mounted(){
    // If wrong city input
    if (this.city==="" || (store && store.cod > 400)) {     
      return;
    }
    // If (no data and input) or (data not corresponding to actual city)
    if((!store.today && this.city!=="") || (store.cod ==200 && store.today.name.toLowerCase() !== this.city.toLowerCase())) {
      this.APICallToday();
    } else {  // if no city change & data
      this.info = store.today;
      this.show = true;
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
</style>
