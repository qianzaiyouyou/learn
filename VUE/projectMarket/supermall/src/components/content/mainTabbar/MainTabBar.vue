<template>
      
      <tab-bar>
        <tab-bar-item path="/home" activeColor="black">
          <img slot="item-icon" src="~assets/img/bottom_button/homePage.png" alt=""><!-- 配置文件里修改的快捷路径 -->
          <img slot="item-active" src="~assets/img/bottom_button/homePage1.png" alt="">
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="black">
          <img slot="item-icon" src="~assets/img/bottom_button/sort.png" alt="">
          <img slot="item-active" src="~assets/img/bottom_button/sort1.png" alt="">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="black">
          <img slot="item-icon" src="~assets/img/bottom_button/shoppingCart.png" alt="">
          <img slot="item-active" src="~assets/img/bottom_button/shoppingCart1.png" alt="">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="black">
          <img slot="item-icon" src="~assets/img/bottom_button/personage.png" alt="">
          <img slot="item-active" src="~assets/img/bottom_button/personage1.png" alt="">
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
</template>

<script>
//路径@为在build中的base.conf文件中resolve里面设置为直接定位为src文件夹
import TabBar from "components/common/tabber/tabBar";
import TabBarItem from "components/common/tabber/TabBarItem";

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