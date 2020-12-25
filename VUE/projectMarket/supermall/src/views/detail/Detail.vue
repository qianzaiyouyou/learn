<template>
   <div id="detail">
     <detail-nav-bar class="detail_nav_bar"/>
     <scroll class="content">
         <detail-swiper :top-images='topImages'/>
         <detail-base-info :goods='goods'/>
         <detail-shop-info :ShopInfo='shop'/>
         <detail-goods-info :detailInfo='detailInfo'/>
     </scroll>
   </div>
</template>

<script>

import DetailNavBar from './childComps/DetailNavBar';
import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailGoodsInfo from './childComps/DetailGoodsInfo';

import Scroll from 'components/scroll/Scroll';

import {getDetail,Goods,Shop} from 'network/detail';



export default {
   name: "Detail",
   data () {
      return {
          iid: null,
          topImages: [],
          res: null,
          goods: {},
          shop: {},
          detailImgs:[],
          detailInfo: {}
      };
   },

   components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo
   },

   computed: {},

   methods: {},

   created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid;
      //2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
         console.log(res);
         //1.获取顶部的图片轮播数据
         const data = res.result;
         console.log(data);
         this.topImages = data.itemInfo.topImages;
         //  console.log(data.itemInfo.topImages);
          //2.获取商品信息
         this.goods = new Goods(data.itemInfo, data.columns,data.shopInfo.services);
         //  console.log(this.goods);

         //3.创建店铺信息
         this.shop = new Shop(data.shopInfo);
         //  console.log(this.shop);

         //4.保存商品的详情数据
         this.detailInfo = data.detailInfo;
       })
   }

}
</script>
<style lang='css' scoped>
#detail{
   position: relative;
   height: 100vh;
   z-index: 9;
   background-color: #fff;
}
.content{
   height: calc(100% - 44px);
}
.detail_nav_bar{
   position: relative;
   z-index: 9;
}
</style>