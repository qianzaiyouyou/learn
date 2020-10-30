<template>
      
      <tab-bar>
        <tab-bar-item path="/home" activeColor="blue">
          <img slot="item-icon" src="~imgs/homePage.png" alt=""><!-- 配置文件里修改的快捷路径 -->
          <img slot="item-active" src="../../assets/img/homePage1.png" alt="">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="blue">
          <img slot="item-icon" src="../../assets/img/sort.png" alt="">
          <img slot="item-active" src="../../assets/img/sort1.png" alt="">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="blue">
          <img slot="item-icon" src="../../assets/img/shoppingCart.png" alt="">
          <img slot="item-active" src="../../assets/img/shoppingCart1.png" alt="">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="blue">
          <img slot="item-icon" src="../../assets/img/personage.png" alt="">
          <img slot="item-active" src="../../assets/img/personage1.png" alt="">
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
</template>

<script>
//路径@为在build中的base.conf文件中resolve里面设置为直接定位为src文件夹
import TabBar from "@/components/tabber/tabBar";
import TabBarItem from "../tabber/TabBarItem";

export default {
   data () {
      return {

      };
   },

   components: {
       TabBar,
       TabBarItem
   },

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>

</style>