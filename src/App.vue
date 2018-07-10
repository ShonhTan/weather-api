<template>
<div class="app bg-dark text-white py-3">  
  <div class="container">

    <!-- title -->
    <h1 class="app-title display-3 py-4">
      {{ $t('lang.app.title') }}
    </h1>

    <!-- inputcity -->
    <AppInput/>

    <!-- navbar -->
    <NavBar/>
    
    <!-- router -->
    <div class="app-info">
      <router-view></router-view>
    </div>

  </div>
</div>

</template>

<script>
import AppInput from "@/components/AppInput.vue"
import NavBar from "@/components/NavBar.vue"
import store from "@/store"

export default {
  components: { AppInput , NavBar },
  data: () => ({
    store
  })
}
</script>

<style lang="scss">
@import './assets/css/weather-icons.min.css';
@import './assets/css/weather-icons-wind.css';
@import './assets/css/bootstrap.min.css';
.app {
  min-height: 100vh;
}
</style>
