<template>
  <div v-if="info!==[] && show" class="showNext p-3 bg-light text-dark border rounded">
    <h2 class="showNext-title display-4 mb-5">{{$t('lang.showNext.title', {location: $root.$data.next.city})}}</h2>
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
    <p v-if="$root.$data.cod>=400">{{$t('lang.app.notfound')}}</p>
    <p v-else-if="city===''">{{$t('lang.app.nocityname')}}</p>
  </div>
</template>

<script>

import ShowNextRow from "@/components/ShowNext/ShowNextRow.vue";

export default {

  name:"ShowNext",
  components:{ShowNextRow},
  props:{
    city:String
  },
  data(){
    return {
      info: [],
      show:false
    }
  },
  methods:{
    APICallNext(){
      this.$http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&APPID=${this.$root.$data.APIKey}&units=metric`)
      .then((response) => {
        this.makeForecastTab(response.body);
        this.$root.$data.cod=response.body.cod
        return true;
      }, (response) => {
        this.$root.$data.cod = response.body.cod
        return false;
      }).then((result)=>{
        this.show=result;
      });
    },
    makeForecastTab(data){
      this.info=[]
      var day = new Date(data.list[0].dt*1000).getDay()
      var dayTab=[]

      data.list.forEach(element => {
        var elementDay= new Date(element.dt*1000).getDay()
        if (day !== elementDay) {
          day = elementDay
          this.info.push(dayTab);
          dayTab=[];
        }
        dayTab.push(element)
      });
      this.info.push(dayTab);
      this.$root.$data.next = this.info
      this.$root.$data.next.city=data.city.name
    }
  },
  watch: {
    city() {
      this.APICallNext()
    }
  },
  mounted(){
    if (this.city==="" || (this.$root.$data && this.$root.$data.cod > 400)) {
      return;
    } 
    if((!this.$root.$data.next && this.city!=="") || (this.$root.$data.cod < 400 && this.$root.$data.next.city.toLowerCase() !== this.city.toLowerCase())) {
      this.APICallNext()
    } else {
      this.info = this.$root.$data.next
      this.show=true;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

