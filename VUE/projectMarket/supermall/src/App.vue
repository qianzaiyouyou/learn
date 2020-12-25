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
  },
  computed: {
    // accordingMainTabBar(){
    //   if(!/^\/detail/.test($route.path)){
    //     return false;
    //   }
    // }
  },
}
</script>

<style>
body {
  margin: 0;
  width: 100vw;
}
a{
text-decoration:none;
color:#333;
}
*{
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>