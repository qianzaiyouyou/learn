<template>
   <div>
        <nav-bar class="home-nav">
            <div slot="left">
               <a href="" class="top_imgs">
                  <img src="~assets/img/option/back.svg" alt="" class="top_imgs">
               </a>
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" :key='index' 
                                                    class="title-item"
                                                    @click="titleColor(index)"
                                                    :class="{active: index === currentIndex}"
                >{{item}}</div>
            </div>
            
         </nav-bar>
   </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";

export default {
   data () {
      return {
          titles:['商品','参数','评论','推荐'],
          currentIndex: 0,
      };
   },

   components: {
       NavBar,
   },

   computed: {},

   methods: {
       titleColor(index) {
           this.currentIndex = index;
           console.log(index);
       }
   }
}
</script>



<style lang='css' scoped>
/* .home-nav {
      background-color: #ff8e96;
      color: white;
      /* 在使用原生浏览器滚动时，为了让导航不跟随一起滚动 */
      /* display: flex;
      position: fixed; 
      left: 0;
      right: 0;
      top: 0;
      z-index: 1000; 
   } */
      .top_imgs {
        width: 20px;
        height: 20px;
        /* margin-top: 3px; */
        vertical-align: middle;
        margin-bottom: 3px;
    }
    .title{
        display: flex;
        font-size: 13px;
    }
    .title-item{
        flex: 1;
    }
    .active{
        color: #ff8e96;
    }
</style>