<template>
   <div v-if="Object.keys(detailInfo).length !== 0" class="detail_goods_info">
       <div class="shop_introduce">
           <div @click = 'sdfsdf' class="shop_introducetxt">{{detailInfo.desc}}</div>
           <div class="shop_introducetxt">{{detailInfo.detailImage[0].key}}</div>
       </div>
       <div class="shop_introduceimg">
           <div v-for ="(item,index) in this.detailInfo.detailImage[0].list " :key = "index" class="shop_introduceimgss">
               <img :src="item" alt="">
           </div>
       </div>
   </div>
</template>

<script>

export default {
    props:{
        detailInfo:{
            type: Object,
            default(){
                return {};
            }
        }
    },
   data () {
      return {
          detailInfos : this.detailInfo.detailImage
      };
   },

   components: {},

   computed: {
       
   },

   methods: {
       sdfsdf() {
           console.log(this.detailInfo.detailImage[0]);
       }
   },
//    beforeDestroy(){
//        console.log(this.detailInfo);
//    }
    ready() {
        // this.detailInfos = detailInfo;
        console.log(this.detailInfos);
    }

}
</script>
<style lang='css' scoped>
.detail_goods_info{
    margin-top: 10px;
    border-bottom: 5px solid #f9f9fa;
}
.shop_introducetxt{
    margin: 2px;
    text-align: center;
    /* height: 100px; */
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    min-height: 50px;
    padding: 15px;
}
.shop_introduceimg{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
.shop_introduceimgss{
    position: relative;
    width: 100%;
}
.shop_introduceimgss img{
    
    width: 100%;
}
</style>