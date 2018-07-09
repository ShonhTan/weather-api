<template>
<div class="app bg-dark text-white py-3">  
  <div class="container">
    <!-- title -->
    <h1 class="app-title display-3 py-4">
    {{$t('lang.app.title')}}
    </h1>
    <!-- inputcity -->
    <AppInput/>
    <!-- navbar -->
    <NavBar/>
    
    <!-- router -->
    <div class="app-info">
      <router-view
      :city="$root.$data.city"
      ></router-view>
    </div>

  </div>
</div>

</template>

<script>
import AppInput from "@/components/AppInput.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components:{AppInput, NavBar},
}
</script>

<style lang="scss">
@import './assets/css/bootstrap.min.css';
.app {
  min-height: 100vh;
}
</style>
