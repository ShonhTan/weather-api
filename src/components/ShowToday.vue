<template>
  <div v-if="info && info.cod===200 && show" class="showToday p-3 bg-light text-dark border rounded">
    <h2 class="showToday-title display-4">{{ $t('lang.showToday.title', { location: `${info.name}` }) }} ({{info.sys.country}})</h2>
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
          <p>{{showTime(info.sys.sunrise)}}</p>
        </div>
        <div class="col m-2 p-4 bg-light text-dark border rounded">
          <h4 class="mb-4">{{$t('lang.showToday.sunset')}}</h4>
          <p>{{showTime(info.sys.sunset)}}</p>
        </div>
      </div>  
    </div> 
  </div>

  <div v-else class="app-info p-5 bg-light text-dark border rounded">
    <p class="display-4">{{$t('lang.app.noinfo')}}</p>
    <p v-if="$root.$data.cod>=400">{{$t('lang.app.notfound')}}</p>
    <p v-else-if="city===''">{{$t('lang.app.nocityname')}}</p>
  </div>
  
</template>

<script>
import windDirection from "@/assets/js/windDirection.js";

export default {
  name:"showToday",
  props:{
    city:String
  },
  data(){
    return {
      info: {},
      show:false
    }
  },
  methods:{
    APICallToday(){
      this.$http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.$root.$data.APIKey}&units=metric`)
      .then((response) => {
        this.$root.$data.today = response.body
        this.$root.$data.cod=response.body.cod        
        this.info = response.body
        return true;
      }, (response) => {
        this.$root.$data.cod = response.body.cod
        return false;
      }).then((result)=>{
        this.show=result;
      });
    },
    showTime(time){
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
  },
  watch: {
    city() {
      this.APICallToday()
    }
  },
  mounted(){      
    if (this.city==="" || (this.$root.$data && this.$root.$data.cod > 400)) {     
      return;
    }
    if((!this.$root.$data.today && this.city!=="") || (this.$root.$data.cod < 400 && this.$root.$data.today.name.toLowerCase() !== this.city.toLowerCase())) {
      this.APICallToday()
    } else {
      this.info = this.$root.$data.today
      this.show = true
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
