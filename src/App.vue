<template>
<div class="app bg-dark text-white">
  <div class="container">

    <h1 class="app-title display-3 py-4">Weather App</h1>

    <AppInput v-on:change-city="citySelect"/>

    <div v-if="city!=='' && today.cod!=='404' && today.main && next!==[]" class="app-info ">
      <show-today class="p-3 mb-4 bg-light text-dark border rounded" v-bind:info="today"/>
      <show-next class="p-3 bg-light text-dark border rounded" v-bind:info="next"/>
    </div>

    <div v-else class="app-info p-5 bg-light text-dark border rounded">
      <p class="display-4">Pas d'info</p>
      <p v-if="city===''">(Entrez un nom de ville)</p>
      <p v-else-if="today.cod==='404'">(Aucune ville n'a été trouvée)</p>
    </div>
  </div>
</div>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import ShowToday from "@/components/ShowToday.vue";
import ShowNext from "@/components/ShowNext.vue";


export default {
  components:{AppInput, ShowToday, ShowNext},
  data(){
    return {
      APIKey: "3228c530c95dcdce99a92414fb6830b7",
      city: "",
      today:{},
      next:{}
    }
  },
  methods: {
    APICallToday(){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.APIKey}&units=metric`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.today = data
      });
    },
    ApiCallNext(){
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&APPID=${this.APIKey}&units=metric`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.makeForecastTab(data);
      })
    },
    makeForecastTab(data){
      if (data.cod==200 && data.list) {
        this.next=[]
        var day = new Date(data.list[0].dt*1000).getDay()
        var dayTab=[]

        data.list.forEach(element => {
          var elementDay= new Date(element.dt*1000).getDay()
          if (day !== elementDay) {
            day = elementDay
            this.next.push(dayTab);
            dayTab=[];
          }
          dayTab.push(element)
        });
        this.next.push(dayTab);
      }
    },
    citySelect(input){
      this.city=input
      this.APICallToday()
      this.ApiCallNext()
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/bootstrap.min.css';
.app {
  min-height: 100vh;
}

</style>
