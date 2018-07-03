<template>
  <div class="mb-4 pt-5 border-top border-secondary">
    <h3 class="showNext-dayTitle mb-3">{{showDate}} <span class="badge badge-primary">{{plus}}</span></h3> 
    <div class="showNext-row row mb-3">
      <ShowNextItem
      v-for="(item, index2) in dayInfo" :key="index2"
      v-bind:info="item"
      />
    </div>
  </div>
</template>

<script>
import ShowNextItem from "@/components/ShowNext/ShowNextItem.vue";

export default {
  name:"ShowNextRow",
  props:["dayInfo", "plus"],
  components: {ShowNextItem},
  computed:{
    showDate(){
      var date = new Date(this.dayInfo[0].dt*1000)
      
      return `${date.toLocaleDateString()}`;
    }
  }
}
</script>

<style lang="scss">

</style>
