<template>
<div class="app bg-dark text-white">
  <div class="container">
    <h1 class="app-title display-3 py-4">
    {{$t('lang.app.title')}}</h1>
    <AppInput
    @change-city="citySelect"
    />
    <div 
    v-if="city!=='' && today.cod!=='404' && today.main && next!==[]"
    class="app-info ">
      <show-today class="p-3 mb-4 bg-light text-dark border rounded"
      :info="today"
      :language-selected="this.$parent.$i18n.locale"
      />
      
      <show-next class="p-3 bg-light text-dark border rounded"
      :info="next"
      />
    </div>

    <div v-else class="app-info p-5 bg-light text-dark border rounded">
      <p class="display-4">{{$t('lang.app.noinfo')}}</p>
      <p v-if="city===''">{{$t('lang.app.nocityname')}}</p>
      <p v-else-if="today.cod==='404'">{{$t('lang.app.notfound')}}</p>
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
      this.$http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.APIKey}&units=metric`)
      .then((response) => {
        this.today = response.body
      }, response => {
        this.today = response.body
      });
    },

    APICallNext(){
      this.$http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&APPID=${this.APIKey}&units=metric`)
      .then((response) => {
        this.makeForecastTab(response.body);
      });
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
      this.APICallNext()
      
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
