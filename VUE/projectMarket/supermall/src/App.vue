<template>
  <div id="app">

    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar';

export default {
  name: 'App',
  components: {
      MainTabBar
  }
}
</script>

<style>

</style>
