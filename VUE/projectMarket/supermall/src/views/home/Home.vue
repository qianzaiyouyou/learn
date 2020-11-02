<template>
   <div id="home">
      <nav-bar class="home-nav">
            <div slot="left">11</div>
            <div slot="center">购物街</div>
            <div slot="right">44</div>
      </nav-bar>
      <h2>首页</h2></div>
   
</template>
    
<script>

import NavBar from "components/common/navbar/NavBar";

export default {
   name:"Home",
   data () {
      return {

      };
   },

   components: {
      NavBar
   },

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
   #home {

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
   }
   .home-nav {
      background-color: #ff8e96;
      color: white;
   }
</style>