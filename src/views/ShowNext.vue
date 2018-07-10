<template>
  <div v-if="show" class="showNext p-3 bg-light text-dark border rounded">

    <h2 class="showNext-title display-4 mb-5">{{$t('lang.showNext.title', {location: store.next.city})}}</h2>
    <div v-if="info!==[]" class="showNext-info">
      <show-next-row
      v-for="(dayinfo, index) in info" :key="index"
      :day-info="dayinfo"
      :plus="$t('lang.showNext.daydetail')[index]"
      />
    </div>
  </div>

  <div v-else class="app-info p-5 bg-light text-dark border rounded">
    <p class="display-4">{{$t('lang.app.noinfo')}}</p>
    <p v-if="store.cod>=400">{{$t('lang.app.notfound')}}</p>
    <p v-else-if="city===''">{{$t('lang.app.nocityname')}}</p>
  </div>
</template>

<script>
import ShowNextRow from "@/components/ShowNext/ShowNextRow.vue";
import store from "@/store.js";

export default {
  name:"ShowNext",
  components:{ShowNextRow},
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
    // get weather data from API
    APICallNext(){
      this.$http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&APPID=${store.APIKey}&units=metric`)
      .then((response) => {
        this.makeForecastTab(response.body);
        store.cod=response.body.cod;
        return true;
      }, (response) => {
        store.cod = response.body.cod;
        return false;
      }).then((result)=>{
        this.show=result;
      });
    },
    // make array for v-for showNextItem
    makeForecastTab(data){
      this.info=[];
      var day = new Date(data.list[0].dt*1000).getDay();
      var dayTab=[];
      data.list.forEach(element => {
        var elementDay= new Date(element.dt*1000).getDay()
        if (day !== elementDay) {
          day = elementDay;
          this.info.push(dayTab);
          dayTab=[];
        }
        dayTab.push(element);
      });
      this.info.push(dayTab);
      store.next = this.info;
      store.next.city=data.city.name;
    }
  },
  watch: {
    // watch store.city changes
    city() {
      this.APICallNext();
    }
  },
  mounted(){
    // If wrong city input
    if (this.city==="" || (store && store.cod >= 400)) {
      return;
    }
    // If (no data and input) or (data not corresponding to actual city)
    if((!store.next && this.city!=="") || (store.cod == 200 && store.next.city.toLowerCase() !== this.city.toLowerCase())) {
      this.APICallNext();
    } else {  // if no city change & data
      this.info = store.next;
      this.show=true;
    }
  }
}
</script>
