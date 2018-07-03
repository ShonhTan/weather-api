<template>
  <div class="showNext">
    <h2 class="showNext-title display-4 mb-5">Météo des 5 prochains jours</h2>
    <div v-if="info!==[]" class="showNext-info">

      <show-next-row
      v-for="(dayinfo, index) in info" :key="index"
      :day-info="dayinfo"
      :plus="dayDetail[index]"
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
      dayDetail: [
        "Aujourd'hui",
        "Demain",
        "Après-demain"
      ]
    };
  }
}
</script>

<style lang="scss" scoped>

.showNext-title {
 
}

</style>

