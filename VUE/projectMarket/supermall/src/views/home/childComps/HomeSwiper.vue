<template>
   
   <swiper>
         <swiper-item v-for="(item, index) in banners" :key="index"> 
            <a :href="item.link">
               <img :src="item.image" alt="" @load='imageLoad'>
            </a>
         </swiper-item>
    </swiper>

</template>

<script>


import {Swiper,SwiperItem} from 'components/common/swiper/index.js';

export default {
    name: "HomeSwiper",
    props: {
          banners: {
              type: Array,
              default() {
                  return []
              }
          },
          recommends: {
              type: Array,
              default() {
                  return []
              }
          }
    },
   data () {
      return {
          isload: false
      };
   },

   components: {
       Swiper,
       SwiperItem
   },

   computed: {},

   methods: {
       imageLoad() {
           if(!this.isload){
               this.$emit('swiperImageLoad');
               this.isload = true;
           }
       }
   }
}
</script>
<style lang='css' scoped>

</style>