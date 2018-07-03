<template>
  <div class="appInput">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Ville</span>
      </div>
      <form v-on:submit.prevent="changeCity">

        <input type="text" class="form-control" placeholder="exemple: Paris" aria-label="Ville" aria-describedby="basic-addon1" v-model="inputValue">
      </form>
    </div>
  </div>

  
</template>

<script>
export default {
  name: 'AppInput',
  data(){
    return {
      inputValue:""
    }
  },
  props: {
    
  },
  methods:{
    changeCity(){
      if (this.inputValue!=="") {
        this.$emit('change-city', this.inputValue)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
