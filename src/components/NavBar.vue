<template>
  <ul class="nav bg-light rounded mb-2">
    <li class="nav-item">
      <router-link class="nav-link" to="/">{{$t('lang.navBar.today')}}</router-link>   
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/next">{{$t('lang.navBar.next')}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  font-weight: bold;
}
</style>
