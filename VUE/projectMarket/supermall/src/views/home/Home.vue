<template>
   <div id="home">
      <nav-bar class="home-nav">
            <div slot="left">
               <a href="" class="top_imgs">
                  <img src="~assets/img/option/back.svg" alt="" class="top_imgs">
               </a>
            </div>
            <div slot="center">购物街</div>
            <div slot="right">
               <a href="" class="">
                  <img src="~assets/img/option/option.svg" alt="" class="top_imgs">
               </a>
            </div>
         </nav-bar>
         <!-- <div class="top_height"></div> -->
         <home-swiper :banners="banners"/>
         <home-recommend-view :recommends="recommends"/>
         <home-feature-view/>
         <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>

      <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      </ul>



      </div>
   
</template>
    
<script>

import HomeSwiper from './childComps/HomeSwiper';
import HomeRecommendView from './childComps/HomeRecommendView';
import HomeFeatureView from './childComps/HomeFeatureView';

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";

import {getHomeMultdata} from 'network/home';


export default {
   name:"Home",
   data () {
      return {
          result: null,
          banners: [],
          recommends: []
      };
   },
   created() {
      //1.请求多个数据
      getHomeMultdata().then(res => {
         console.log(res);
         this.result = res;
         this.banners = res.data.banner.list;
         this.recommends = res.data.recommend.list;
      })
   },
   components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      TabControl
   },

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>
   #home {

    /* position: fixed; */
    left: 0;
    right: 0;
    top: 0;
    border: 0;
    margin: 0;
    padding: 0;
    padding-top: 44px;
   }
   .home-nav {
      display: flex;
      position: fixed;
      background-color: #ff8e96;
      color: white;
      left: 0;
      right: 0;
      top: 0;
      z-index: 1000;
   }
   .top_imgs {
        width: 20px;
        height: 20px;
        /* margin-top: 3px; */
        vertical-align: middle;
        /* margin-bottom: 3px; */
    }
    /* .top_height{
       display: flex;
       height: 44px;
    } */

    .tab-control{
       position: sticky;
       top: 44px;
    }
</style>