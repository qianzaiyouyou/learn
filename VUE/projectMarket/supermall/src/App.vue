<template>
  <div id="app">

    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
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
body {
  margin: 0;
}
a{
text-decoration:none;
color:#333;
}
</style>
