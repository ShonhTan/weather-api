<template>
  <div class="appInput row">
    <!-- City choose form -->
    <form class="input-group mb-4 col-12 col-sm-6"
    @submit.prevent="changeCity"
    >
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">{{$t('lang.appInput.citylabel')}}</label>
      </div>
      <input type="text" class="form-control" id="inputGroupSelect01" aria-label="Ville" aria-describedby="basic-addon2" v-model="inputCity" :placeholder="$t('lang.appInput.placeholder')"
      >
      <div class="input-group-append" v-if="inputCity!==''">
        <input class="btn btn-outline-secondary text-white" type="submit" :value="$t('lang.appInput.ok')">
      </div>
    </form>

    <!-- Language select -->
    <div class="input-group mb-4 col-12 col-sm-6">
      <select class="custom-select" id="inputGroupSelect02" v-model="selectLanguage"
      @change="changeLanguage"
      >
        <option v-for="(language, index) in languages"
        :key="index"
        :value="language.value">{{language.name}}</option>
      </select>
      <div class="input-group-append">
        <label class="input-group-text" for="inputGroupSelect02">{{$t('lang.appInput.languagelabel')}}</label>
      </div>
    </div> 
  </div>

  
</template>

<script>
export default {
  name: 'AppInput',
  data(){
    return {
      inputCity:"",
      selectLanguage:"fr",
      languages:[
        {
          name: "Français",
          value: "fr"
        },
        {
          name: "English",
          value: "en"
        },
        {
          name: "日本語",
          value: "jp"
        },
        {
          name: "中国",
          value: "ch"
        }
      ]
    }
  },
  methods:{
    // change city
    changeCity(){
      if (this.inputCity!=="") {
        this.$root.$data.city = this.inputCity;
      }
    },
    // change language
    changeLanguage(){      
      this.$root.$i18n.locale=this.selectLanguage;
    }
  }
}
</script>
