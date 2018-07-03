<template>
  <div class="showNext">
    <h2 class="showNext-title display-4">Météo des 5 prochains jours</h2>
    <div v-if="info!==[]" class="showNext-info">

      <show-next-row class="container"
      v-for="(dayinfo, index) in info" :key="index"
      v-bind:day-info="dayinfo"
      />
    </div>
  </div>
</template>

<script>

import ShowNextRow from "@/components/ShowNext/ShowNextRow.vue";

export default {

  name:"ShowNext",
  props:["info"],
  components:{
    ShowNextRow
  },
  data(){
    return {
    };
  }
}
</script>

<style lang="scss" scoped>

.showNext-title {
margin-bottom: 40px;
 
}

</style>

