<template>
  <div class="showNext">
    <h2 class="showNext-title display-4 mb-5">{{$t('lang.showNext.title')}}</h2>
    <div v-if="info!==[]" class="showNext-info">

      <show-next-row
      v-for="(dayinfo, index) in info" :key="index"
      :day-info="dayinfo"
      :plus="$t('lang.showNext.daydetail')[index]"
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
  }
}
</script>

<style lang="scss" scoped>

</style>

