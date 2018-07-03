<template>
  <div>
    <h3 class="showNext-dayTitle">{{showDate}}</h3>
    <div class="showNext-row row">
      <ShowNextItem class="col-3 p-3 mb-2 bg-light text-dark border"
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
  props:["dayInfo"],
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
.showNext-dayTitle {
  // text-align: center;
}
.showNext-row {
  margin-bottom: 30px;
 }
</style>
