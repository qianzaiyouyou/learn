<template>
   <div id="detail">
     <detail-nav-bar class="detail_nav_bar"/>
     <scroll class="content">
             <!-- ref="scroll"
             :probe-type="3"
             :pull-up-load='true'> -->
         <detail-swiper :top-images='topImages'/>
         <detail-base-info :goods='goods'/>
         <detail-shop-info :ShopInfo='shop'/>
         <detail-goods-info :detailInfo='detailInfo'/>
         <detail-param-info :GoodsParam='goodsparam'/>
         <detail-comment-info :comment-info="commentInfo"/>
         <goods-list :goods='recommends'/>
     </scroll>
   </div>
</template>

<script>

import DetailNavBar from './childComps/DetailNavBar';
import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailParamInfo from './childComps/DetailParamInfo';
import DetailCommentInfo from './childComps/DetailCommentInfo';

import Scroll from 'components/scroll/Scroll';
import GoodsList from 'components/content/goods/goodsList';
// import {debounce} from 'common/utils';

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail';



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
          detailInfo: {},
          goodsparam: {},
          commentInfo: {}, //评论信息
          recommends: [] //推荐信息
      };
   },

   components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList
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

         //5.取出参数信息
         this.goodsparam = new GoodsParam(data.itemParams.info , data.itemParams.rule);

         //6.取出评论信息
         if (data.rate.cRate !== 0) {
            this.commentInfo = data.rate.list[0]
         }
       })
      
      //3.请求推荐数据
      getRecommend().then(res => {
            console.log(res);
            this.recommends = res.data.list;
         })
   },
   mounted() {
      //1.图片加载完成的事件监听
      //有在下方对refresh的闭包引用所以refresh在使用完后不会被销毁
      // const refresh = debounce(this.$refs.scroll.refresh , 500);

      //监听item中图片加载完成
      //    解决better-scroll的bug不会随着图片加载自己更新高度的问题，
      //    添加一个事件总线(即在mian.js中创建一个vue实例),
      //    通过其在goodsListItem中每加载图片即发射一次imageLoad()事件在此接收
      this.$bus.$on('itemImageLoadInfo', () => {
         refresh();
         // this.$refs.scroll.refresh();
      });
   },
   activated() {
      console.log(this.saveY);
      // this.$refs.scroll.scrollTo(0, this.saveY, 0);
      this.$refs.scroll.refresh();
   },
   deactivated() {
      console.log(this.saveY);
      // this.saveY = this.$refs.scroll.getScrollY();
      console.log(this.saveY);
   },
   

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
   background-color: #fff;
}
.detail_nav_bar{
   position: relative;
   z-index: 9;
}
</style>