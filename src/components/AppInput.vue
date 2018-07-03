<template>
  <div class="appInput">
    <form v-on:submit.prevent="changeCity" class="input-group mb-4">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Ville</label>
      </div>
      <input type="text" class="form-control" placeholder="Exemple: Paris" aria-label="Ville" aria-describedby="basic-addon2" v-model="inputValue">
      <div class="input-group-append" v-if="inputValue!==''">
        <input class="btn btn-outline-secondary text-white" type="submit" value="Valider">
      </div>
    </form>
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
