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
         <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
            <home-swiper :banners="banners"/>
            <home-recommend-view :recommends="recommends"/>
            <home-feature-view/>
            <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
            <good-list :goods="showGoods"/>
         </scroll>

         <back-top @click.native="backClick" v-show="isShowBackTop"/>
      <!-- <ul>
      <li></li>
      <li></li>
      </ul> -->



      </div>
   
</template>
    
<script>

import HomeSwiper from './childComps/HomeSwiper';
import HomeRecommendView from './childComps/HomeRecommendView';
import HomeFeatureView from './childComps/HomeFeatureView';

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodList from "components/content/goods/goodsList";
import Scroll from 'components/scroll/Scroll';
import BackTop from 'components/content/backTop/BackTop';

import {getHomeMultdata,getHomeGoods} from 'network/home';



export default {
   name:"Home",
   data () {
      return {
          result: null,
          banners: [],
          recommends: [],
          goods: {
             'pop': {page: 0, list: []},
             'new': {page: 0, list: []},
             'sell': {page: 0, list: []},
          },
          currentType: 'pop',
          isShowBackTop: false,
      };
   },
   created() {
      
      //1.请求多个数据
      this.GetHomeMultdata();

      //2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
   },
   mounted() {
      //监听item中图片加载完成
      //    解决better-scroll的bug不会随着图片加载自己更新高度的问题，
      //    添加一个事件总线(即在mian.js中创建一个vue实例),
      //    通过其在goodsListItem中每加载图片即发射一次imageLoad()事件在此接收
      this.$bus.$on('itemImageLoad', () => {
         this.$refs.scroll.refresh();
      });
   },
   components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,
      TabControl,
      GoodList,
      Scroll,
      BackTop
   },

   computed: {
      showGoods() {
         return this.goods[this.currentType].list;
      }
   },

   methods: {
      /** 
      * 事件监听相关的方法
      */

      tabClick(index) {
         console.log(index);
         switch(index){
            case 0:
               this.currentType = 'pop';
               break;
            case 1:
               this.currentType = 'new';
               break;
            case 2:
               this.currentType = 'sell';
               break;
         }
      },

      backClick() {
         //返回顶部
         this.$refs.scroll.scrollTo(0 , 0 , 500);
         // console.log(this.$refs.scroll.scroll);
      },
      //获取距离顶部的值，过1000以后v-show为true让其显示
      contentScroll(position) {
         //position实时监听BScoll的滚动位置
         console.log(position);
         this.isShowBackTop = (-position.y) > 1000;//取绝对值对比
      },

      /** 
      * 网络请求相关的方法
      */
      GetHomeMultdata () {
         //1.请求多个数据
         getHomeMultdata().then(res => {
            console.log(res);
            this.result = res;
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
         })
      },
      getHomeGoods(type) {
         //2.请求商品数据
         const page = this.goods[type].page + 1;
         getHomeGoods(type, page).then(res => {
            console.log(res);
            //...语法，直接遍历push进goods对象里面的数组，省了for循环遍历
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page += 1;
            //console.log(this.goods);
         })

      },


   }
}
</script>
<style lang='css' scoped>
/*scoped作用域 */
   #home {

    /* position: fixed; */
    left: 0;
    right: 0;
    top: 0;
    border: 0;
    margin: 0;
    padding: 0;
    /* padding-top: 44px; */
    height: 100vh;
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
       z-index: 9;
    }
    .content {
       position: absolute;
       overflow: hidden;
       top: 44px;
       bottom: 49px;
       left: 0;
       right: 0;
    }
    /* .content {
       height: calc(100% - 93px);
       overflow: hidden;
       padding-top: 44px;
    } */
</style>